import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private url = environment.URL + '/notifications'

  constructor(private http: HttpClient) {
  }

  public deleteNotification(id: any): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }
}
