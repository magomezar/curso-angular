import { Component, OnInit } from '@angular/core';
import { LibroclickedService } from '../libroclicked.service';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

  //verAutor!: string;
  libros: any;
  errorHttp!: boolean;

  constructor(private http: HttpClient, public LibroClicked: LibroclickedService) {
    
  }

  ngOnInit(): void {
    this.cargarLista();
  }
  //return this.http.post(this.apiUrl+url,request).subscribe(
    //(response) => {return response.json()}

  cargarLista() {
    return this.http.get('assets/lista-libros.json').subscribe(
      //(respuesta: Response) => { this.libros = respuesta; },
      //(respuesta: Response) => { this.errorHttp = true; }
    )
  }
  /*constructor() {
    this.libros = [
      {id:'1', titulo: 'Te veré bajo el hielo', autor:'Robert Bryndza'},
      {id:'2', titulo: 'Dime quién soy', autor:'Julia Navarro'},
      {id:'3', titulo: 'El día que se perdió la cordura', autor:'Javier Castillo'}
    ]
  }

  showAuthor(_libro: any){
    this.verAutor = 'Escrito por: ' + _libro.autor;
    alert(this.verAutor)
    console.log(_libro.titulo, ' escrito por ', _libro.autor)
  }*/

 
  agregarLibro(_libroVisto: any) {
    this.LibroClicked.libroVisto(_libroVisto);
  }
}
