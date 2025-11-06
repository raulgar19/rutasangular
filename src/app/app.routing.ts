import { HomeComponent } from './components/home-component/home-component';
import { CineComponent } from './components/cine-component/cine-component';
import { MusicaComponent } from './components/musica-component/musica-component';
import { NumeroDobleComponent } from './components/numero-doble-component/numero-doble-component';
import { NotFoundComponent } from './components/not-found-component/not-found-component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { TablaMultiplicarRouting } from './components/tabla-multiplicar-routing/tabla-multiplicar-routing';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cine', component: CineComponent },
  { path: 'musica', component: MusicaComponent },
  { path: 'numeroDoble', component: NumeroDobleComponent },
  { path: 'numeroDoble/:numero', component: NumeroDobleComponent },
  { path: 'numeroDoble/:numero', component: NumeroDobleComponent },
  { path: 'tablamultiplicar/:numero', component: TablaMultiplicarRouting },
  { path: '**', component: NotFoundComponent },
];

export const appRoutingProvider: any[] = [];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
