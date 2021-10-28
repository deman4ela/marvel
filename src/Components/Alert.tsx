import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import '../index.css';

export interface IAlertProps {
  fetchedComicsError?: string;
  fetchedHeroesError?: string;
}

export default function Alert(props: IAlertProps): JSX.Element {
  if (props.fetchedComicsError || props.fetchedHeroesError) {
    return (
      <div>
       Unfortunately, the error occurred. Please try again later.
      </div>);
  }
  return (
    <div />
  );
}
