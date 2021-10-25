import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import '../index.css';

export default function Alert(props: any): any {
  if (props.fetchedComicsError) {
    return (
      <div>
       Unfortunately, {`${props.fetchedComicsError}`} error occurred. Please try again later.
      </div>);
  }

  if (props.fetchedHeroesError) {
    return (
      <div>
       Unfortunately, {`${props.fetchedHeroesError}`} error occurred. Please try again later.
      </div>);
  }
  return (
    <div />
  );
}
