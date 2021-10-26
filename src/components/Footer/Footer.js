import React from 'react';

import { Linkedin, GitHub } from 'react-feather';
import { Link } from '../Link/Link';

import './Footer.scss';

export const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-icons'>
        <p className='icon'>
          <Link
            href='https://www.linkedin.com/in/patryk-kwasek-0b9a821b3/'
            target='_blank'
            rel='noreferrer'
          >
            <Linkedin />
          </Link>
        </p>

        <p className='icon'>
          <Link
            href='https://github.com/PatrykKwasek'
            target='_blank'
            rel='noreferrer'
          >
            <GitHub />
          </Link>
        </p>
      </div>

      <p className='para'>
        <span>© 2021 &#8226; Patryk Kwasek</span>
      </p>
    </div>
  )
}