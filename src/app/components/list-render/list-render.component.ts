import { Component } from '@angular/core';
import { Animal } from 'src/app/Animal';
@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.scss']
})
export class ListRenderComponent {

  Animals: Animal[] = [
    {name:'mag',type:'cachorro', age:7},
    {name:'tequila',type:'gato', age:10},
    {name:'xuxa',type:'passaro', age:15},
    {name:'bob',type:'cavalo', age:20}
  ]

animalsDetails = ''

showAge(Animal: Animal) {
this.animalsDetails = `O pet ${Animal.name} tem ${Animal.age} anos!`;
}

}
