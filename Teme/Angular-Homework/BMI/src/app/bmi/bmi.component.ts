import { Component } from '@angular/core';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css']
})
export class BmiComponent {

  isColorRed: boolean = false;
  highlightColor: string = '';
  defaultColor: string = '';

}
