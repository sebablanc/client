import { ICursoSend } from "../curso/cursoService.interface";

export interface IComisionSend{
    id: number;
    cursoId: number;
    dias: string;
    horaDesde: Date;
    horaHasta: Date;
    fechaInicio: Date;
    fechaFin: Date;
    createdAt: Date,
    updatedAt: Date
}

export interface IComisionGet{
    id: number;
    curso: ICursoSend;
    cursoId?: number;
    dias: string;
    horaDesde: Date;
    horaHasta: Date;
    fechaInicio: Date;
    fechaFin: Date;
    createdAt: Date,
    updatedAt: Date
}