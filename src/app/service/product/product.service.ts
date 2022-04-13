import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../../model/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url = environment.URL + '/products';


  constructor(private http: HttpClient) {

  }

  public findAll(): Observable<Product[]>{
    // @ts-ignore
    return this.http.get(this.url);
  }
}
