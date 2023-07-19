import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';
import { FitrarRutaPipe } from './pipes/fitrar-ruta.pipe';
import { BuscarRutaPipe } from './pipes/buscar-ruta.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    QuienesSomosComponent,
    FitrarRutaPipe,
    BuscarRutaPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
