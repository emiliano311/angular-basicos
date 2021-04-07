import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent  {

 heroes:string[] = ['SpiderMan','Iroman','Hulk','Thor'];
 heroborrado:string="";
 borrarHeroe(){
  this.heroborrado=this.heroes.shift() || '';
  

 }
}
