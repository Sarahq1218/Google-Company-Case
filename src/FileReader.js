import React from 'react'
import * as XLSX from 'xlsx'

function FileReader() {
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

        <div>
            <div>
                <input
                    type="file"
                    onChange={(e) => {
                        const file = e.target.files[0];
                        readExcel(file);
                    }}
                />

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
                        {experience.map((d) => (
                            <tr key={d.experience}>
                                <th>{d.number}</th>
                                <th>{d.First}</th>
                                <th>{d.Last}</th>
                                <th>{d.Experience}</th>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}





export default FileReader