import { NavLink } from 'react-router-dom'
import styles from './Sidebar.module.css'



export function Sidebar(){
    return(
        <nav className={styles.Sidebar}>
            <NavLink to="/admin">
                Meu Abrigo
            </NavLink>
            <NavLink to="/admin/pets">
                Pets
            </NavLink>
            <NavLink to="/">
                Sair
            </NavLink>
        </nav>
    )
}