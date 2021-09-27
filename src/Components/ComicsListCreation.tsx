import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import '../index.css';

export default function ComicsListCreation(props: any): any {
  const { comics } = props;
  return (
    <div className='listItems__container'>
      {
        comics.length ? comics.map((comic:any) => (
          <div>
            <div key={comic.id} className='listItems listItems__comics'>
              <Avatar className='heroAvatar' src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} style={{ 'width': '300px', 'height': '300px' }} alt={comic.name} variant="square" />
              <p>
                <span className='listItems__heading'> {comic.title} </span>
                <br /> <br />
                {comic.description}
                <br />  <br />
               Number of pages: {comic.pageCount}
                <br />
              </p>
            </div>
          </div>
        )) : null
      }
    </div>
  );
}
