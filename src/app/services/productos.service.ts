import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Producto} from '../models/Producto';
import {Bodega} from '../models/Bodega';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) { }

  getAllProducts(){
    return this.http.get<Producto[]>('http://localhost:8080/producto/getAllProducts');
  }

  getAllBodegas(){
    return this.http.get<Bodega[]>('http://localhost:8080/producto/getAllBodegas');
  }

  saveProduct(producto: any){
    let json = JSON.stringify(producto);
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this.http.post("http://localhost:8080/producto/saveProduct", json, {headers});
  }

}
