import { useState } from 'react'

import style from '../styles.module.css'

export default function Signup() {
    const [loginErr, setLoginErr] = useState(false);
    const [info, setInfo] = useState({
        email: '',
        name: '',
        birthday: '',
        password: ''
    })
    
    const handleChange = (event) => {
        const { name, value } = event.target;
        setInfo(prev => ({
            ...prev,
            [name]: value,
        }));
        setLoginErr(false);
        console.log(info)
    }

    const handleSubmit = async (e) => {
        setLoginErr(false);
        e.preventDefault();
        // const res = await login(info);
        console.log('registered');
        // (res.status === 200) ? window.location.href = "../" : setLoginErr(true);
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
                    type="date" required
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

            <button type="submit">
                Sign Up
            </button>
        </form>
    )
}