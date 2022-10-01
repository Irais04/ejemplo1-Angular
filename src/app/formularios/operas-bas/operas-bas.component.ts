import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-operas-bas',
  templateUrl: './operas-bas.component.html',
  styleUrls: ['./operas-bas.component.css']
})
export class OperasBasComponent implements OnInit {

  num1='';
  //num2='';
  resultado:number=0;
  print="";
  text: string[]=[]



  showTabla(){
    let num1:number=parseInt(this.num1);
    let text:string[]=[];
    for (let i =1; i<=10; i++) {
      this.resultado= num1 *i;
      text.push (i + "x" + this.num1 + "=" + this.resultado );
    } this.text= text;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
