import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: Producto[] = [];

  constructor(private http: HttpClient ) {

    this.cargarProductos();

   }

  private cargarProductos(){

    this.http.get('https://angular-html-3e264-default-rtdb.firebaseio.com/productos_idx.json')
      .subscribe((resp: any) => {
        console.log(resp);
        this.productos= resp;

        this.cargando= false;

      });

  }
}
function resp(resp: any) {
  throw new Error('Function not implemented.');
}

