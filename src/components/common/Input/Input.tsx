import styles from './Input.module.css'
import { InputHTMLAttributes, Ref, forwardRef } from 'react'

interface IInput extends
InputHTMLAttributes<HTMLInputElement>{
    label:string
}

export function ForwardInput({label,...rest}: IInput, ref: Ref<HTMLInputElement>){
    return(
        <div className={styles.InputGroup}>
            <label>label</label>
            <input ref={ref}{...rest}/>
        </div>
    )
}

export const Input = forwardRef(ForwardInput)