import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProvider } from './app.routing';

import { App } from './app';
import { HomeComponent } from './components/home-component/home-component';
import { CineComponent } from './components/cine-component/cine-component';
import { MusicaComponent } from './components/musica-component/musica-component';
import { MenuComponent } from './components/menu-component/menu-component';
import { NotFoundComponent } from './components/not-found-component/not-found-component';
import { NumeroDobleComponent } from './components/numero-doble-component/numero-doble-component';
import { TablaMultiplicarRouting } from './components/tabla-multiplicar-routing/tabla-multiplicar-routing';
import { MenuTablaMultiplicar } from './components/menu-tabla-multiplicar/menu-tabla-multiplicar';

@NgModule({
  declarations: [App, HomeComponent, CineComponent, MusicaComponent, MenuComponent, NotFoundComponent, NumeroDobleComponent, TablaMultiplicarRouting, MenuTablaMultiplicar],
  imports: [BrowserModule, routing],
  providers: [provideBrowserGlobalErrorListeners(), ...appRoutingProvider],
  bootstrap: [App],
})
export class AppModule {}
