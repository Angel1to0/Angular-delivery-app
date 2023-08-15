import { Component, OnInit, inject } from '@angular/core';
import { HeaderService } from 'src/app/core/services/header.service';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.scss']
})
export class ArticuloComponent implements OnInit{
  headerService = inject(HeaderService);

  ngOnInit(): void {
    this.headerService.titulo.set("Articulo");
  }
}
