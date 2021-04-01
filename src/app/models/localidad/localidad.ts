export class Localidad {
    private id: number;
    private codPostal: number;
    private ciudad: string;
    private provincia: string;
    private createdAt: Date;
    private updatedAt: Date;

    constructor(){}

    get obtenerId(){
        return this.id;
    }

    set cambiarId(id: number){
        this.id = id;
    }

    get obtenerCodPostal(){
        return this.codPostal;
    }

    set cambiarCodPostal(codPostal: number){
        this.codPostal = codPostal;
    }

    get obtenerCiudad(){
        return this.ciudad;
    }

    set cambiarCiudad(ciudad: string){
        this.ciudad = ciudad;
    }

    get obtenerProvincia(){
        return this.provincia;
    }

    set cambiarProvincia(provincia: string){
        this.provincia = provincia;
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