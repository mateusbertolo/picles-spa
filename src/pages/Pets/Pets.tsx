import { useEffect, useState } from 'react'
import { Header } from '../../components/common/Header'
import { Grid } from '../../components/layout/Grid'
import styles from './Pets.module.css'
import { Card } from '../../components/common/Card'
import { getPets } from '../../services/pets/getPets'
import { Skeleton } from '../../components/common/skeleton'
import { useQuery } from '@tanstack/react-query'
import { Select } from '../../components/common/Select'
import { filtercolum } from './pets.constants'
import { useSearchParams } from 'react-router-dom'

export function Pets() {
  const { data, isLoading } = useQuery({
    queryKey: ['get-pets'],
    queryFn: () => getPets(),
  })

  export function Pets() {
    const [searchParams, setSearchParams] = useSearchParams();
  
    const urlParams = {
      page: Number(searchParams.get('page')) ?? 1,
      type: searchParams.get('type') ?? '',
      gender: searchParams.get('gender') ?? ''
    };
  }
  
  return (
    <Grid>
      <div className={styles.container}>
        <Header />
        <form className={styles.filters}>
              <div className={styles.columns}>
                  {filtercolum.map(filter => (
                      <div key={filter.name} className={styles.columns}>
                          <Select
                              label={filter.title}
                              defaultValue=(urlParams{filter.name})
                              name={filter.name}
                              options={filter.options}
                          />
                      </div>
                  ))}
              </div>
              <button type='submit'>Buscar</button>
          </form>
        {isLoading && (
          <Skeleton containerClassName={styles.skeleton} count={10} />
        )}
        <main className={styles.list}>
          {data?.items?.map((pet) => (
            <Card
              key={pet.id}
              href={`/pet/${pet.id}`}
              text={pet.name}
              thumb={pet.photo}
            />
          ))}
        </main>
      </div>
    </Grid>
  )
}
