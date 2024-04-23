
import styles from './Panel.module.css'
import { ReactNode } from 'react'

interface IPainel{
    children: ReactNode
}


export function Panel({children}: IPainel){
    return( <div className={styles.Panel}>
        <div>Sidebar</div>
        <main className={styles.content}>{children}</main>
    </div>
    )
}