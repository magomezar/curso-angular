import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-renderdemo',
  templateUrl: './renderdemo.component.html',
  styleUrls: ['./renderdemo.component.css']
})
export class RenderdemoComponent implements OnInit {

  alumnos: Array<any>;
  clearElement!: HTMLElement;

  constructor(private ren: Renderer2) { 
    this.alumnos = [
      {nombre: "David", id: 1},
      {nombre: "Daniel", id: 2},
      {nombre: "Jose", id: 3},
      {nombre: "Tamara", id: 4}
    ]
  }

  ngOnInit(): void {
  }

  activeMethod(elemen:HTMLElement) {
    if (this.clearElement) {
      this.ren.removeClass(this.clearElement, 'miClass')
    }
    this.ren.addClass(elemen, 'miClass');
    this.clearElement = elemen;
  }

}
