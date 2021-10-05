import React from 'react';

import { Linkedin, GitHub } from 'react-feather';
import { Link } from '../Link/Link';

export const Footer = () => {
  return (
    <div>
      <p>
        <span>Patryk Kwasek © 2021</span>
      </p>

      <div>
        <p>
          <Link
            href='https://www.linkedin.com/in/patryk-kwasek-0b9a821b3/'
            target='_blank'
            rel='noreferrer'
          >
            <Linkedin />
          </Link>
        </p>

        <p>
          <Link
            href='https://github.com/PatrykKwasek'
            target='_blank'
            rel='noreferrer'
          >
            <GitHub />
          </Link>
        </p>
      </div>
    </div>
  )
}