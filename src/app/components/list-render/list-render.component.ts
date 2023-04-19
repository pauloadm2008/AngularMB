import { Component } from '@angular/core';
import { Animal } from 'src/app/Animal';
import { ListService } from 'src/app/services/list.service';
@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.scss']
})
export class ListRenderComponent {

  Animals: Animal[] = [];

animalsDetails = ''

constructor(private listService: ListService) {
  this.getAnimals()
}

showAge(Animal: Animal) {
this.animalsDetails = `O pet ${Animal.name} tem ${Animal.age} anos!`;
}

removeAnimal(animal: Animal) {
  console.log("Removendo animal..");
  this.Animals = this.listService.remove(this.Animals, animal);
}

getAnimals(): void {
  this.listService.getAll().subscribe((animals) => (this.Animals = animals))
}

}
