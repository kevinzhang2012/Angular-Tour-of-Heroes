import 'rxjs/add/operator/switchMap';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { HeroService } from './hero.service';
import { Hero } from './hero';

@Component ({
  moduleId: module.id,
  selector: 'my-hero-detail',
  templateUrl: `hero-detail.component.html`,
})

export class HeroDetailComponent implements OnInit {
  constructor(
  private heroService: HeroService,
  private route: ActivatedRoute,
  private location: Location
) {}

ngOnInit(): void {
  this.route.params
    .switchMap((params: Params) => this.heroService.getHero(+params['id']))
    .subscribe(hero => this.hero = hero);
}

goBack(): void {
  this.location.back();
}

  @Input() // '目标属性'必须前置@Input()方可与源属性绑定
  hero:Hero;
}
