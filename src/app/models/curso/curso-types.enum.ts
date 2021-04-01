export enum CursoType {
    ADULTOS = 'ADULTOS',
    KIDS = 'KIDS'
}

export type CursoTypeInfo = {
    value: string;
    description: string;
}

export const cursosTypes = [
    {value: 'ADULTOS', description: 'Adultos'},
    {value: 'KIDS', description: 'Kids'}
]