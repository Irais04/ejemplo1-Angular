import { Pipe, PipeTransform } from '@angular/core';
import { IProducto } from './producto';

@Pipe({
  name: 'productoFiltro'
})
export class ProductoFiltroPipe implements PipeTransform {

  //MANDA A LLAMAR LOS VALORES DE IPRODUCTO
  
  transform(value: IProducto[], args: string): IProducto[] {

    let filter:string=args ? args.toLocaleLowerCase():'';

    //TOMA EL FILTRO Y LO COMPARA CON LA LISTA QUE ESTA EN IPRODUCTO Y SI ES IGUAL MUESTRA EL FILTRO
    //SI NO ES LO MISMO MANDA UN -1

    return filter ? value.filter((product:IProducto)=>
    product.Modelo.toLocaleLowerCase().indexOf(filter)!= -1

    ):value;
  }

}
