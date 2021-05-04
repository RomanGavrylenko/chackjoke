import { InferValueTypes } from "ReduxTypes";
import * as Actions from './actions';

export interface IJokeItem {
  categories: unknown[];
  created_at: string;
  icon_url: string;
  id: string;
  updated_at: string;
  url: string;
  value: string;
}

export interface JokesReducer {
  jokesList: Array<IJokeItem>;
  isLoading: boolean;
}

export type ActionsTypes = ReturnType<InferValueTypes<typeof Actions>>;