import axios, { AxiosResponse } from 'axios';

require('dotenv').config();

const APIBaseURL = 'https://gateway.marvel.com/v1/public/';
const { REACT_APP_API_KEY, REACT_APP_API_HASH } = process.env;

export async function getAPIResource(path: string, searchedHeroName?: string): Promise<AxiosResponse> {
  const res = await axios.get(`${APIBaseURL}${path}`, {
    params: {
      apikey: REACT_APP_API_KEY,
      hash: REACT_APP_API_HASH,
      ts: 1,
      limit: 5,
      nameStartsWith: searchedHeroName,
    },
  });
  try {
    const { results } = res.data.data;
    return results;
  } catch (error) {
    throw new Error('Error');
  }
}

export function getAllHeroes() {
  return getAPIResource('characters');
}

export function getAllComicsOfHero(heroID: any) {
  return getAPIResource(`characters/${heroID}/comics`);
}

export function getHeroes(searchedHeroName: any): any {
  let result;
  if (searchedHeroName) {
    result = getAPIResource('characters', searchedHeroName);
  } else {
    result = getAllHeroes();
  }
  return result;
}
