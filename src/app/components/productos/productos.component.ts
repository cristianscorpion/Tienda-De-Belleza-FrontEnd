import { Component, OnInit, ViewChild } from '@angular/core';
import {ProductosService} from '../../services/productos.service'
import {Producto} from '../../models/Producto';
import { MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos:Producto[] = [];
  displayedColumns = ['codigoProducto', 'nombreProducto', 'nombreBodega'];

  constructor(public productosService:ProductosService) { }
  dataSource = new MatTableDataSource();

  ngOnInit() {
    this.productosService.getAllProducts()
    .subscribe(productos => {
        console.log(productos);
        this.productos = productos;
        this.dataSource.data = productos;
      },
      error => console.log(error)
      );
      
  }

  eliminar() { alert('Works!'); }

}
