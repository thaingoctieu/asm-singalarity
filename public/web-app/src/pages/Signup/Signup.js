import { useState } from 'react'
import { Link } from 'react-router-dom';

import style from '../styles.module.css'
import { signup } from '../../utils/API';

export default function Signup() {
    const [info, setInfo] = useState({
        email: '',
        name: '',
        bday: '',
        pw: ''
    })

    const handleChange = (event) => {
        const { name, value } = event.target;
        setInfo(prev => ({
            ...prev,
            [name]: value,
        }));
        // console.log(info)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        // const res = await login(info);
        console.log('registered')

        const res = await signup(info)
        console.log(info)
        console.log(res)

        window.location.href = '/login';
    }

    return (
        <form className={style.container} onSubmit={handleSubmit}>
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
                    Name
                </label>
                <input
                    type="text" name="name" required
                    onChange={handleChange}
                />
            </div>

            <div className={style.inputWrapper}>
                <label>
                    Birthday
                </label>
                <input
                    type="date" name="bday" required
                    onChange={handleChange}
                />
            </div>

            <div className={style.inputWrapper}>
                <label>
                    Password
                </label>
                <input
                    type="password" name="pw" required
                    minLength="8"
                    onChange={handleChange}
                />
            </div>

            <button>
                Sign Up
            </button>

            <div style={{ 'marginTop': '2rem', 'marginBottom': '3rem' }}>
                <span>Already have account? </span>
                <Link className={style.link} to='/login'>Log In here</Link>
            </div>
        </form>
    )
}