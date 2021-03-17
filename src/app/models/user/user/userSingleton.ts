import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class UserSingleton {
    entity: User;

    private constructor() { }

    instance() {
        return this.entity;
    }
}
