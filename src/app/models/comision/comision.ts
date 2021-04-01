import { Curso } from "../curso/curso";
import { diaTypeInfo } from "../dias/dias.types";

export class Comision {
    
    private id: number;
    private curso: Curso;

    // Revisar Tipo de dato
    private dias: Array<diaTypeInfo>;
    private horaDesde: Date;
    private horaHasta: Date;
    
    private fechaFin: Date;
    private fechaInicio: Date;
    private createdAt: Date;
    private updatedAt: Date;

    constructor(){}

    get obtenerId(){
        return this.id;
    }

    set cambiarId(id: number){
        this.id = id;
    }

    get obtenerCurso(){
        return this.curso;
    }

    set cambiarCurso(curso: Curso){
        this.curso = curso;
    }

    get obtenerDias(){
        return this.dias;
    }

    set cambiarDias(dias: Array<diaTypeInfo>){
        this.dias = dias;
    }

    get obtenerHoraDesde(){
        return this.horaDesde;
    }

    set cambiarHoraDesde(horaDesde: Date){
        this.horaDesde = horaDesde;
    }

    get obtenerHoraHasta(){
        return this.horaHasta;
    }

    set cambiarHoraHasta(horaHasta: Date){
        this.horaHasta = horaHasta;
    }

    get obtenerFechaInicio(){
        return this.fechaInicio;
    }

    set cambiarFechaInicio(fechaInicio: Date){
        this.fechaInicio = fechaInicio;
    }
    
    get obtenerFechaFin(){
        return this.fechaFin;
    }

    set cambiarFechaFin(fechaFin: Date){
        this.fechaFin = fechaFin;
    }

    get obtenerFechaCreacion(){
        return this.createdAt;
    }

    set cambiarFechaCreacion(createdAt: Date){
        this.createdAt = createdAt;
    }

    get obtenerFechaModificacion(){
        return this.updatedAt;
    }

    set cambiarFechaModificacion(updatedAt: Date){
        this.updatedAt = updatedAt;
    }
}