import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { Button } from '@mui/material';
import resume from '../images/Resume2023.pdf';
import Menu from './Menu';

export default function Portfolio() {
  pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;
  return (
    <div id="main">
      <div>
        <Menu />
      </div>
      Portfolio
      <div>
        <Document file={resume}>
          <Page pageNumber={1} />
        </Document>
      </div>
      <div>

        <Button href="/">
          Back to Home
        </Button>
      </div>
    </div>
  );
}
