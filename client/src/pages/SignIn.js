import axios from 'axios'
import PropTypes from 'prop-types'
import { useState } from 'react'

import '../styles/SignIn.css'

async function signinUser(credentials) {
    return fetch('/api/signin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}

const SignIn = ({ setToken }) => {

    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await signinUser({
            username,
            password
        });
        setToken(token);
    }

    return (
        <div className="signin-wrapper">
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <input type="text" placeholder='username' onChange={e => setUsername(e.target.value)} />
                </label>
                <label>
                    <input type="password" placeholder='password' onChange={e => setPassword(e.target.value)} />
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

SignIn.propstypes = {
    setToken: PropTypes.func.isRequired
}

export default SignIn