import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import UseApi from '../../hooks/api';
import { setToken } from '../../store/user/token';

const Login = () => {
    const { apiCall } = UseApi();
    const dispatch = useDispatch()

    const onSuccess = (res) => {
        console.log(res);
        dispatch(setToken(res.data))
    }

    const loginApiCall = () => {
        const query = {
            "email": "john@mail.com",
            "password": "changeme"
        }

        apiCall({ url: "https://api.escuelajs.co/api/v1/auth/login", query, method: 'post', sucessCallback: onSuccess })
    }

    return (
        <div>
            Login page
            <button onClick={loginApiCall}>login</button>
            <Link to="/">
                <button>Home</button>
            </Link>
        </div>
    )
}

export default Login;