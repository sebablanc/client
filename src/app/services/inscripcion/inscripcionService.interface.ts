import { IComisionGet } from "../comision/comisionService.interface";
import { IPersonaSend } from "../persona/personaService.interface";

export interface IInscripcionSend{
    id: number;
    fechaInscripcion: Date;
    personaId: number;
    comisionId: number;
    comision?: IComisionGet;
    persona?: IPersonaSend;
    createdAt: Date,
    updatedAt: Date
}