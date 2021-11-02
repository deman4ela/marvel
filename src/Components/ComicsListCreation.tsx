import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import '../index.css';
import { IComic } from '../interfaces';

interface IComicsListCreationProps {
  comics: Array<IComic>;
}

export default function ComicsListCreation(props: IComicsListCreationProps): JSX.Element {
  const { comics } = props;
  return (
    <div className='listItems__container'>
      {
        comics.length ? comics.map((comic:any) => {
          const imageComic = `${comic.thumbnail.path}.${comic.thumbnail.extension}`;
          return (
            <div>
              <div key={comic.id} className='listItems listItems__comics'>
                <Avatar className='heroAvatar' src={imageComic} style={{ 'width': '300px', 'height': '300px' }} alt={comic.name} variant='square' />
                <p>
                  <span className='listItems__heading'> {comic.title} </span>
                  <p> {comic.description} </p>
                Number of pages: {comic.pageCount}
                </p>
              </div>
            </div>
          );
        }) : null
      }
    </div>
  );
}
