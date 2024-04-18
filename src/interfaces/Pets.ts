export interface Pet{
    id:string
    name: string
    type: string
    size: string
    gender:string
    bio:string
    photo:string
}

export type GetPetsRequet = Partial<Pick<IDBIndexParameters, 'type' >