import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  templateUrl: './cinepolis.component.html',
  styleUrls: ['./cinepolis.component.css']
})
export class CinepolisComponent implements OnInit {

  constructor() { }

  name: string[]=[]; 
  Compradores: number=0;
  numBoletos: number=0;
  tarjeta: boolean = false;
  descuento : number=0;
  precioBoletos : number = 12;
  error:boolean=false;
  ticket: boolean=false;
  descuento2: number=0;

  total : number = 0;

  ngOnInit(): void {
  }
 
  tarjetaResult(result: boolean): void {
    this.tarjeta = result;
  }

  comprar(): void {
    this.descuento = 0;
    
    if (this.numBoletos > 5) {
      this.descuento = 15;
    }else if(this.numBoletos >= 3 && this.numBoletos <= 5){
      this.descuento = 10;
    }else{
      this.descuento = 0;
    }

    if(this.tarjeta){
      this.descuento2 = 0.90;
    }


  
    if (this.numBoletos < (this.Compradores * 8)) {
      this.total = this.precioBoletos * this.numBoletos
      this.error =false;

      this.ticket= true;


      if (this.descuento != 0) {
        this.descuento /= 100 ;
        this.descuento *= this.total ;
        this.total -=  this.descuento;
        
      }
      if(this.descuento2!=0){
        this.total= this.total * this.descuento2;
      }

 


    }else{
      
      this.error =true;
      this.ticket= false;
      
    }

    
  }

}
