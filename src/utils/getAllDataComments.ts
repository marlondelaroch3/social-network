import { IGetAllData } from '../types/GetData';
import { IPosts } from '../types/Post';

const url = process.env.REACT_APP_API_URL;

export const getAllDataComments = async ({ headers, data }: IGetAllData) => {
  if (!data) {
    return []; // Manejar el caso en que data sea undefined
  }

  const dataWithPosts = await Promise.all<IPosts>(
    data.map(async (post) => {
      const response = await fetch(`${url}/post/${post.id}/comment?limit=50`, {
        headers,
      });
      const { data } = await response.json();
      return { ...post, comments: data };
    })
  );
  return dataWithPosts;
};
