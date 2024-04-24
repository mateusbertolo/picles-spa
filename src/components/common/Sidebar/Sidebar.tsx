import { NavLink } from 'react-router-dom';
import styles from './Sidebar.module.css';

export function Sidebar() {
    function validate(event: { preventDefault: () => void; }) {
        const canAccess = false;

        if (!canAccess) {
            event.preventDefault();
        }
    }

    return (
        <nav className={styles.Sidebar}>
            <NavLink onClick={validate} to="/admin">
                Meu Abrigo
            </NavLink>
            <NavLink onClick={validate} to="/admin/pets">
                Pets
            </NavLink>
            <NavLink to="/">
                Sair
            </NavLink>
        </nav>
    );
}
