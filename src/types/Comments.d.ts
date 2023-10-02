export interface IComments {
  id: string;
  message: string;
  post: string;
  publishDate: string;
  owner: {
    firstName: string;
    picture: string;
    title?: string;
    lastName?: string;
  };
}

export interface ICommentsState {
  comments: IComments[];
  loading: boolean;
  error: string | undefined;
}
