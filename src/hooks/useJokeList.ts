import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "ReduxTypes";
import { getJokes } from "store/jokes/actions";

export const useJokeList = () => {
  const { isLoading, jokesList } = useSelector((state: RootState) => ({
    jokesList: state.jokes.jokesList,
    isLoading: state.jokes.isLoading,
  }));

  const dispatch = useDispatch();

  const getJokeData = useCallback(() => {
    dispatch(getJokes());
  }, [dispatch]);

  useEffect(() => {
    if (jokesList.length === 0) getJokeData();
  }, []);

  return {
    jokesList,
    getData: getJokeData,
    isLoading,
  }
}