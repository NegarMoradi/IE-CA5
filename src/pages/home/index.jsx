import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

    return (
        <h1>
            home
            <Link to="/login">
                <button>login page</button>
            </Link>
        </h1>
    )
}

export default Home;