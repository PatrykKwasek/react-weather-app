import React from 'react';

import { BadRequest } from './BadRequest';
import { Unauthorized } from './Unauthorized';
import { NotFound } from './NotFound';
import { TooManyRequests } from './TooManyRequests';
import { ServerError } from './ServerError';

export const ErrorHandler = ({error}) => {
  return (
    <div>
      {error.response.status === 400 && <BadRequest />}
      {error.response.status === 401 && <Unauthorized />}
      {error.response.status === 404 && <NotFound />}
      {error.response.status === 429 && <TooManyRequests />}
      {
       error.response.status === 500 || 
       error.response.status === 502 || 
       error.response.status === 503 || 
       error.response.status === 504 && <ServerError />
      }
    </div>
  )
}