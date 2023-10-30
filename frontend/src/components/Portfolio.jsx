import React from 'react';
// import { Document, Page, pdfjs } from 'react-pdf';
import { Button } from '@mui/material';
import resume from '../images/Resume2023.pdf';
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

          Portfolio
        </div>
        <div className="resume">
          <embed src={resume} title="resume" width="80%" height="80%" />
        </div>
        <div className="project-title">
          Projects
        </div>
        <div className="tile-container">
          {repos.map((repo) => <Tile link={repo.link} picture={repo.picture} className="portfolio-tile" />)}
          {/* {repos.map((repo) => console.log('repo', repo.link))} */}
        </div>
      </div>
    </div>
  );
}
