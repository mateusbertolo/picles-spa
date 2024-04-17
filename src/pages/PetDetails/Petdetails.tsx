import { Header } from "../../components/common/Header"
import { Grid } from "../../components/layout/Grid"
import styles from './PetDetails.module.css'

export function Petsdetails(){
    return(
    <Grid>
        <div className={styles.container}>
        <header showButton={true}/>
        <h3>Detalhes do Pet</h3>
        </div>
    </Grid>
    )
}