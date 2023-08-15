import { Component, OnInit, inject } from '@angular/core';
import { HeaderService } from 'src/app/core/services/header.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  headerService = inject(HeaderService); //con esto conectamos el servicio del header al componente Home, aunque no tengan nada que ver, el servicio del header permite manipular el valor del mismo, creando asi un header dinamico
  
  ngOnInit(): void {
    this.headerService.titulo.set("Home") //Esto permite que se cambie el valor de la variable titulo que esta en el servicio del header, accedemos a ella mediante la variable headerService
  }
}
