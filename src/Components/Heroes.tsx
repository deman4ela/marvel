import React from 'react';
import { JsxElement } from 'typescript';
import { NavLink } from 'react-router-dom';
import { getAPIResource, getAllHeroes, getHeroeByID, getAllComicsOfHero, getSearchedfHeroes } from '../api/api';
import ComicsOfHero from './ComicsOfHero';
import Logo from './Logo';
import ProgressBar from './ProgressBar';
import HeroesListCreation from './HeroesListCreation';
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
  }

  componentDidMount() {
    getAllHeroes().then((res) => {
      this.setState({ heroes: res.data.data.results, isLoading: false });
    });

  }

  componentDidUpdate(prevProps: any) {
    const { location } = this.props;
    if (location !== prevProps.location) {
      const wantedHeroName = queryString.parse(location.search).query;
      if (wantedHeroName) {
        getSearchedfHeroes('characters', wantedHeroName).then(res => {
          const heroesList = res.data.data.results;
          if (heroesList[0]) {this.setState({ heroes: heroesList });} else {alert('Sorry, nothing was found. Please double-check spelling or try again.');}

        });
      } else {alert('Sorry. It seems that no searching parameter was inserted.');}
    }

  }

  handleChange(e: any) {
    this.setState({ searchInput: e.target.value });
  }

  handleSubmit(e: any) {
    const { history } = this.props;
    e.preventDefault();
    const { searchInput } = this.state;
    history.push(`?query=${searchInput}`);
  }

  render() {
    const { heroes, isLoading } = this.state;
    console.log(heroes);
    return (
      <div>
        <Logo />
        <div className="searchBar">
          <form onSubmit={this.handleSubmit}>
            <input type="text" name="query" placeholder="Type a hero" onChange={this.handleChange} className="searchBar__input" />
            <button type='submit'className="searchBar__button"> Search </button>
          </form>
        </div>

        <ProgressBar isLoading={isLoading} />

        <HeroesListCreation heroes={heroes} />
      </div>);
  }
}

export default Heroes;
