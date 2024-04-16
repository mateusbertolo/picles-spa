import { Button, ButtonVariant } from "../../components/common/Button";
import styles from "./Home.module.css"
import dog from "../../assets/dog.svg"

export function Home(){
return(
    <div className={styles.container}>
        <img src={dog} alt="Cachorro" />
    <Button variant = {ButtonVariant.Default}>  quero adotar</Button>
    <Button variant = {ButtonVariant.Outlined}>  Tenho um Abrigo</Button>
    </div>
)}