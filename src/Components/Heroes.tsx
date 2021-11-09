import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { JsxElement } from 'typescript';
import { getAPIResource, getAllHeroes, getAllComicsOfHero } from '../api/api';
import ComicsOfHero from './ComicsOfHero';
import Logo from './Logo';
import ProgressBar from './ProgressBar';
import HeroesListCreation from './HeroesListCreation';
import SearchBar from './SearchBar';
import '../index.css';
import { fetchComics, fetchHeroes } from '../redux/actions';
import Alert from './Alert';
import { IHero } from '../interfaces';
import { IRootState } from '../redux/reducers/rootReducer';

const queryString = require('query-string');

function Heroes(): JSX.Element {

  const [searchInput, setSearchInput] = useState('');
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const { fetchedHeroesSuccess, fetchedHeroesError, loaderForHeroes } = useSelector((state: IRootState) => state.heroes);

  const handleChange = (e: React.ChangeEvent): void => {
    const { value } = e.target as HTMLInputElement;
    setSearchInput(value);
  };

  const handleSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    if (searchInput) {
      history.push(`?query=${searchInput}`);
    }
  };

  useEffect(() => {
    const searchedHeroName = queryString.parse(location.search).query;
    dispatch(fetchHeroes(searchedHeroName));
  }, [location.search]);

  return (
    <div>
      <Logo />
      <SearchBar  handleSubmit={handleSubmit}  handleChange={handleChange} />
      <ProgressBar isLoading={loaderForHeroes} />
      <HeroesListCreation heroes={fetchedHeroesSuccess} />
      <Alert fetchedHeroesError={fetchedHeroesError} />
    </div>
  );
};

export default Heroes;