import { useEffect } from "react";
import { Header } from "../../components/common/Header/Header";
import { Grid } from "../../components/layout/Grid";
import styles from './Pets.module.css';
import { Card } from "../../components/common/Card";
import { Skeleton } from "../../components/common/skeleton";
import { useQuery } from "@tanstack/react-query";
import { GetPets } from "../../services/pets/getPets";

export function Pets() {
    const { data, isLoading } = useQuery({
        queryKey: ['get-pets'],
        queryFn: () => GetPets(),
    });

    useEffect(() => {

    }, []);

    return (
        <Grid>
            <div className={styles.container}>
                <Header />
                {isLoading && <Skeleton containerClassName={styles.skeleton} count={10} />}
                <main className={styles.list}>
                    {data?.items?.map((pet) => (
                        <Card key={pet.id} href={`pets/${pet.id}`} text={pet.name} thumb={pet.thumb} />
                    ))}
                </main>
            </div>
        </Grid>
    );
}
