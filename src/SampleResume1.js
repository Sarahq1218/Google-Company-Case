import React from 'react'
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { Worker } from '@react-pdf-viewer/core';




const SampleResume1 = () => {
    return (
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.14.305/build/pdf.worker.min.js">
            <div>

                <Viewer fileUrl="client/src/uploads/SampleResume1.pdf"></Viewer>

            </div>

        </Worker>
    )
}





export default SampleResume1

