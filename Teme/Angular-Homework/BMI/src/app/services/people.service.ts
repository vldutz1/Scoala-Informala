import { getNumberOfCurrencyDigits } from '@angular/common';
import { Injectable } from '@angular/core';
import { People } from '../models/people.model';

@Injectable({
  providedIn: 'root',
})
export class PeopleService implements People{
  constructor() {}
  id: number = 1;
  name: string = "Mircea";
  weight: number = 90;
  height: number = 100;
  gender: string = "M";
  // bmi: number = this.weight;
  bmi: number = (this.weight / (this.height * this.height));

  getAllPeople(): People[] {
    if (this.weight > 0){

    }
    return [
      {
        id: 1,
        name: 'Johnny Cage',
        weight: 90,
        height: 170,
        gender: 'M',
        bmi: this.bmi,
      },
      {
        id: 2,
        name: 'Elon Musk',
        weight: 100,
        height: 175,
        gender: 'M',
        bmi: this.bmi,
      },
      {
        id: 3,
        name: 'Donald Trump',
        weight: 110,
        height: 185,
        gender: 'M',
        bmi: this.bmi,
      },
      {
        id: 4,
        name: 'Elena Udrea',
        weight: 70,
        height: 165,
        gender: 'F',
        bmi: this.bmi,
      },
    ];
  }
}
