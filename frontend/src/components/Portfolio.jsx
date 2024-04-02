import React from 'react';
// import { Document, Page, pdfjs } from 'react-pdf';
import { motion } from 'framer-motion';
import { Button } from '@mui/material';
import resume from '../images/Resume2024.pdf';
import Menu from './Menu';
import Tile from './Tile';
import repos from '../constants/repos';

export default function Portfolio() {
  return (
    <div>

      <div className="menu-sidebar-p">
        <Menu />

      </div>
      <div className="resume-block">
        <div className="page-header">
          <motion.div
            animate={{ x: [10, -30, 0], y: [-40, 10, 0] }}
            transition={{
              type: 'linear',
              duration: 2,
              x: { duration: 1 },
            }}
          >

            Portfolio
          </motion.div>
        </div>

        {/* <div className="resume">
          <embed src={resume} title="resume" width="80%" height="80%" />
        </div> */}
        <div className="project-title">
          Projects
        </div>
        <div className="tile-container">
          {repos.map((repo) => <Tile link={repo.link} picture={repo.picture} description={repo.description} className="portfolio-tile" />)}
          {/* {repos.map((repo) => console.log('repo', repo.link))} */}
        </div>
      </div>
    </div>
  );
}
