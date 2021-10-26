import { FETCH_HEROES, FETCH_HEROES_SUCCESS, FETCH_HEROES_ERROR, FETCH_COMICS, FETCH_COMICS_SUCCESS, FETCH_COMICS_ERROR, HIDE_LOADER_HEROES, HIDE_LOADER_COMICS }  from './types';

export const fetchHeroes = (heroName: string) => ({ type: FETCH_HEROES, payload: heroName });
export const fetchHeroesSuccess = (heroes: any) => ({ type: FETCH_HEROES_SUCCESS, payload: heroes });
export const fetchHeroesError = (err: any) => ({ type: FETCH_HEROES_ERROR, payload: err });

export const hideLoaderHeroes = () => ({ type: HIDE_LOADER_HEROES });

export const fetchComics = (heroId: number) => ({ type: FETCH_COMICS, payload: heroId });
export const fetchComicsSuccess = (comics: any) => ({ type: FETCH_COMICS_SUCCESS, payload: comics });
export const fetchComicsError = (err: any) => ({ type: FETCH_COMICS_ERROR, payload: err });

export const hideLoaderComics = () => ({ type: HIDE_LOADER_COMICS });
