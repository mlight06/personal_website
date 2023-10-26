import React from 'react';
import { Link } from 'react-router-dom';
import {
  Button, List, Divider, ListItem, createTheme, Typography, ThemeProvider,
} from '@mui/material';

// import Hobbies from './Hobbies';

export default function Menu() {
  const theme = createTheme({
    typography: {
      h5: {
        color: '#561C37',
      },
    },
  });
  return (
    <div className="menu-container">
      <ThemeProvider theme={theme}>
        <List>
          <ListItem>
            <Button variant="text">
              <Link to="/">
                <Typography variant="h5">
                  Homepage
                </Typography>
              </Link>
            </Button>
          </ListItem>
          <Divider />
          <ListItem>

            <Button variant="text">
              <Link to="/portfolio">
                <Typography variant="h5">
                  Portfolio
                </Typography>
              </Link>
            </Button>
          </ListItem>
          <Divider />
          <ListItem>
            <Button variant="text">
              <Link to="/aboutme">
                <Typography variant="h5">
                  About Me
                </Typography>

              </Link>
            </Button>
          </ListItem>
        </List>
      </ThemeProvider>
      {/* </AccordionDetails>
      </Accordion> */}
      {/* </div> */}
    </div>
  );
}
