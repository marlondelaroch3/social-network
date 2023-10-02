import IInitialState from './InitialState';
import IText from './Text';

export interface ITag extends IText {
}

export interface ITagsState extends IInitialState {
  tags: string[];
}
