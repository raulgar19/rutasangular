import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-tabla-multiplicar',
  standalone: false,
  templateUrl: './menu-tabla-multiplicar.html',
  styleUrl: './menu-tabla-multiplicar.css',
})
export class MenuTablaMultiplicar implements OnInit {
  public numeros: Array<number>;

  constructor() {
    this.numeros = [];
  }

  ngOnInit(): void {
    for (let i = 0; i <= 5; i++) {
      let random: number = Math.floor(Math.random() * 100) + 1;
      this.numeros.push(random);
    }
  }
}
