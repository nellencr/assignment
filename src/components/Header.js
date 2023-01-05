import React, { useState } from 'react';
import { pdfFiles } from '../utils/constants';
import { PDFFileOpener } from './PDFFileOpener';

export const Header = () => {
  const [currentPdf, setCurrentPdf] = useState(null);

  const handlePdfClick = (event) => {
    event.preventDefault();

    const { href } = event.target;
    setCurrentPdf(href);
  }

  return (
    <div>
      {(pdfFiles).map((item, index) => (
        <h3 key={item}>
          <a
            href={item}
            onClick={handlePdfClick}
          >
            Sample document{index+1}.pdf
          </a>
        </h3>
      ))}

      {currentPdf && <PDFFileOpener pdf={currentPdf} />}
    </div>
  );
};
