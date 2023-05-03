import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { userSelectors } from '../../store/user/selector';

const Home = () => {
    
    const user = useSelector(userSelectors.user)
    const token = useSelector(userSelectors.token)

    useEffect(() => {
        console.log(user);
    }, [user])

    useEffect(() => {
        console.log(token);
    }, [token])

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