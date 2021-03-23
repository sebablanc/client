export enum UserTypes {
    ADMIN = "Administrador",
    USER = "Usuario"
}

export type UserTypeInfo = {
    value: string;
    description: string;
}

export const usersTypes = [
    {value: 'ADMIN', description: 'Adminsitrador'},
    {value: 'USER', description: 'Usuario'}
]