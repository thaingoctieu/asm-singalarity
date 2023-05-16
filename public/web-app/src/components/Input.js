import { useState } from 'react'
import style from './component.module.css'

export const Input = (props) => {
    const typ = props.type === "Email" ? "email" :
        (props.type === "Name" ? "text" :
            (props.type === "Password" ? "password" : "date"))

    const [val, setVal] = useState('')

    const handleChange = (e) => {
        const { name, value } = e.target
        setVal(value)
        console.log(val)
    }

    return (
        <div style={{ 'marginBottom': '2.3rem', 'width': '25%' }}>
            <label style={style.label}>
                {props.type}
            </label>
            <input
                type={typ} required
                style={style.input}
                onChange={handleChange}
            />
        </div>
    )
}