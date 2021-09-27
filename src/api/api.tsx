import axios from 'axios';

require('dotenv').config();

const APIBaseURL = 'https://gateway.marvel.com/v1/public/';
const APILimit = 5;
const { REACT_APP_API_KEY, REACT_APP_API_HASH } = process.env;

export async function getAPIResource(path: string) {
  const res = await axios.get(`${APIBaseURL}${path}?limit=${APILimit}&ts=1&apikey=${REACT_APP_API_KEY}&hash=${REACT_APP_API_HASH}`);
  try {
    return res;
  } catch (error) {
    throw new Error('Error');
  }
}

export function getAllHeroes() {
  return getAPIResource('characters');
}

export function getHeroeByID(heroID: any) {
  return getAPIResource(`characters/${heroID}`);
}

export function getAllComicsOfHero(heroID: any) {
  return getAPIResource(`characters/${heroID}/comics`);
}

export async function getSearchedfHeroes(path: string, wantedHeroName: string) {
  const res = await axios.get(`${APIBaseURL}${path}?nameStartsWith=${wantedHeroName}&limit=${APILimit}&ts=1&apikey=${REACT_APP_API_KEY}&hash=${REACT_APP_API_HASH}`);
  try {
    return res;
  } catch (error) {
    throw new Error('Error');
  }
}
