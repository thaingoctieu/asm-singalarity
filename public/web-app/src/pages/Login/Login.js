import { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import style from '../styles.module.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { login } from '../../utils/API'
import { AppContext } from '../../store/context'

export default function Login() {
    const navigate = useNavigate()
    // const context = useContext(AppContext)

    const toastOptions = {
        position: "bottom-right",
        autoClose: 8000,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
    }

    const [info, setInfo] = useState({
        email: '',
        pw: '',
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
        let msg = ''
        try {
            const res = await login(info);
            msg = res.msg
            // login successfully
        if (res.email === info.email) {
            // await context.login(info.email)
            localStorage.setItem('email', info.email)
            localStorage.setItem('login', 'true')
            window.location.href = "/info";
        }
        } catch (err) {
            toast.error(msg, toastOptions)
        }
        
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
                    type="password" name="pw" required
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