import React from 'react';
import { JsxElement } from 'typescript';
import '../index.css';

function Logo() {

  return (
    <div className='logo'>
      <img src='../public/marvelLogo.jpg' alt='Marvel logo' className='logo__image' />
    </div>
  );
}

export default Logo;
