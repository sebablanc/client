import { Injectable } from '@angular/core';
import Swal, { SweetAlertIcon } from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SweetAlertService {

  constructor() { }

  public async decisionAlert(title: string, text: string, textConfimButton: string, textCancelButton: string){
    return Swal.fire({
      title: title,
      text: text,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: textConfimButton,
      cancelButtonText: textCancelButton,
      reverseButtons: true
    }).then(reponse =>{
      return reponse.isConfirmed;
    }).catch(err =>{
      return false;
    })
  }

  public async okAlert(title: string, text: string, success: boolean){
    let icono: SweetAlertIcon = success ? 'success' : 'error';
    return Swal.fire({
      title: title,
      text: text,
      icon: icono,
      confirmButtonText: 'Ok'
    }).then(reponse =>{
      return reponse.isConfirmed;
    }).catch(err =>{
      return false;
    })
  }
}
