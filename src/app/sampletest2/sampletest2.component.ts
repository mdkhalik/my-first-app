import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, ValidatorFn, AbstractControl } from '@angular/forms';

export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const forbidden = nameRe.test(control.value);
    return forbidden ? {forbiddenName: {value: control.value}} : null;
  };
}
@Component({
  selector: 'app-sampletest2',
  templateUrl: './sampletest2.component.html',
  styleUrls: ['./sampletest2.component.css']
})
export class Sampletest2Component implements OnInit {
  heroForm: any;
  hero: any;

  constructor() { }

  ngOnInit(): void {
    this.heroForm = new FormGroup({
      name: new FormControl(this.hero.name, [
        Validators.required,
        Validators.minLength(4),
        forbiddenNameValidator(/bob/i) // <-- Here's how you pass in the custom validator.
      ]),
      alterEgo: new FormControl(this.hero.alterEgo),
      power: new FormControl(this.hero.power, Validators.required)
    });

  }

  /** A hero's name can't match the given regular expression */


  get name() { return this.heroForm.get('name'); }

  get power() { return this.heroForm.get('power'); }

}
