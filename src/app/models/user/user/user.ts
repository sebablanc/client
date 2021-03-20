export class User {

    private _activated: boolean;
    private _email: string;
    private _id: number;
    private _persona: object;
    private _tipo: string;
    
    constructor(){}

    get activated(): boolean{
        return this._activated;
    }

    set activated(activated: boolean){
        this._activated = activated;
    }
    
    get email(): string {
        return this._email;
    }

    set email(email: string){
        this._email = email;
    }

    get id(): number{
        return this._id;
    }

    set id(id: number){
        this._id = id;
    }

    get persona(): object{
        return this._persona;
    }

    set persona(persona: object){
        this._persona = persona;
    }

    get tipo(): string {
        return this._tipo;
    }

    set tipo(tipo: string){
        this._tipo = tipo;
    }
}