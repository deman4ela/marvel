import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import '../index.css';
import { IHero } from '../interfaces';

interface IHeroesListCreationProps {
  heroes: Array<IHero>;
}

export default function HeroesListCreation(props: IHeroesListCreationProps): JSX.Element {
  const { heroes } = props;
  return (
    <div className='listItems__container'>
      { heroes.length ? heroes.map((hero: any):any => {
        const imageHero = `${hero.thumbnail.path}.${hero.thumbnail.extension}`;
        return (
          <div className='listItems'>
            <Avatar src={imageHero} style={{ 'width': '300px', 'height': '300px' }} alt={hero.name}  />
            <p className='listItems__text'>
              <span className='listItems__heading'> {hero.name} </span>
              <p> {hero.description} </p>
            </p>

            <NavLink to={`/comics/${hero.id}`}>
              <Button variant='contained'>See more</Button>
            </NavLink>

          </div>
        );
      }
      ) :
        null
      }
    </div>
  );
}
