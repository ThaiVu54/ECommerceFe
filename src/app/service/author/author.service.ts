import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Jwtresponse} from "../../model/jwtresponse";

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  private url = environment.URL + '/auth';
  private httpOptions = {
    header: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer' + window.sessionStorage.getItem('token')
    })
  }

  constructor(private http: HttpClient) {
  }

  public login(loginForm: any): Observable<Jwtresponse>{
    return this.http.post(`${this.url}/login`, loginForm);
  }

  public logOut(): Observable<any>{
    return this.http.get(`${this.url}/logout`)
  }
}
