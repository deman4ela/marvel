import React, { useEffect } from 'react';
import { RouteComponentProps, useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { JsxElement } from 'typescript';
import ProgressBar from './ProgressBar';
import ComicsListCreation from './ComicsListCreation';
import Alert from './Alert';
import { fetchComics, fetchHeroes } from '../redux/actions';
import { IComic } from '../interfaces';
import { IRootState } from '../redux/reducers/rootReducer';

interface IHeroId {
  heroID: string;
}

function ComicsOfHero(): JSX.Element {

  const dispatch = useDispatch();
  const match: IHeroId = useParams();
  const { fetchedComicsSuccess, fetchedComicsError, loaderForComics } = useSelector((state: IRootState) => state.comics);

  useEffect(() => {
    dispatch(fetchComics(match.heroID));
  }, []);

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

export default ComicsOfHero;
