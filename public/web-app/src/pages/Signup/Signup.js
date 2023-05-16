import style from './Signup.module.css'
import clsx from 'clsx'

import { Input } from '../../components/Input'
import {Btn} from '../../components/submitBtn'



export default function Signup() {
    return (
        <div className={`${clsx(style.container)}`}>
            <Input type='Email'/>
            <Input type='Name'/>
            <Input type='Birthday'/>
            <Input type='Password'/>
            <Btn value='Sign Up' />
        </div>
    )
}