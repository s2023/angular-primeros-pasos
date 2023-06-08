import { Injectable } from '@angular/core';
import { v4 as uuid } from "uuid";

import { Character } from '../interfaces/character.interface';



@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 3000
  },{
    id: uuid(),
    name: 'Goku',
    power: 16000
  },{
    id: uuid(),
    name: 'Vegeta',
    power: 15000
  },{
    id: uuid(),
    name: 'Piccolo',
    power: 8000
  },{
    id: uuid(),
    name: 'Majin Boo',
    power: 50000
  }];


  addCharacter( character: Character ): void {

    const addNewCharacter: Character = { id: uuid(), ...character }

    this.characters.push(addNewCharacter);

  }

/*   deleteCharacter(index: number ):void {
    this.characters.splice(index,1);
  } */

  deleteCharacterById(id: string ) {
    this.characters = this.characters.filter( character => character.id !== id );
  }

}
