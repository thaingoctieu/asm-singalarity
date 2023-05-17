import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import style from '../styles.module.css'


export default function Login() {
    const navigate = useNavigate()

    const [info, setInfo] = useState({
        email: '',
        password: ''
    })
    const handleChange = (event) => {
        const { name, value } = event.target;
        setInfo(prev => ({
            ...prev,
            [name]: value,
        }));
        console.log(info)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        // const res = await login(info);
        console.log('registered');
        navigate('/info')
        // (res.status === 200) ? window.location.href = "../" : setLoginErr(true);
    }

    return (
        <form className={style.loginContainer} onSubmit={handleSubmit}>
            <div className={style.inputWrapper}>
                <label>
                    Email
                </label>
                <input
                    type="email" name="email" required
                    onChange={handleChange}
                />
            </div>

            <div className={style.inputWrapper}>
                <label>
                    Password
                </label>
                <input
                    type="password" required
                    minLength="8"
                    onChange={handleChange}
                />
            </div>
            {/* <input type="checkbox"></input> */}
            <button type="submit">
                Log In
            </button>

            <div style={{ 'marginTop': '3rem' }}>
                <span>Don't have an account? </span>
                <Link className={style.link} to='/'>Sign Up here</Link>
            </div>
        </form>
    )
}