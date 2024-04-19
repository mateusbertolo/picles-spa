import styles from './Select.module.css';
import { SelectHTMLAttributes } from "react";

interface ISelect extends SelectHTMLAttributes<HTMLSelectElement> {
    label: string;
    options: {
        value: string;
        text: string;
    }[];
}

export function Select({ label, options, ...rest }: ISelect): JSX.Element {
    return (
        <div className={styles.selectGroup}>
            <label>{label}</label>
            <select className={styles.select} {...rest}>
                {options.map(option => (
                    <option key={option.value} value={option.value}>{option.text}</option>
                ))}
            </select>
        </div>
    );
}
