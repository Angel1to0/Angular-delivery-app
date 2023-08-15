import { Component, OnInit, inject } from '@angular/core';
import { HeaderService } from 'src/app/core/services/header.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.scss']
})
export class BuscarComponent implements OnInit{
  headerService = inject(HeaderService);
  ngOnInit(): void {
    this.headerService.titulo.set("Buscar");
  }
}
