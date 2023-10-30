import React from 'react';
import { Link } from 'react-router-dom';
import {
  Button, List, Divider, ListItem, createTheme, Typography, ThemeProvider, Avatar,
} from '@mui/material';
import photo from '../images/profile.png';
// import Hobbies from './Hobbies';

export default function Menu() {
  const theme = createTheme({
    typography: {
      h5: {
        color: '#C3DFE8',
      },
    },
  });
  return (
    <div className="menu-container">
      <ThemeProvider theme={theme}>
        <div className="menu-text">

          <List>
            <ListItem>

              <div className="image-container">
                {/* <img src={photo} className="profile-pic" alt="profile" /> */}
                <Avatar src={photo} sx={{ width: 200, height: 260 }} />
              </div>
            </ListItem>
            <ListItem>

              <Button variant="text">
                <div className="menu-button">
                  <Link to="/">
                    <Typography variant="h5">
                      Homepage
                    </Typography>
                  </Link>
                </div>
              </Button>
            </ListItem>
            <Divider />
            <ListItem>
              <Button variant="text">
                <div className="menu-button">
                  <Link to="/portfolio">
                    <Typography variant="h5">
                      Portfolio
                    </Typography>
                  </Link>
                </div>
              </Button>

            </ListItem>
            <Divider />
            <ListItem>
              <Button variant="text" sx={{ padding: 2 }}>
                <div className="menu-button">
                  <Link to="/aboutme">
                    <Typography variant="h5">
                      About Me
                    </Typography>

                  </Link>
                </div>
              </Button>
            </ListItem>
          </List>
        </div>
      </ThemeProvider>
      {/* </AccordionDetails>
      </Accordion> */}
      {/* </div> */}
    </div>
  );
}
