import React from 'react';

export const PDFFileOpener = ({ pdf }) => {
    return (
        <div>
            <iframe src={pdf} title="PDF Viewer" style={{ width: '100%', height: '800px' }} />
        </div>
    )
}
