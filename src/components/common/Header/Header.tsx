import { Link } from "react-router-dom"
import { Button, ButtonVariant } from "../Button"
import styles from './Header.module.css'

interface Iheader{
    showreturn?: boolean
}
export function Header({showreturn}: Iheader){
    return(
        <header className={styles.header}>
            <header className=(styles.header)>
            {showreturn &&(
            <Link to={"/admin"}> <Button variant = {ButtonVariant.Text}>  Voltar </Button></Link>
        )}
            <Link to={"/pets"}> <Button variant = {ButtonVariant.Outlined}>  Tenho um Abrigo</Button></Link>
        </header>
    )}