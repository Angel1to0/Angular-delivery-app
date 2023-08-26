import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TarjetaCategoriaComponent } from 'src/app/core/components/tarjeta-categoria/tarjeta-categoria.component';
import { Categoria } from 'src/app/core/interfaces/categorias';
import { CategoriasService } from 'src/app/core/services/categorias.service';
import { HeaderService } from 'src/app/core/services/header.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone:true,
  imports: [TarjetaCategoriaComponent,CommonModule, RouterModule]
})
export class HomeComponent implements OnInit, OnDestroy{
  headerService = inject(HeaderService); //con esto conectamos el servicio del header al componente Home, aunque no tengan nada que ver, el servicio del header permite manipular el valor del mismo, creando asi un header dinamico
  categoriasService = inject(CategoriasService); //inyecte el servicio de categorias
  categorias:Categoria[] = []; //variable para guardar las categorias de los productos

  ngOnInit(): void {
    this.headerService.titulo.set("Home") //Esto permite que se cambie el valor de la variable titulo que esta en el servicio del header, accedemos a ella mediante la variable headerService
    this.headerService.extendido.set(true);
    this.categoriasService.getAll().then(res => this.categorias = res);
  }

  ngOnDestroy(): void {
    this.headerService.extendido.set(false);
  }
}
