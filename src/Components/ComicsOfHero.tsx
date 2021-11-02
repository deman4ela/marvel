/* eslint-disable react/no-unused-state */
import React from 'react';
import { RouteComponentProps } from 'react-router';
import { JsxElement } from 'typescript';
import {
  getAPIResource, getAllHeroes, getAllComicsOfHero,
} from '../api/api';
import ProgressBar from './ProgressBar';
import ComicsListCreation from './ComicsListCreation';
import Alert from './Alert';
import { fetchComics, fetchHeroes } from '../redux/actions';
import { IComic } from '../interfaces';

interface IHeroId {
  heroID: string;
}

interface IComicsOfHeroProps extends RouteComponentProps<IHeroId> {
  fetchedComicsSuccess: Array<IComic>;
  fetchedComicsError: string;
  loaderForComics: boolean;
  fetchComics: (heroID: string) => void;
}

class ComicsOfHero extends React.Component<IComicsOfHeroProps> {

  componentDidMount(): void {
    this.props.fetchComics(this.props.match.params.heroID);
  }

  render(): JSX.Element {
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
