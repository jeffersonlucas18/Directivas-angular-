import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-if',
  templateUrl: './if.component.html',
  styleUrls: ['./if.component.css']
})
export class IfComponent implements OnInit {

  cursos: string [] = [];

  mostrarCursos: boolean= true;

  constructor() { }

  ngOnInit() {
  }
  onMostrar() {
    this.mostrarCursos = !this.mostrarCursos;
  }
}
