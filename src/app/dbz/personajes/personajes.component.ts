import { Component} from '@angular/core';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent {

  // @Input('data') personajes: Personaje[] =[];

  get Personaje(){
   return this.DbzService.personajes; 
  }

  constructor(private DbzService:DbzService){}
}
