import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-numero-doble-component',
  standalone: false,
  templateUrl: './numero-doble-component.html',
  styleUrl: './numero-doble-component.css',
})
export class NumeroDobleComponent implements OnInit {
  public doble: number;
  public numero!: number;

  constructor(private _activeRoute: ActivatedRoute, private _router: Router) {
    this.doble = 0;
  }

  redirect(num: number): void {
    this._router.navigate(['/numeroDoble', num]);
  }

  goToHome(): void {
    this._router.navigate(['/']);
  }

  ngOnInit(): void {
    this._activeRoute.params.subscribe((parametros: Params) => {
      if (parametros['numero'] !== null) {
        this.numero = parseInt(parametros['numero']);
        this.doble = this.numero * 2;
      }
    });
  }
}
