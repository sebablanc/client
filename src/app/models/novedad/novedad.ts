export class Novedad {
    
    private id: number;
    private title: string;
    private message: string;
    private createdAt: Date;
    private updatedAt: Date;

    constructor(){}

    get obtenerId(){
        return this.id;
    }

    get obtenerTitle(){
        return this.title;
    }

    set cambiarTitle(title: string){
        this.title = title;
    }

    get obtenerMensaje(){
        return this.message;
    }

    set cambiarMensaje(message: string){
        this.message = message;
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