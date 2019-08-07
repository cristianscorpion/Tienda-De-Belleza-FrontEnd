import { Component, OnInit } from '@angular/core';
import { ProductosService} from './services/productos.service';
import {Bodega} from './models/Bodega';
import { Producto } from './models/producto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  bodegas:Bodega[] = [];

  constructor(public productoService: ProductosService){

  }

  ngOnInit(){
   this.productoService.getAllBodegas()
    .subscribe(bodegas => {
        console.log(bodegas);
        this.bodegas = bodegas;
      },
      error => console.log(error)
      )
  }

  guardarProducto(nombreProducto: HTMLInputElement, bodega: HTMLSelectElement, precioProducto:HTMLInputElement, 
        unidadesProducto:HTMLInputElement, tipoProducto:HTMLInputElement) {
    const producto: Producto = {
      codigoProducto: null,
      nombreProducto: nombreProducto.value,
      bodegaId: Number(bodega.value),
      nombreBodega: null,
      precioProducto:precioProducto.value,
      unidadesDisponibles:Number(unidadesProducto.value),
      tipoProducto:tipoProducto.value
    };
    console.log(JSON.stringify(producto));
    this.productoService.saveProduct(producto)
    .subscribe()
    alert('Producto Agregado con Exito!');
  }
}
