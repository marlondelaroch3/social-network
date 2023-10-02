import { IGetAllData } from '../types/GetData';
import { IPosts } from '../types/Post';

const url = process.env.REACT_APP_API_URL;

export const getAllDataPosts = async ({ headers, page }: IGetAllData) => {
  let allDataPosts: IPosts[] = [];
  const response = await fetch(`${url}/post?limit=10&page=${page}`, {
    headers,
  });

  const { data } = await response.json();

  allDataPosts = [...allDataPosts, ...data];
  return allDataPosts;
};
