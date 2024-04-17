import styles from '.Grid.module.css/'
import { ReactNode } from 'react'

import IGrid{
    children:ReactNode
}

export function Grid(children): IGrid{
    return<div className=(styles.Grid)>{children}</div>
}