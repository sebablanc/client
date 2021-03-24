import { Injectable } from "@angular/core";
import { Persona } from "./persona";

@Injectable({
    providedIn: 'root'
})
export class PersonaSingleton {
    private entity: Persona;

    private constructor() { }

    async instance() {
        return this.entity;
    }
}
