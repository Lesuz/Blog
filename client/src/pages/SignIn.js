import axios from 'axios'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'

import '../styles/SignIn.css'

const SignIn = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const history = useHistory()

    const handleSubmit = async e => {
        e.preventDefault()
        try {
            const res = await axios.post('/api/user/signin', {
                username,
                password
            })
            localStorage.setItem('token', res.data.token)
            history.push('/editarticles')
        } catch (err) {
            console.error(JSON.parse(err.request.response).message)
        }
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

export default SignIn