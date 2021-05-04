import { call, put, takeLatest } from "@redux-saga/core/effects";
import { getJokeAPI } from "API/jokes";
import { getJokesFail, getJokesSucess } from "./actions";
import { GET_JOKES } from "./constants";
import { IJokeItem } from "./types";

function* handleGetJokes() {
  try {
    const joke: IJokeItem = yield call(getJokeAPI);
    yield put(getJokesSucess(joke));
  } catch (e) {
    yield put(getJokesFail());
  }
}

export default function* () {
  yield takeLatest(GET_JOKES, handleGetJokes);
}