import { ButtonHTMLAttributes } from "react"

import styles from './Button.module.css'

interface ibutton extends ButtonHTMLAttributes<HTMLButtonElement>{
}
export function button({Children, ...rest}: ibutton) {
    return <Button{...rest}>
    {Children}
    </Button>
}