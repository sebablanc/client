import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage-angular";
import { StorageService } from "src/app/services/storage/storage.service";
import { User } from "./user";

@Injectable({
    providedIn: 'root'
})
export class UserSingleton {
    private entity: User;

    private constructor(private storageSrv: StorageService, private storage: Storage) { }

    instance(reset: boolean = false): User {
        if(!this.entity && !reset){
            this.entity = new User();
            this.storageSrv.get('user').then(user =>{
                Object.assign(this.entity, user);
                return this.entity;
            });
        }
        return this.entity;
    }
}
