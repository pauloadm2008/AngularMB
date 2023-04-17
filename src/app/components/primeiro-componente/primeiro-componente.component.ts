import { Component } from '@angular/core';

@Component({
  selector: 'app-primeiro-componente',
  templateUrl: './primeiro-componente.component.html',
  styleUrls: ['./primeiro-componente.component.scss']
})
export class PrimeiroComponenteComponent {
name: string = "Paulo";
age: number = 39;
job = "Programador";
Hobbies = ["correr", "jogar", "nadar"];
carro = {
  nome: "HRV",
  Ano: 2023,
  Cor: "prata",
};
}
