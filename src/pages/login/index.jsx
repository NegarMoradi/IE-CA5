import React from 'react';
import UseApi from '../../hooks/api';

const Login = () => {
    const { apiCall } = UseApi();

    const onSuccess = (res) => {
        console.log(res);
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
        </div>
    )
}

export default Login;