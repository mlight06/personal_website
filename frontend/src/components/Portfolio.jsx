import React from 'react';
// import { Document, Page, pdfjs } from 'react-pdf';
import { Button } from '@mui/material';
import resume from '../images/Resume2023.pdf';
import Menu from './Menu';

export default function Portfolio() {
  return (
    <div id="main">

      <div className="menu-sidebar">
        <Menu />

      </div>
      Portfolio
      {/* <div>
        <Document file={resume}>
          <Page pageNumber={1} />
        </Document>
      </div> */}
      <div className="resume">
        <embed src={resume} title="resume" width="80%" height="80%" />
      </div>
      <div>

        <Button href="/">
          Back to Home
        </Button>
      </div>
    </div>
  );
}
