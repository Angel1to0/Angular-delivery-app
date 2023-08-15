import { Component, OnInit, inject } from '@angular/core';
import { HeaderService } from 'src/app/core/services/header.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit{
  headerService = inject(HeaderService);
  
  ngOnInit(): void {
    this.headerService.titulo.set("Perfil");
  }

}
