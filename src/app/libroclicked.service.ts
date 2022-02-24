import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LibroclickedService {

  libros: any;//Cambio object por any

  constructor() { 
    this.libros = [];
  }

  libroVisto(libroVisto: object) {
    this.libros.push(libroVisto);
  }

  verListado() {
    if (this.libros.length > 0) { //Quito todo el if else
      return this.libros;
    } else {
      return false;
    }
  }
}
