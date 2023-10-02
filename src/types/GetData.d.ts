import { IPosts } from './Post';

export interface IHeaders {
  headers: HeadersInit | undefined;
}
export interface IGetAllData extends IHeaders {
  postId?: string;
  data?: IPosts[];
  page?: number
}
