import { Component } from '@angular/core';
import { ServicioFondoService,Arreglo } from 'src/app/services/servicio-fondo.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  public valTipo: boolean=false;
  public arreglo: Arreglo[]=[];
  constructor(public _servicioFondo: ServicioFondoService
    ){
  }

  ngOnInit(): void{ 
    this._servicioFondo.filtro="";
    this.arreglo=this._servicioFondo.getArreglo();
    console.log(this.arreglo);
    console.log(this.arreglo);
  }

  verTodos(): void{
    this._servicioFondo.filtro="";
  }

  verInternos(): void{
    this._servicioFondo.filtro="Interno";
  }

  verExternos(): void{
    this._servicioFondo.filtro="Externo";
  }

  verDescp(arreglo: Arreglo){
    arreglo.verDes = !arreglo.verDes;
    console.log(arreglo);
  }
}
