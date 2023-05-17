import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import style from '../styles.module.css'
import clsx from 'clsx'

export default function Info() {
    const navigate = useNavigate()
    const [info, setInfo] = useState({
        email: 'ehi@gmail.com',
        name: 'Deidream Panteno',
        bday: '02/02/2002',
        pw: '12345678'
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        // const res = await login(info);
        console.log('logged out');
        navigate('/login')
        // (res.status === 200) ? window.location.href = "../" : setLoginErr(true);
    }

    return (
        <form className={style.container} >
            <div className={(style.inputWrapper)}>
                <label>
                    Email
                </label>
                <input
                    type="email" name="email" required
                    value={info.email}
                    disabled
                    style={{'color': '#e6e6e6'}}
                />
            </div>

            <div className={style.inputWrapper}>
                <label>
                    Name
                </label>
                <input
                    type="text" name="name" required
                    value={info.name}
                    disabled
                    style={{'color': '#e6e6e6'}}
                />
            </div>

            <div className={style.inputWrapper}>
                <label>
                    Birthday
                </label>
                <input
                    type="date" required
                    value={info.bday}
                    disabled
                    style={{'color': '#e6e6e6'}}
                />
            </div>

            <div className={style.inputWrapper}>
                <label>
                    Password
                </label>
                <input
                    type="password" required
                    value={info.pw}
                    disabled
                    style={{'color': '#e6e6e6'}}
                />
            </div>

            <button type="submit" onClick={handleSubmit}>
                Log Out
            </button>
        </form>
    )
}