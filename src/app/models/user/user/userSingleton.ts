import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage-angular";
import { StorageService } from "src/app/services/storage/storage.service";
import { User } from "./user";

@Injectable({
    providedIn: 'root'
})
export class UserSingleton {
    entity: User;

    private constructor(private storageSrv: StorageService, private storage: Storage) { }

    async instance() {
        if(!this.entity){
            this.entity = await this.storageSrv.get('user');
        }
        return this.entity;
    }
}
