import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-tabla-multiplicar-routing',
  standalone: false,
  templateUrl: './tabla-multiplicar-routing.html',
  styleUrl: './tabla-multiplicar-routing.css',
})
export class TablaMultiplicarRouting implements OnInit {
  public numero!: number;
  public resultados: Array<number>;

  constructor(private _activeRoute: ActivatedRoute) {
    this.resultados = [];
  }

  ngOnInit(): void {
    this._activeRoute.params.subscribe((parametros: Params) => {
      this.numero = parseInt(parametros['numero']);

      // Limpiar resultados previos y calcular la tabla
      this.resultados = [];
      if (this.numero) {
        for (let i = 1; i <= 10; i++) {
          this.resultados.push(this.numero * i);
        }
      }
    });
  }
}
