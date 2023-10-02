import IInitialState from './InitialState';

export interface IPost {
  likes: number;
  backgroundImage: string;
  tags: string[];
  postText: string;
  userName: string;
  userId: string;
  profileImage: string;
}

export interface IPosts {
  likes: number;
  id: string;
  image: string;
  tags: string[];
  text: string;
  owner: {
    firstName: string;
    picture: string;
    id: string;
  };
  comments: IComments[];
}

export interface IPostsState extends IInitialState {
  posts: IPosts[];
  type: string;
}
