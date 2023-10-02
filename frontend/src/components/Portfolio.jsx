import React from 'react';
import { Link } from 'react-router-dom';
import { Document, Page } from 'react-pdf';
import resume from '../images/Resume2023.pdf';

export default function Portfolio() {
  return (
    <div>
      <div>
        <Link to="/">Back to Home</Link>
      </div>
      Portfolio
      <div>
        <Document file={resume}>
          <Page pageNumber={1} />
        </Document>
      </div>
    </div>
  );
}
