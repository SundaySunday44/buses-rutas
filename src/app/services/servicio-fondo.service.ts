import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioFondoService {
  public busqueda: string='';
  public filtro: string='';
  private arreglo: Arreglo[]=[
    {
      ciudadOR: "Pasaje",
      ciudadDES: "Machala",
      precio:  "0.65",
      descripcion: "Viaje directo de Pasaje a Machala",
      tipo:  "Interno",
      verDes: false,
    },
    {
      ciudadOR: "Pasaje",
      ciudadDES: "Santa Rosa",
      precio:  "0.80",
      descripcion: "Viaje directo de Pasaje a Santa Rosa",
      tipo:  "Interno",
      verDes: false,
    },
    {
      ciudadOR: "Pasaje",
      ciudadDES: "Guayaquil",
      precio:  "7.00",
      descripcion: "Viaje directo de Pasaje a Guayaquil",
      tipo:  "Externo",
      verDes: false,
    },
    {
      ciudadOR: "Machala",
      ciudadDES: "Quito",
      precio:  "11.00",
      descripcion: "Viaje directo de Machala a Quito",
      tipo:  "Externo",
      verDes: false,
    },
    {
      ciudadOR: "Pasaje",
      ciudadDES: "Cuenca",
      precio:  "6.00",
      descripcion: "Viaje directo de Pasaje a Cuenca",
      tipo:  "Externo",
      verDes: false,
    },
    {
      ciudadOR: "Pasaje",
      ciudadDES: "El Guabo",
      precio:  "0.80",
      descripcion: "Viaje directo de Pasaje a El Guabo",
      tipo:  "Interno",
      verDes: false,
    },
    {
      ciudadOR: "Quito",
      ciudadDES: "Machala",
      precio:  "11.00",
      descripcion: "Viaje directo de Quito a Machala",
      tipo:  "Externo",
      verDes: false,
    },
    {
      ciudadOR: "Huaquillas",
      ciudadDES: "Santa Rosa",
      precio:  "0.80",
      descripcion: "Viaje directo de Huaquillas a Santa Rosa",
      tipo:  "Interno",
      verDes: false,
    },
    {
      ciudadOR: "Pasaje",
      ciudadDES: "Huaquillas",
      precio:  "1.00",
      descripcion: "Viaje directo de Pasaje a Huaquillas",
      tipo:  "Interno",
      verDes: false,
    },
    {
      ciudadOR: "Santa Rosa",
      ciudadDES: "Durán",
      precio:  "7.00",
      descripcion: "Viaje directo de Pasaje a Durán",
      tipo:  "Interno",
      verDes: false,
    }
  ]

  constructor() {
    console.log("Servicio listo y esperando...");
   }

  public aux: string = 'Hola mundo';

  public getArreglo(){
    return this.arreglo;
  }
}

export interface Arreglo{
  ciudadOR: string;
  ciudadDES: string;
  precio: string;
  descripcion: string;
  tipo: string;
  verDes: boolean;
}
