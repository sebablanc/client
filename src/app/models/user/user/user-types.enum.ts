export enum UserTypes {
    ADMIN = "ADMIN",
    USER = "USER"
}

export type UserTypeInfo = {
    value: string;
    description: string;
}

export const usersTypes = [
    {value: 'ADMIN', description: 'Administrador'},
    {value: 'USER', description: 'Usuario'}
]