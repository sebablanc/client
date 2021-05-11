export interface IConsultaSend{
    nombre: string;
    apellido: string;
    telefono: string;
    email: string;
    consulta: string;
}

export interface ConsultaResponse {
    exito: boolean;
    messages: Array<string>;
}
