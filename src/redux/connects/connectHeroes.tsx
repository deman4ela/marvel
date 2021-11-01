import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import Heroes from '../../Components/Heroes';
import { fetchHeroes } from '../actions';
import { IRootState } from '../reducers/rootReducer';

const mapStateToProps = (state: IRootState) => ({
  fetchedHeroesSuccess: state.heroes.fetchedHeroesSuccess,
  fetchedHeroesError: state.heroes.fetchedHeroesError,
  loaderForHeroes: state.heroes.loaderForHeroes
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchHeroes: (heroName: string) => dispatch(fetchHeroes(heroName)),
});

const ConnectHeroesOfHeroToRedux = connect(mapStateToProps, mapDispatchToProps)(Heroes);

export default ConnectHeroesOfHeroToRedux;
