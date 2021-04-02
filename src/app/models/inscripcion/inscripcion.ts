import { IComisionSend } from "src/app/services/comision/comisionService.interface";
import { IPersonaSend } from "src/app/services/persona/personaService.interface";

export class Inscripcion {
    
    private id: number;
    private fechaInscripcion: Date;
    private alumno: IPersonaSend;
    private comision: IComisionSend;
    private createdAt: Date;
    private updatedAt: Date;

    constructor(){}

    get obtenerId(){
        return this.id;
    }

    set cambiarId(id: number){
        this.id = id;
    }

    get obtenerFechaInscripcion(){
        return this.fechaInscripcion;
    }

    set cambiarFechaInscripcion(fechaInscripcion: Date){
        this.fechaInscripcion = fechaInscripcion;
    }

    get obtenerAlumno(){
        return this.alumno;
    }

    set cambiarAlumno(alumno: IPersonaSend){
        this.alumno = alumno;
    }

    get obtenerComision(){
        return this.comision;
    }

    set cambiarComision(comision: IComisionSend){
        this.comision = comision;
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