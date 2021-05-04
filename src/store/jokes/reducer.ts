import { JokesReducer, ActionsTypes } from "./types";

const initialValue: JokesReducer = {
  jokesList: [],
  isLoading: false,
}

export default function (state: JokesReducer = initialValue, action: ActionsTypes): JokesReducer {
  switch (action.type) {
    case 'jokes/GET_JOKES':
      return {
        ...state,
        isLoading: true,
      };

    case 'jokes/GET_JOKES_SUCCESS':
      return {
        ...state,
        jokesList: [...state.jokesList, action.payload.joke],
        isLoading: false,
      };
    default:
      return state;
  }
}