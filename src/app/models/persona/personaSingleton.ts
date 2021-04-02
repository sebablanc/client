import { Injectable } from "@angular/core";
import { LocalidadService } from "src/app/services/localidad/localidad.service";
import { StorageService } from "src/app/services/storage/storage.service";
import { Persona } from "./persona";

@Injectable({
    providedIn: 'root'
})
export class PersonaSingleton {
    private entity: Persona;

    private constructor(private storageSrv: StorageService, private localidadSrv: LocalidadService) { }

    async instance() {
        if(!this.entity){
            this.entity = new Persona();
            let personaStorage = await this.storageSrv.get('persona');
            Object.assign(this.entity, personaStorage);
            let localidadResp = await this.localidadSrv.getLocalidadByID(personaStorage.localidadId);
            this.entity.setLocalidad = localidadResp && localidadResp.localidades && localidadResp.localidades[0] ? localidadResp.localidades[0] : null;
        }
        return this.entity;
    }
}
