/* eslint-disable no-unused-vars */
import { ChangeEvent } from 'react';

export default interface ISelect {
  id: string;
  options?: string[];
  handleChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}
