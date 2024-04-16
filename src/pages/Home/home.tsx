import { Button, ButtonVariant } from "../../components/common/Button";
import styles from "./home.module.css"

export function Home(){
return(
    <div className={styles.container}>
    <Button> Variant = {ButtonVariant.Default} quero adotar</Button>
    </div>
)}