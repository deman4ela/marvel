import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import '../index.css';

export default function HeroesListCreation(props: any): any {
  const { heroes } = props;
  return (
    <div className='listItems__container'>
      { heroes.length ? heroes.map((hero:any):any => (
        <div className='listItems'>

          <Avatar src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} style={{ 'width': '300px', 'height': '300px' }} alt={hero.name}  />
          <p className='listItems__text'>
            <span className='listItems__heading'> {hero.name} </span> <br /> <br />
            {hero.description}
          </p>

          <NavLink to={`/comics/${hero.id}`}>
            <Button variant="contained">See more</Button>
          </NavLink>

        </div>
      )
      ) :
        null
      }
    </div>
  );
}
