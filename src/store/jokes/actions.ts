import { GET_JOKES, GET_JOKES_FAIL, GET_JOKES_SUCCESS } from "./constants";
import { IJokeItem } from "./types";

export const getJokes = () => ({
  type: GET_JOKES,
  payload: {},
});

export const getJokesSucess = (joke: IJokeItem) => ({
  type: GET_JOKES_SUCCESS,
  payload: { joke },
});

export const getJokesFail = () => ({
  type: GET_JOKES_FAIL,
  payload: {},
});