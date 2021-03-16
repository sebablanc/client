import { Login } from "./login";

export class LoginSingleton {
    entity: Login;

    private constructor(){}

    instance(){
        return this.entity;
    }
}
