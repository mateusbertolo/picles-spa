import { Link } from "react-router-dom";
import styles from './Card.module.css';
import { ImageBse64 } from "../imageBase64/imageBase64";


interface ICard {
    href: string;
    text: string;
    thumb: string;
}

export function Card({ href, text, thumb }: ICard): JSX.Element {
    return (
        <Link to={href} className={styles.Card}>
            <ImageBse64 src="{thumb}"/>
            <img src={thumb} alt={text} />
            <span>{text}</span>
        </Link>
    );
}
