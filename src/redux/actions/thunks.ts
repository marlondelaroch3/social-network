import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllDataPosts } from '../../utils/getAllDataPost';
import { getAllDataComments } from '../../utils/getAllDataComments';

const app_id = process.env.REACT_APP_APP_ID;
const url = process.env.REACT_APP_API_URL;
const headers = app_id ? ({ 'app-id': app_id } as HeadersInit) : undefined;

const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async (page: number | 'clean') => {
    if (page === 'clean') return [];
    const data = await getAllDataPosts({
      headers,
      page,
    });
    const dataWithComments = await getAllDataComments({ headers, data });

    return dataWithComments;
  }
);

const fetchTags = createAsyncThunk('tags/fetchTags', async () => {
  const response = await fetch(`${url}/tag`, {
    headers,
  });
  const { data } = await response.json();

  const filteredData = data
    .filter(
      (item: string) =>
        typeof item === 'string' &&
        item.split(' ').every((part) => /^[a-zA-Z]+$/.test(part)) &&
        item.length <= 20
    )

    .filter(
      (item: string, index: number, array: string[]) =>
        array.indexOf(item) === index
    )
    .filter((item: string) => item !== null && item !== '');

  return filteredData;
});

const fetchPostsByTag = createAsyncThunk(
  'tags/fetchPostsByTag',
  async (tag: string) => {
    const response = await fetch(`${url}/tag/${tag}/post`, {
      headers,
    });
    const { data } = await response.json();
    const dataWithComments = await getAllDataComments({ headers, data });

    if (!data.length) alert('No posts found with this tag!');

    return dataWithComments;
  }
);

export { fetchTags, fetchPosts, fetchPostsByTag };
