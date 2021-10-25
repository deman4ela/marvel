import React from 'react';
import { connect } from 'react-redux';
import Heroes from '../../Components/Heroes';
import { fetchHeroes } from '../actions';

const mapStateToProps = (state: any) => ({
  fetchedHeroesSuccess: state.heroes.fetchedHeroesSuccess,
  fetchedHeroesError: state.heroes.fetchedHeroesError,
  loaderForHeroes: state.heroes.loaderForHeroes
});

const mapDispatchToProps = (dispatch: any) => ({
  fetchHeroes: (heroName: string) => dispatch(fetchHeroes(heroName)),
});

const ConnectHeroesOfHeroToRedux = connect(mapStateToProps, mapDispatchToProps)(Heroes);

export default ConnectHeroesOfHeroToRedux;
