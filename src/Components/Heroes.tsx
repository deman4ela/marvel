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

const queryString = require('query-string');

class Heroes extends React.Component<any, any> {
  constructor(props:any) {
    super(props);
    this.state = {
      heroes: [],
      searchInput: '',
      isLoading: true
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClickAsc = this.handleClickAsc.bind(this);
    this.handleClickDesc = this.handleClickDesc.bind(this);
  }

  componentDidMount() {
    this.getHeroes();
  }

  componentDidUpdate(prevProps: any) {
    if (this.props.location !== prevProps.location) {
      this.getHeroes();
    }
  }

  handleChange(e: any) {
    this.setState({ searchInput: e.target.value });
  }

  handleSubmit(e: any) {
    e.preventDefault();
    this.props.history.push(`?query=${this.state.searchInput}`);
  }

  handleClickAsc(e: any) {
    const query = queryString.parse(this.props.location.search);
    query.orderBy = 'name';
    const stringified = queryString.stringify(query);
    this.props.history.push(`?${stringified}`);
  }

  handleClickDesc(e: any) {
    const query = queryString.parse(this.props.location.search);
    query.orderBy = '-name';
    const stringified = queryString.stringify(query);
    this.props.history.push(`?${stringified}`);
  }

  getHeroes() {
    const searchedHeroName = queryString.parse(this.props.location.search).query;
    const { orderBy } = queryString.parse(this.props.location.search);
    if (searchedHeroName || orderBy) {
      getAPIResourceTEST('characters', searchedHeroName, orderBy).then(results => {
        const heroesList = results;
        if (heroesList) {
          this.setState({ heroes: heroesList, isLoading: false });
        } else {
          console.log(
            'Sorry, nothing was found. Please double-check spelling or try again.'
          );
        }
      });
    } else {
      getAllHeroes().then((results) => {
        this.setState({ heroes: results, isLoading: false });
      });
    }
  }

  render() {
    const { heroes, isLoading } = this.state;
    return (
      <div>
        <Logo />
        <SearchBar  handleSubmit={this.handleSubmit}  handleChange={this.handleChange} handleClickAsc={this.handleClickAsc} handleClickDesc={this.handleClickDesc} />
        <ProgressBar isLoading={isLoading} />
        <HeroesListCreation heroes={heroes} />
      </div>);
  }
}

export default Heroes;
