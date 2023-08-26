import { Producto } from "./productos";

export interface Categoria{
    id:number,
    nombre: string,
    fotoUrl:string,
    productos: Producto[] ///productos tiene adentro mucho productos, por eso es un array de productos
}