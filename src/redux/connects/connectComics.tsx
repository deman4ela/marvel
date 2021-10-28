import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import ComicsOfHero from '../../Components/ComicsOfHero';
import { fetchComics } from '../actions';
import { IRootState } from '../reducers/rootReducer';

const mapStateToProps = (state: IRootState) => ({
  fetchedComicsSuccess: state.comics.fetchedComicsSuccess,
  fetchedComicsError: state.comics.fetchedComicsError,
  loaderForComics: state.comics.loaderForComics
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchComics: (heroId: string) => dispatch(fetchComics(heroId)),
});

const ConnectComicsOfHeroToRedux = connect(mapStateToProps, mapDispatchToProps)(ComicsOfHero);

export default ConnectComicsOfHeroToRedux;
