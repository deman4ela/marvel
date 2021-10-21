import React from 'react';
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

const queryString = require('query-string');

class Heroes extends React.Component<any, any> {
  constructor(props:any) {
    super(props);
    this.state = {
      searchInput: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    let searchedHeroName = queryString.parse(this.props.location.search).query;
    if (searchedHeroName === undefined) {
      searchedHeroName = '';
    }
    (() => this.props.fetchHeroes(searchedHeroName))();
  }

  componentDidUpdate(prevProps: any) {
    if (this.props.location !== prevProps.location) {
      const searchedHeroName = queryString.parse(this.props.location.search).query;
      (() => this.props.fetchHeroes(searchedHeroName))();
    }
  }

  handleChange(e: any) {
    this.setState({ searchInput: e.target.value });
  }

  handleSubmit(e: any) {
    e.preventDefault();
    if (this.state.searchInput) {
      this.props.history.push(`?query=${this.state.searchInput}`);
    }
  }

  render() {
    const { fetchedHeroesSuccess, fetchedHeroesError, loaderWorksHeroes } = this.props;

    return (
      <div>
        <Logo />
        <SearchBar  handleSubmit={this.handleSubmit}  handleChange={this.handleChange} />
        <ProgressBar isLoading={loaderWorksHeroes} />
        <HeroesListCreation heroes={fetchedHeroesSuccess} />
        <Alert fetchedHeroesError={fetchedHeroesError} />
      </div>);
  }
}

export default Heroes;

