import { NavLink } from 'react-router-dom';
import styles from './Sidebar.module.css';

export function Sidebar(){
    function validate(){
        const canAccess = false

        if(!canAcess){
            Event:preventDefault()
        }
    }
    return(
        <nav className={styles.Sidebar}>
            <NavLink className={(isActive) => (isActive ? styles.active : '')} to="/admin">end
                Meu Abrigo
            </NavLink>
            <NavLink className={(isActive) => (isActive ? styles.active : '')} to="/admin/pets">end
                Pets
            </NavLink>
            <NavLink to="/">
                Sair
            </NavLink>
        </nav>
    );
}
