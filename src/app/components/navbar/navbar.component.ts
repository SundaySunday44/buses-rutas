import { Component } from '@angular/core';
import { ServicioFondoService } from 'src/app/services/servicio-fondo.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  public busqueda: string="";

  constructor(public servicioFondo: ServicioFondoService){}

  obtenerNombre(){
    this.servicioFondo.busqueda=this.busqueda;
  }
}
