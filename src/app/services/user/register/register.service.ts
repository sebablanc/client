import { Injectable } from '@angular/core';
import { Register } from 'src/app/models/user/register/model/register';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  userRegister: Register;

  constructor() { }

  getRegisterInstance(){
    
  }
}
