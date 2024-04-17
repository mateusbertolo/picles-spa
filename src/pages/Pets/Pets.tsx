import { Link } from "react-router-dom"
import { Header } from "../../components/common/Header"
import { Grid } from "../../components/layout/Grid"
import styles from "./Pets.module.css"

export function Pets(){
    return(
    <Grid>
    <header />
    <Link to={"/pets/20"}></Link>
    </Grid>
    )
}