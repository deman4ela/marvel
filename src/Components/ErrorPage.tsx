import React from 'react';
import { JsxElement } from 'typescript';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
} from 'react-router-dom';
import '../index.css';

interface IErrorPageProps {
  location: {
    pathname: string
  }
}

function ErrorPage(props: IErrorPageProps): JSX.Element {
  const { location } = props;

  return (
    <div className='errorPage'>
      <h3>
        404 NOT FOUND
        <p> No match for <span className='errorPage__home'>{location.pathname}</span> </p>
      </h3>
      <Link to='/'>
        <div className='errorPage'> Back to <span className='errorPage__home'> Home page </span> </div>
      </Link>
      <div className='logo'>
        <img src='https://snipstock.com/assets/cdn/png/610356dda8e814f30c65c03a65113f57.png' alt='404 Not Found' className='logo__image' />
      </div>
    </div>
  );
}

export default ErrorPage;
