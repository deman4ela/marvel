import { HeroesActionsTypes, ComicsActionsTypes }  from './types';
import { IHero, IComic } from '../interfaces';

// Heroes
export interface IfetchHeroes {
  type: HeroesActionsTypes.FETCH_HEROES;
  payload: string;
}

export interface IfetchHeroesSuccess {
  type: HeroesActionsTypes.FETCH_HEROES_SUCCESS;
  payload: Array<IHero>;
}

export interface IfetchHeroesError {
  type: HeroesActionsTypes.FETCH_HEROES_ERROR;
  payload: string;
}

export type HeroesActions = IfetchHeroes | IfetchHeroesSuccess | IfetchHeroesError;

export const fetchHeroes = (heroName: string): IfetchHeroes => ({
  type: HeroesActionsTypes.FETCH_HEROES,
  payload: heroName,
});

export const fetchHeroesSuccess = (heroes: Array<IHero>): IfetchHeroesSuccess => ({
  type: HeroesActionsTypes.FETCH_HEROES_SUCCESS,
  payload: heroes,
});

export const fetchHeroesError = (err: string): IfetchHeroesError => ({
  type: HeroesActionsTypes.FETCH_HEROES_ERROR,
  payload: err,
});

// Comics
export interface IfetchComics {
  type: ComicsActionsTypes.FETCH_COMICS;
  payload: string;
}

export interface IfetchComicsSuccess {
  type: ComicsActionsTypes.FETCH_COMICS_SUCCESS;
  payload: Array<IComic>;
}
export interface IfetchComicsError {
  type: ComicsActionsTypes.FETCH_COMICS_ERROR;
  payload: string;
}

export type ComicsActions = IfetchComics | IfetchComicsSuccess | IfetchComicsError;

export const fetchComics = (heroId: string): IfetchComics => ({
  type: ComicsActionsTypes.FETCH_COMICS,
  payload: heroId
});

export const fetchComicsSuccess = (comics: Array<IComic>): IfetchComicsSuccess => ({
  type: ComicsActionsTypes.FETCH_COMICS_SUCCESS,
  payload: comics
});

export const fetchComicsError = (err: string): IfetchComicsError => ({
  type: ComicsActionsTypes.FETCH_COMICS_ERROR,
  payload: err
});
