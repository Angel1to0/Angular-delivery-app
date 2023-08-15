import { Component, effect, inject, signal } from '@angular/core';
import { HeaderService } from '../../services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  headerService = inject(HeaderService); //esto nos permite tener acceso al HeaderService (servicio del header)
  claseAplicada = signal("");
  tituloMostrado = signal("");

  esconderTitulo = effect(()=>{ //effect es una funcion que se ejecuta cada vez que una señal que este dentro se actualice
    if (this.headerService.titulo()) {
      this.claseAplicada.set("fade-out");
    }
  },{allowSignalWrites:true});

  mostrarTituloNuevo(e:AnimationEvent){
    this.tituloMostrado.set(this.headerService.titulo());
    console.log(e);
    if (e.animationName.includes("fade-out")) {
      this.tituloMostrado.set(this.headerService.titulo());
      this.claseAplicada.set("fade-in");
      setTimeout(()=> {this.claseAplicada.set(""),1000});
    }
  }
}
