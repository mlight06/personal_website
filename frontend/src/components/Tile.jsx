import React from 'react';
import { motion } from 'framer-motion';
import {
  Card, CardMedia, Link, CardContent, Container
} from '@mui/material';

// eslint-disable-next-line react/prop-types
export default function Tile({ link, picture, description, title }) {
  return (
    <Container>

      <Link href={link} rel="noopener noreferrer" target="_blank">
        <motion.div
          whileHover={{ scale: 1.5 }}
        >

          <Card sx={{ maxWidth: 300 }} className="tile">
            <CardContent>
              <div>
                {title}
              </div>
            </CardContent>
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
        </motion.div>
      </Link>
    </Container>
  );
}
