import { Link } from "react-router-dom";
import { Header } from "../../components/common/Header/Header";
import { Grid } from "../../components/layout/Grid";
import styles from './Pets.module.css';
import { Card } from "../../components/common/Card";
import Skeleton from "react-loading-skeleton";
import { getPets } from "../../services/api/Pets/getPets";

export function Pets() {
    return (
        <Grid>
            <div className={styles.container}>
                <Header />
                <main className={styles.list}>
                    <Card href="/pets/1" text="jao" thumb="" />
                </main>
                <Link to='/pets/20'>Não vai dar erro</Link>
            </div>
        </Grid>
    );
}
