import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colores',
  templateUrl: './colores.component.html',
  styleUrls: ['./colores.component.css']
})
export class ColoresComponent implements OnInit {

  colorLocal: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  generarRandom(): String {
    return Math.floor(Math.random()*16777215).toString(16);
  }

  colorHex(): String {
    //return '#' + this.generarRandom();
    this.colorLocal = '#' + this.generarRandom();
    return this.colorLocal;
  }

}
