import React from 'react';
import { Card, CardMedia, Link } from '@mui/material';

// eslint-disable-next-line react/prop-types
export default function Tile({ link, picture }) {
  return (
    <Link href={link}>
      <Card sx={{ maxWidth: 300 }}>
        <CardMedia
          component="img"
          sx={{ height: 140 }}
          image={picture}
          title="github-link"
        />
      </Card>
    </Link>
  );
}
