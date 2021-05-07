import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

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
}
