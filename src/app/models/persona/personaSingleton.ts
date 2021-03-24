import { Injectable } from "@angular/core";
import { StorageService } from "src/app/services/storage/storage.service";
import { Persona } from "./persona";

@Injectable({
    providedIn: 'root'
})
export class PersonaSingleton {
    private entity: Persona;

    private constructor(private storageSrv: StorageService) { }

    async instance() {
        if(!this.entity){
            this.entity = await this.storageSrv.get('persona');
        }
        return this.entity;
    }
}
