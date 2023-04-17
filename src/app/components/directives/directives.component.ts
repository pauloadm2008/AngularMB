import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent {
  size = 40;
  font = "Arial";
  color = "red";

  classes = ['tipo1',];

  classe2 = "classe2"
}
