import React from 'react'
import { Link } from 'react-router-dom'
import "./Welcome.css";


function Welcome() {
    return (
        <div className="container mt-2">
            <img src={process.env.PUBLIC_URL + "/BigGoogleLogo.png"} width="300" alt="" class="center" />
            <h1 className="Header">Welcome to the Google Dashboard!</h1>


            <img src={process.env.PUBLIC_URL + "/GoogleHome.jpeg"} width="500" alt="" class="center mt-5" />


            <h2 className="h2">Please select one of the two options to get started:</h2>

            <div className='container'>
                <div className='vertical-center'>

                    <Link to="/HRDash">
                        <button type="button" class="btn btn-primary btn-lg mr-5">HR Representative</button>
                    </Link>

                    <Link to="/Application">
                        <button type="button" class="btn btn-primary btn-lg">Applicant</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Welcome