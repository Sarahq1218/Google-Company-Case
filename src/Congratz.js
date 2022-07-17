import React from 'react'

function Congratz() {
    return (
        <div>
            <img src={process.env.PUBLIC_URL + "/BigGoogleLogo.png"} width="300" alt="" class="center" />
            <h1 class="h1">Congragulations on submitting your application!</h1>

            <h3 class="center " >You may now close the window</h3>


        </div>
    )
}

export default Congratz