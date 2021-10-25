/* eslint-disable react/no-unused-state */
import React from 'react';
import { JsxElement } from 'typescript';
import {
  getAPIResource, getAllHeroes, getAllComicsOfHero,
} from '../api/api';
import ProgressBar from './ProgressBar';
import ComicsListCreation from './ComicsListCreation';
import Alert from './Alert';
import { fetchComics, fetchHeroes } from '../redux/actions';

class ComicsOfHero extends React.Component<any, any> {

  componentDidMount() {
    this.props.fetchComics(this.props.match.params.heroID);
  }

  render() {
    const { fetchedComicsSuccess, fetchedComicsError, loaderForComics } = this.props;
    return (
      <div>
        <h1 className='comics__heading'>
          Welcome the hero comics!
        </h1>
        <ProgressBar isLoading={loaderForComics} />
        <ComicsListCreation comics={fetchedComicsSuccess}/>
        <Alert fetchedComicsError={fetchedComicsError} />
      </div>
    );
  }
}

export default ComicsOfHero;
