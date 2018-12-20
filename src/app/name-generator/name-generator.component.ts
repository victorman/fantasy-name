import { Component, OnInit } from '@angular/core';
import { Names } from '../shared/names.model';

@Component({
  selector: 'app-name-generator',
  templateUrl: './name-generator.component.html',
  styleUrls: ['./name-generator.component.css']
})
export class NameGeneratorComponent implements OnInit {

  private firstValue: string;
  private lastValue: string;
  firstNames: string[]  = [];
  lastNames: string[] = [];
  useMaleFirstNames: any = true;
  useMaleLastNames: any = true;
  useFemaleFirstNames: any = false;
  useFemaleLastNames: any = false;
  useNeutralLastNames: any = true;

  constructor() {
  }

  ngOnInit() {
    this.onClick();
  }

  onClick() {
    this.firstNames = [];
    this.lastNames = [];
    if (this.useMaleFirstNames) {
      this.firstNames = this.firstNames.concat(Names.maleFirstNames);
    }
    if (this.useFemaleFirstNames) {
      this.firstNames = this.firstNames.concat(Names.femaleFirstNames);
    }

    if (this.useMaleLastNames) {
      this.lastNames = this.lastNames.concat(Names.maleLastNames);
    }
    if (this.useFemaleLastNames) {
      this.lastNames = this.lastNames.concat(Names.femaleLastNames);
    }
    if (this.useNeutralLastNames) {
      this.lastNames = this.lastNames.concat(Names.neutralLastNames);
    }
    let nfirst = Math.floor(Math.random() * this.firstNames.length );
    let nlast = Math.floor(Math.random() * this.lastNames.length);
    // console.log(this.firstNames.length);
    // console.log(n);
    this.firstValue = this.firstNames[nfirst];
    this.lastValue = this.lastNames[nlast];
  }

  getFirstName() {
    return this.firstValue;
  }

  getLastName() {
    return this.lastValue;
  }
  getName() {
    return this.getFirstName() + ' ' + this.getLastName();
  }

  isInvalid(current: boolean) {
    return (
      !((this.useMaleFirstNames || this.useFemaleFirstNames)
      && (this.useNeutralLastNames || this.useFemaleLastNames || this.useMaleLastNames))
      && current
    );
  }

  isValid(current: boolean) {
    return (
      (this.useMaleFirstNames || this.useFemaleFirstNames)
      && (this.useNeutralLastNames || this.useFemaleLastNames || this.useMaleLastNames)
      && current
    );
  }
}
