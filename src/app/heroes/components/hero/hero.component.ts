import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'thor';
  public age: number = 1000;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `Nombre: ${ this.name } - Edad: ${ this.age }`;
  }

  changeNameHero(): void{
    this.name = 'Spiderman';
  }

  changeAgeHero() {
    this.age = 25;
  }

  resetForm():void {
    this.name = 'thor';
    this.age = 1000;

    // document.querySelectorAll('h1')!.forEach( element => {
    //   element.innerHTML = '<h1>Desde Angular</h1>';
    // });
  }

}
