import { request } from "API"
import { IJokeItem } from "store/jokes/types"

export const getJokeAPI = () => {
  return request<IJokeItem>('https://api.chucknorris.io/jokes/random');
}