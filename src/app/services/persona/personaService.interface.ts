export interface IPersonaSend{
    id: number;
    nroCuenta: string;
    nombre: string;
    apellido: string;
    direccion: string;
    telefono: string;
    celular: string;
    email: string;
    otroMedio: string;
    localidadId: number;
    createdAt: Date;
    updatedAt: Date;
}

export interface ILastNroCuentaResponse{
    exito: boolean;
    messages: Array<string>;
    nroCuenta: {nroCuenta: string};
}