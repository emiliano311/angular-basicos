import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  porDef: Personaje = {
    nombre: 'Maestro',
    poder: 1000
  }
 

  constructor(){}

}
