import React from 'react';
import { Link } from 'react-router-dom';
import {
  Button, List, Divider, ListItem, Accordion, AccordionSummary, AccordionDetails,
} from '@mui/material';
// import Hobbies from './Hobbies';

export default function Menu() {
  return (
    <div className="menu-container">
      {/* Menu */}
      {/* <Hobbies /> */}
      {/* <div> */}
      <Accordion>
        <AccordionSummary>
          Menu
        </AccordionSummary>
        <AccordionDetails>
          <List>
            {/* <ListItem>
          Menu
        </ListItem> */}
            <ListItem>

              <Button variant="text">
                <Link to="/hobbies">Hobbies</Link>
              </Button>
            </ListItem>
            <Divider />
            {/* </div>
      <div> */}
            <ListItem>

              <Button variant="text">
                <Link to="/portfolio">Portfolio</Link>
              </Button>
            </ListItem>
            <Divider />
            {/* </div>
      <div> */}
            <ListItem>

              <Button variant="text">
                <Link to="/projects">Projects</Link>
              </Button>
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>
      {/* </div> */}
    </div>
  );
}
