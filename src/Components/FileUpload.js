import React, { Fragment, useState } from 'react';
import Message from './Message';
import Progress from './Progress';
import axios from 'axios';
import "./FileUpload.css"
import "./ComponentOne.css";


import { Link } from 'react-router-dom'


const FileUpload = () => {
    const [file, setFile] = useState('');
    const [filename, setFilename] = useState('Choose File');

    const [message, setMessage] = useState('');
    const [uploadPercentage, setUploadPercentage] = useState(0);

    const onChange = e => {
        setFile(e.target.files[0]);
        setFilename(e.target.files[0].name);
    };

    const onSubmit = async e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);

        try {
            const res = await axios.post('/uploads', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                onUploadProgress: progressEvent => {
                    setUploadPercentage(
                        parseInt(
                            Math.round((progressEvent.loaded * 100) / progressEvent.total)
                        )
                    );
                }
            });

            // Clear percentage
            setTimeout(() => setUploadPercentage(0), 10000);



            setMessage('File Uploaded');
        } catch (err) {
            if (err.response.status === 500) {
                setMessage('There was a problem with the server');
            } else {
                setMessage(err.response.data.msg);
            }
            setUploadPercentage(0)
        }
    };

    return (

        <Fragment>
            {message ? <Message msg={message} /> : null}

            <div className='container mt-4'>
                <img src={process.env.PUBLIC_URL + "/BigGoogleLogo.png"} width="192" alt="" />
                <h1 className='h1'>Welcome to the Google Application!</h1>
                <p1 className='p1'>
                    Please sumbit your most recent resume and specify your preferred method of contact on the resume document. Once we have made our decision you will be contacted.
                </p1>

                <label htmlFor="FullName" class="form-label1">Full Name</label>
                <input type="name" class="form-control" id="FullName" />


                <label htmlFor="Salary" class="form-label">Please enter your desired salary: </label>
                <input type="Salary" class="form-control" id="Salary" />



            </div>


            <form onSubmit={onSubmit}>
                <div className='center container mb-4  custom-file'>
                    <input
                        type='file'
                        className='custom-file-input'
                        id='customFile'
                        onChange={onChange}
                    />
                    <label className='custom-file-label ' htmlFor='customFile'>
                        {filename}
                    </label>
                </div>


                <Progress percentage={uploadPercentage} />

                <input
                    type='submit'
                    value='Upload'
                    className='btn btn-primary btn-lg center mb-5'
                />
            </form>


            <h5 className='text-center'> Congragulations on submitting your resume! Click submit to submit your application:</h5>

            <Link to="/Congratz">
                <button className='center btn btn-primary btn-lg btn-lg mb-5 '>Submit</button>
            </Link>

        </Fragment>
    );
};

export default FileUpload;