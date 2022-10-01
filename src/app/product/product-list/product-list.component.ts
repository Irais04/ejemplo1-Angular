import { Component, OnInit } from '@angular/core';
import { IProducto } from '../producto';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  imageWidth:number=50;
  imageMargin:number=2;
  muestraImg:boolean=true;
  listFilter:string='';

  constructor(){}

  //INTERCAMBIAR ENTRE TRUE Y FALSE PARA LAS IMAGENES
  showImage():void{
    this.muestraImg =! this.muestraImg;
  }


  ngOnInit(): void {

  }


//IProducto ES LA REFERENCIA A LA VARIABLE DE producto.ts
  productos:IProducto[]=[
    {
      "productoId":1,
      "Modelo":'Sentra',
      "Descripcion":"4 Puertas familiares",
      "year":"Febrero 3 2020",
      "Precio": 120000,
      "Marca": "NISSAN",
      "Color": "Morado",
      "ImagenUrl": "https://www.nissan-chihuahua.com/sentra/img/s-rojo-merlot.jpg"
    },
    {
      "productoId":2,
      "Modelo":'A4',
      "Descripcion":"4 Puertas familiares",
      "year":"Febrero 3 2020",
      "Precio": 130000,
      "Marca": "AUDI",
      "Color": "Gris",
      "ImagenUrl": "https://s2.abcstatics.com/media/motor/2016/08/19/1-audi-kT8E--620x349@abc.jpg"
    },
    {
      "productoId":3,
      "Modelo":'A4',
      "Descripcion":"4 Puertas familiares",
      "year":"Febrero 3 2020",
      "Precio": 120000,
      "Marca": "KIA",
      "Color": "Azul",
      "ImagenUrl": "https://motor.elpais.com/wp-content/uploads/2021/12/NUEVOKIARIO-CALIDADALTA_001.jpg"
    }
  ]
}
