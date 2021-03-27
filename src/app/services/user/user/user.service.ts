import { Injectable } from "@angular/core";
import { User } from "src/app/models/user/user/user";
import { HttpHelperService } from "../../http/http-helper.service";
import { StorageService } from "../../storage/storage.service";
import { IUserSend } from "./userService.interface";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private updateURL = 'user/update';

    constructor(private httpHelperSrv: HttpHelperService, private storageSrv: StorageService) { }

    parseUserToUserSend(user: User): IUserSend{
        if(!user) return;
    
        let userToSend: IUserSend = {
            activated: user.activated,
            email: user.email,
            id: user.id,
            tipo: user.tipo,
            personaid: user.persona['id'],
        }
    
        return userToSend;
      }

    updateUser(body: any): Promise<any> {
        if(body.persona) {
            body.personaId = body.persona.id;
            delete body.persona;
        };
        return this.httpHelperSrv.put({ url: this.updateURL, body: body }).then(response => {
            return response;
        }).catch(error => {
            return error.error;
        })
    }

}