import React from 'react'
import * as XLSX from 'xlsx'
import { useState } from 'react'
import { Link } from 'react-router-dom'



function HR() {
    const [searchTerm, setSearchTerm] = useState('')
    const [experience, setexperience] = useState([])



    const readExcel = (file) => {

        const promise = new Promise((resolve, reject) => {

            const fileReader = new FileReader();
            fileReader.readAsArrayBuffer(file)

            fileReader.onload = (e) => {
                const bufferArray = e.target.result;

                const wb = XLSX.read(bufferArray, { type: 'buffer' });

                const wsname = wb.SheetNames[0];

                const ws = wb.Sheets[wsname];

                const data = XLSX.utils.sheet_to_json(ws)

                resolve(data);

            }
            fileReader.onerror = ((error) => {
                reject(error);

            })

        })


        promise.then((d) => {
            console.log(d);
            setexperience(d);
        })

    }

    return (
        <div className='container mt-4'>
            <div>
                <input
                    type="file"
                    onChange={(e) => {
                        const file = e.target.files[0];
                        readExcel(file);
                    }}
                />
                <img src={process.env.PUBLIC_URL + "/BigGoogleLogo.png"} width="192" alt="" />
                <nav class="navbar navbar-expand-lg bg-light">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="/HRDash">Dashboard</a>

                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-5 mb-lg-0">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="/Contacted">Contacted</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/Interview">Interview</a>
                                </li>
                            </ul>
                            <form class="d-flex" role="search">
                                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={event => { setSearchTerm(event.target.value) }} />

                            </form>
                        </div>
                    </div>
                </nav>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Experience</th>
                        </tr>
                    </thead>
                    <tbody>
                        {experience.filter((val) => {
                            if (searchTerm == "") {
                                return val;
                            } else if (val.Experience.toLowerCase().includes(searchTerm.toLowerCase())) {
                                return val;
                            }
                        }).map((d) => (
                            <tr key={d.experience}>
                                <th>{d.Number}</th>
                                <th>{d.First}</th>
                                <th>{d.Last}</th>
                                <th>{d.Experience}</th>

                                <Link to="/Contacted">
                                    <button type="button" class="btn btn-primary btn-sm mr-5 mt-2">Contacted</button>
                                </Link>

                                <Link to="/Interview">
                                    <button type="button" class="btn btn-primary btn-sm mt-2">Interview</button>
                                </Link>

                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        </div>

    )
}
export default HR