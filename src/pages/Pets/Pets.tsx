
 import { useEffect } from "react";
import { Header } from "../../components/common/Header/Header";
import { Grid } from "../../components/layout/Grid";
import styles from './Pets.module.css'
import { Card } from "../../components/common/Card";
import { Skeleton } from "../../components/common/Skeleton";
import { useQuery } from "@tanstack/react-query";
import { getPets } from "../../services/pets/getPets";
import { Pagination } from "../../components/common/Pagination";
import { useSearchParams } from "react-router-dom";



export function Pets() {
  const[searchParams, setSerachParams] = useSearchParams()
  const urlParams = {
    page:searchParams.get('page') ?Number(searchParams.get('page')):1
  }


  });
  function changePage(page:number){
    setSerachParams((params) =>{
      params.set('page', String(page))
      return params
    })
  }
  // console.log(data)
  return (
    <Grid>
      <div className={styles.container}>
        <Header />
        {isLoading &&(
            <Skeleton count={5} containerClassName={styles.skeleton} />
        )}
        <main className={styles.list}>
          {data?.items.map((pet) => (
            <Card
              key={pet.id}
              href={`/pet/${pet.id}`}
              text={pet.name}
              thumb={pet.photo}
            />
          ))}
        </main>
        {data?.currentPage&& <Pagination currentPage={data.currentPage} totalPages={data.totalPages} onPageChange={(number) => changePage(number)} />
        }
      </div>
    </Grid>
  );
}