import { Component } from '@angular/core';
import { People } from '../models/people.model';
import { PeopleService } from '../services/people.service';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css']
})
export class BmiComponent {

  constructor(private peopleService: PeopleService) {}

  isColorRed: boolean = false;
  highlightColor: string = '';
  defaultColor: string = '';
  peoples: People[] = [];
  loadAllPeople() {
    this.peoples = this.peopleService.getAllPeople();
  }
}
