import { CursoTypeInfo } from "./curso-types.enum";

export class Curso {
    
    private id: number;
    private nombre: string;
    private imagen: string;
    private programa: string;
    private valor: number;
    private descripcion: string;
    private categoria: CursoTypeInfo;
    private createdAt: Date;
    private updatedAt: Date;

    constructor(){}

    get obtenerId(){
        return this.id;
    }

    set cambiarId(id: number){
        this.id = id;
    }

    get obtenerNombre(){
        return this.nombre;
    }

    set cambiarNombre(nombre: string){
        this.nombre = nombre;
    }

    get obtenerImagen(){
        return this.imagen;
    }

    set cambiarImagen(imagen: string){
        this.imagen = imagen;
    }

    get obtenerPrograma(){
        return this.programa;
    }

    set cambiarPrograma(programa: string){
        this.programa = programa;
    }

    get obtenerValor(){
        return this.valor;
    }

    set cambiarValor(valor: number){
        this.valor = valor;
    }

    get obtenerDescripicion(){
        return this.descripcion;
    }

    set cambiarDescripcion(descripcion: string){
        this.descripcion = descripcion;
    }

    get obtenerCategoria(){
        return this.categoria;
    }

    set cambiarCategoria(categoria: CursoTypeInfo){
        this.categoria = categoria;
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