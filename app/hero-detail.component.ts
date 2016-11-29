import { Component, Input } from '@angular/core';
import { Hero } from './hero';

@Component ({
  selector: 'my-hero-detail',
  template: `
  <div *ngIf="hero"> <!-- Disable HTML block at DOM when 'hero' object is empty -->
    <h2>{{hero.name}} details</h2>
    <div><label>id: </label>{{hero.id}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="hero.name" placeholder="name"> <!-- Two way data binding -->
    </div>
  </div>
  `,
})

export class HeroDetailComponent {
  @Input() // '目标属性'必须前置@Input()方可与源属性绑定
  hero:Hero;
}
