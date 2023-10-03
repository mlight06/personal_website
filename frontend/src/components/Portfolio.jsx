import React from 'react';
import { Link } from 'react-router-dom';
import { Document, Page, pdfjs } from 'react-pdf';
import resume from '../images/Resume2023.pdf';

export default function Portfolio() {
  pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;
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
