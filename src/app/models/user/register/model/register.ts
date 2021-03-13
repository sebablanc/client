import { IRegister } from "../interface/register";

export class Register implements IRegister {

    private _email: string;
    private _password: string;
    
    constructor(){}

    get email(){
        return this._email;
    }

    set email(email: string){
        this._email = email;
    }

    get password(){
        return this._password;
    }

    set password(password: string){
        this._password = password;
    }
}
