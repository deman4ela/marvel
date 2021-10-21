import React from 'react';
import { connect } from 'react-redux';
import ComicsOfHero from '../../Components/ComicsOfHero';
import { fetchComics } from '../actions';

const mapStateToProps = (state: any) => ({
  fetchedComics: state.fetchedComicsSuccess,
  fetchedComicsError: state.fetchedComicsError,
  loaderWorksComics: state.loaderWorksComics
});

const mapDispatchToProps = (dispatch: any) => ({
  fetchComics: (heroId: number) => dispatch(fetchComics(heroId)),
});

const ConnectComicsOfHeroToRedux = connect(mapStateToProps, mapDispatchToProps)(ComicsOfHero);

export default ConnectComicsOfHeroToRedux;
