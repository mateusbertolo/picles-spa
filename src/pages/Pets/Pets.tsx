
 import { useEffect } from "react";
import { Header } from "../../components/common/Header/Header";
import { Grid } from "../../components/layout/Grid";
import styles from './Pets.module.css'
import { Card } from "../../components/common/Card";
import { Skeleton } from "../../components/common/Skeleton";



export function Pets(){
    useEffect(() =>{

    }, [])
    return(
        <Grid>
            <div className={styles.container}>

            <Header />
            <main className={styles.list}>
                <Skeleton count={5} containerClassName={styles.skeleton}/>
                <Card href="pets/1" text="Bonny" thumb=""/>
                <Card href="pets/2" text="Nina" thumb=""/>
                <Card href="pets/3" text="Julia" thumb=""/>    
                <Card href="pets/2" text="Nina" thumb=""/>
                <Card href="pets/3" text="Julia" thumb=""/>    
                <Card href="pets/2" text="Nina" thumb=""/>
                <Card href="pets/3" text="Julia" thumb=""/>                
            </main>
            </div>

        </Grid>
    )
}