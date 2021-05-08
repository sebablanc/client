import { meses, MesType } from "../meses/meses";
import { sorteosTypes, SorteoTypeInfo } from "./sorteo-types.enum";

export class Premio {
    
    private id: number;
    private fechaSorteo: Date;
    private numeroCupon: number;
    private alumnoFavorecido: string;
    private alumnoExtractor: string;
    private detalleExtraccion: string;
    private mes: MesType;

    //Revisar tipo de dato
    private tipo: SorteoTypeInfo;
    private createdAt: Date;
    private updatedAt: Date;

    constructor(){}

    get obtenerId(){
        return this.id;
    }

    set cambiarId(id: number){
        this.id = id;
    }

    get obtenerFechaSorteo(){
        return this.fechaSorteo;
    }

    set cambiarFechaSorteo(fechaSorteo: Date){
        this.fechaSorteo = fechaSorteo;
    }

    get obtenerNumeroCupon(){
        return this.numeroCupon;
    }

    set cambiarNumeroCupon(numeroCupon: number){
        this.numeroCupon = numeroCupon;
    }

    get obtenerAlumnoFavorecido(){
        return this.alumnoFavorecido;
    }

    set cambiarAlumnoFavorecido(alumnoFavorecido: string){
        this.alumnoFavorecido = alumnoFavorecido;
    }

    get obtenerAlumnoExtractor(){
        return this.alumnoExtractor;
    }

    set cambiarAlumnoExtractor(alumnoExtractor: string){
        this.alumnoExtractor = alumnoExtractor;
    }

    get obtenerDetalleExtraccion(){
        return this.detalleExtraccion;
    }

    set cambiarDetalleExtraccion(detalleExtraccion: string){
        this.detalleExtraccion = detalleExtraccion;
    }

    get obtenerTipo(){
        return this.tipo;
    }

    set cambiarTipo(tipo: string){
        this.tipo = sorteosTypes.filter(type => {return type.value == tipo})[0];
    }

    get obtenerMes(){
        return this.mes;
    }

    set cambiarMes(mes: string){
        this.mes = meses.filter(mesObject => {return mesObject.value == mes})[0];;
        
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