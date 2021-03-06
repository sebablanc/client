import { Injectable } from "@angular/core";
import { Register } from "./register";

@Injectable({
    providedIn: 'root'
})
export class RegisterSingleton {
    entity: Register;

    private constructor() { }

    instance() {
        return this.entity;
    }
}
