import React from 'react'
import {logout} from '../Config/firebase'

function Home() {
    const log_out = (e) => {
        e.preventDefault();
        logout();

    }
    return (
        <div>
            <button onClick={log_out}>logout</button>
        </div>
    )
}

export default Home

