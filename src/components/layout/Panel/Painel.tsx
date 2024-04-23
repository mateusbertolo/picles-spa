
import styles from './Panel.module.css'
import { ReactNode } from 'react'

interface IPainel{
    children: ReactNode
}


export function Painel({children}: IPainel){
    return( <div className={styles.Painel}>
        <div>Sidebar</div>
        <main className={styles.content}>{children}</main>
    </div>
    )
}