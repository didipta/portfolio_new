import React from 'react';
import { Document, Page } from 'react-pdf';
import samplePDF from "./Dipta saha Resume.pdf"
const Cvviewer = () => {
    return (
        <div>
    <Document file={samplePDF}>
    </Document>
        </div>
    );
};

export default Cvviewer;