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

function ErrorPage(props: any) {
  console.log(props);
  const { location } = props;

  return (
    <div>
      <h3>
        404 NOT FOUND
        <br />
        No match for
        {' '}
        {location.pathname}
      </h3>
      <Link to="/"> Back to Home page </Link>
      <div className="logo">
        <img src='https://snipstock.com/assets/cdn/png/610356dda8e814f30c65c03a65113f57.png' alt='404 Not Found' className='logo__image' />
      </div>
    </div>
  );
}

export default ErrorPage;
