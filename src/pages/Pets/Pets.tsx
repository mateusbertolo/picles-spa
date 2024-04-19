import { useEffect } from "react";
import { Header } from "../../components/common/Header/Header";
import { Grid } from "../../components/layout/Grid";
import styles from './Pets.module.css';
import { Card } from "../../components/common/Card";
import { Skeleton } from "../../components/common/skeleton";
import { useQuery } from "@tanstack/react-query";
import { GetPets } from "../../services/pets/getPets";
import { Pagination } from "../../components/common/Pagination";
import { useSearchParams } from "react-router-dom";

export function Pets() {
    const [searchParams, setSearchParams] = useSearchParams();

    const urlParams = {
        page: searchParams.get('page') ? Number(searchParams.get('page')) : 1
    };
    
    // Corrected changePage function
    function changePage(page: number) {
        setSearchParams(params => {
            params.set('page', String(page)); // Changed syntax for setting query parameter
            return params;
        });
    }
}

export default Pets; // Exporting the component if needed


export function Pets() {
    const { data, isLoading } = useQuery({
        queryKey: ['get-pets'],
        queryFn: () => GetPets(),
        staleTime: 1 * 1000, // 1 segundo em milissegundos
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
                        <Card key={pet.id} href={`pets/${pet.id}`} text={pet.name} thumb={pet.photo} />
                    ))}
                </main>
                {data?.currentPage && 
                <Pagination
                currentPage={data.currentPage}
                totalPages={data.totalPages}
                onPageChange={(Number) => currentPage(Number)}
                />}
            </div>
        </Grid>
    );
}
