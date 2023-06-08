import { Component, EventEmitter, Output } from '@angular/core';

import { Character } from '../../interfaces/character.interface';



@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  public characterInput: Character = {
    name: '',
    power: 0
  }

  //Evento emisor nuevo personaje
  @Output()
  emitNewCharacter: EventEmitter<Character> = new EventEmitter();

  onNewCharacter(): void{

    console.log(this.characterInput);
    if ( this.characterInput.name.length === 0 ) return;

    this.emitNewCharacter.emit( this.characterInput )

    this.characterInput = { name: '', power: 0 };

  }

}
