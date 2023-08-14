import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent {
  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      //subscirbe permite crear una funcion de flecha que tiene el evento
      if (event instanceof NavigationEnd) {
        console.log('Evento', event);
        switch (event.urlAfterRedirects) {
          case '/':
            this.seleccionado = [true, false, false, false];
            break;
          case '/buscar':
            this.seleccionado = [false, true, false, false];
            break;
          case '/carrito':
            this.seleccionado = [false, false, true, false];
            break;
          case '/perfil':
            this.seleccionado = [false, false, false, true];
            break;
          default:
            this.seleccionado = [false, false, false, false];
            break;
        }
      }
    });
  }

  seleccionado = [false, false, false, false];
  colorDesactivado = '#555555'
  colorActivado = '#000000'
  /*para declarar funciones o metodos en Angular, solo se debe escribir el nombre del metodo
  en este caso solo escribo navegar y recibe un string como parametro*/
  navegar(direccion: string) {
    //cambiar de pagina
    this.router.navigate([direccion]);
    console.log(direccion);
  }
}
