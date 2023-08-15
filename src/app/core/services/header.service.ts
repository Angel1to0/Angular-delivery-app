/**Este servicio es una clase que agrupa codigo que va a tener codigo relacionado al header
 * pero arranca inmediatamente cuando inicia la aplicacion, que haya variables, metodos, etc.
 * que tenga que ver con el header, y asi comunicar cada componente con el header
 */

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor() { }

  titulo:string = "Titulo"; //variable normal
}
