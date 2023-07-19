import { Pipe, PipeTransform } from '@angular/core';
import { Arreglo } from '../services/servicio-fondo.service';


@Pipe({
  name: 'buscarRuta'
})
export class BuscarRutaPipe implements PipeTransform {

  transform(rutas: Arreglo[],name: string): Arreglo[] {
    /*se devuelve el arreglo original sin filtrar*/
    if(!name || !rutas){
     return rutas;
    } 
   /*miniscula*/
    name = name.toLowerCase();
    return rutas.filter(arreglo =>
      arreglo.ciudadDES.toLowerCase().includes(name) ||
      arreglo.ciudadOR.toLowerCase().includes(name)
    );   }
}
