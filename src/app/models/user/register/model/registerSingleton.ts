import { Register } from "./register";

export class RegisterSingleton {
    entity: Register;

    private constructor(){}

    instance(){
        return this.entity;
    }
}
