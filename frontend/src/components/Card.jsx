import React from 'react';
import { Card } from '@mui/material';

// eslint-disable-next-line react/prop-types
export default function Tile({ link, picture }) {
  return (
    <Card>
      <div>
        <img src={picture} alt={`project-${picture}`} />
      </div>
      <div>
        <a href={link}>
          Click link to see Github repo
        </a>
      </div>
    </Card>
  );
}
