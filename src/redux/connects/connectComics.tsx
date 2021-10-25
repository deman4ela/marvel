import React from 'react';
import { connect } from 'react-redux';
import ComicsOfHero from '../../Components/ComicsOfHero';
import { fetchComics } from '../actions';

const mapStateToProps = (state: any) => ({
  fetchedComicsSuccess: state.comics.fetchedComicsSuccess,
  fetchedComicsError: state.comics.fetchedComicsError,
  loaderForComics: state.comics.loaderForComics
});

const mapDispatchToProps = (dispatch: any) => ({
  fetchComics: (heroId: number) => dispatch(fetchComics(heroId)),
});

const ConnectComicsOfHeroToRedux = connect(mapStateToProps, mapDispatchToProps)(ComicsOfHero);

export default ConnectComicsOfHeroToRedux;
