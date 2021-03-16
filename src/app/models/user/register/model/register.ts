import { IRegister } from "../interface/register";

export class Register implements IRegister {

    private _email: string;
    private _pass: string;
    
    constructor(){}

    get email(){
        return this._email;
    }

    set email(email: string){
        this._email = email;
    }

    get pass(){
        return this._pass;
    }

    set pass(pass: string){
        this._pass = pass;
    }
}
