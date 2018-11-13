import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import {environment} from '../../../environments/environment.prod'
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_URI = environment.API_URI;
  constructor(private http: HttpClient) { }

  post(url, body: Object = {}): Observable<any> {
    return this.http.post(`${this.API_URI}${url}`, JSON.stringify(body));
  }

  get(url, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.get(`${this.API_URI}${url}`, {
      params
    });
  };

  update(url, body: Object = {}): Observable<any> {
    return this.http.put(`${this.API_URI}${url}`, JSON.stringify(body));
  }

  delete(url): Observable<any>{
    return this.http.delete(`${this.API_URI}${url}`);
  }

}
