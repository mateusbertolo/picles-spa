
import styles from "./Pagination.module.css";

interface IPagination {
    currentPage: number;
    totalPages: number;
    onPageChange: (pageNumber: number) => void;
}

export function Pagination({ currentPage, totalPages, onPageChange }: IPagination) {
    const pageNumber = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <nav>
            <ul className={styles.pagination}>
                {pageNumber.map(Number => (
                    <li key={Number} 
                    className={'${currentPage === page ? styles.active : null}'}>
                        <button onClick={() => onPageChange(Number)}>{Number}</button>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
