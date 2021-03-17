import { Injectable } from "@angular/core";
import { Login } from "./login";

@Injectable({
    providedIn: 'root'
})
export class LoginSingleton {
    entity: Login;

    private constructor() { }

    instance() {
        return this.entity;
    }
}
