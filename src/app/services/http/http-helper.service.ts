import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpHelperService {

  constructor(private httpClient: HttpClient) { }

  post(config: IPostConfig): Promise<any>{
    return this.httpClient.post<any>(environment.serverURL+config.url, config.body).toPromise();
  }
}


export interface IPostConfig {
  url: string,
  body: any
}