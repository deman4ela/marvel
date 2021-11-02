import React from 'react';
import { RouteComponentProps } from 'react-router';
import { JsxElement } from 'typescript';
import { NavLink } from 'react-router-dom';
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

const queryString = require('query-string');

interface IHeroesProps extends RouteComponentProps {
  fetchedHeroesSuccess: Array<IHero>;
  fetchedHeroesError: string;
  loaderForHeroes: boolean;
  fetchHeroes: (heroID: string) => void;
};

interface IHeroesState {
  searchInput: string;
};

class Heroes extends React.Component<IHeroesProps, IHeroesState> {
  constructor(props: IHeroesProps) {
    super(props);
    this.state = {
      searchInput: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(): void {
    const searchedHeroName = queryString.parse(this.props.location.search).query;
    this.props.fetchHeroes(searchedHeroName);
  }

  componentDidUpdate(prevProps: IHeroesProps): void {
    if (this.props.location !== prevProps.location) {
      const searchedHeroName = queryString.parse(this.props.location.search).query;
      this.props.fetchHeroes(searchedHeroName);
    }
  }

  handleChange(e: React.ChangeEvent): void {
    const { value } = e.target as HTMLInputElement;
    this.setState({ searchInput: value });
  }

  handleSubmit(e: React.SyntheticEvent): void {
    e.preventDefault();
    if (this.state.searchInput) {
      this.props.history.push(`?query=${this.state.searchInput}`);
    }
  }

  render(): JSX.Element {
    const { fetchedHeroesSuccess, fetchedHeroesError, loaderForHeroes } = this.props;

    return (
      <div>
        <Logo />
        <SearchBar  handleSubmit={this.handleSubmit}  handleChange={this.handleChange} />
        <ProgressBar isLoading={loaderForHeroes} />
        <HeroesListCreation heroes={fetchedHeroesSuccess} />
        <Alert fetchedHeroesError={fetchedHeroesError} />
      </div>);
  }
}

export default Heroes;

