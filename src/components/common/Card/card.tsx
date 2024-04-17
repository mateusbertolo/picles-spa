import { Link } from "react-router-dom";
import styles from './Card.module.css';
import thumbDefaut from '../../../assets/thumb-default.jpg'

interface ICard {
    href: string;
    text: string;
    thumb: string;
}

export function Card({ href, text, thumb }: ICard): JSX.Element {
    return (
        <Link to={href} className={styles.Card}>
            <img src={thumb} alt={text} />
            <span>{text}</span>
        </Link>
    );
}
