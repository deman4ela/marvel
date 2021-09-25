import React from 'react';
import { JsxElement } from 'typescript';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect,
  } from "react-router-dom";

function ErrorPage(props: any) {
        console.log(props);

  return (
    <div>
      <h3>
        404 NOT FOUND<br/>
        No match for {props.location.pathname}
      </h3>
      <Link to="/"> Back to Home page </Link>
    </div>
  )
}

export default ErrorPage;