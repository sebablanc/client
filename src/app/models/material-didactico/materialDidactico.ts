import { Curso } from "../curso/curso";

export class MaterialDidactico {
    
    private id: number;
    private curso: Curso;
    private nombreArchivo: string;
    private archivo: string;
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

    get obtenerNombreArchivo(){
        return this.nombreArchivo;
    }

    set cambiarNombreArchivo(nombreArchivo: string){
        this.nombreArchivo = nombreArchivo;
    }

    get obtenerArchivo(){
        return this.archivo;
    }

    set cambiarArchivo(archivo: string){
        this.archivo = archivo;
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