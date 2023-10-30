import React from 'react';
import {
  Card, CardMedia, Link, CardContent,
} from '@mui/material';

// eslint-disable-next-line react/prop-types
export default function Tile({ link, picture, description }) {
  return (
    <div>

      <Link href={link} rel="noopener noreferrer" target="_blank">
        <Card sx={{ maxWidth: 300 }} className="tile">
          <CardMedia
            component="img"
            sx={{ height: 140 }}
            image={picture}
            title="github-link"
          />
          <CardContent>
            <div>{description}</div>
          </CardContent>
        </Card>
      </Link>
    </div>
  );
}
