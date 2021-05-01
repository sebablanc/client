export enum SorteoTypes {
    COMPUTADORA = "COMPUTADORA",
    CUOTA = "CUOTA"
}

export type SorteoTypeInfo = {
    value: string;
    description: string;
}

export const sorteosTypes = [
    {value: 'COMPUTADORA', description: 'Computadora'},
    {value: 'CUOTA', description: 'Cuota'}
]