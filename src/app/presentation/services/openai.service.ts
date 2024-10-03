import { Injectable } from '@angular/core';
import { deckTestUseCase, orthographyUseCase, requiarementStreamUseCase, requierementUseCase } from '@use-cases/index';
import { from } from 'rxjs';

@Injectable({providedIn: 'root'})
export class OpenAiService {

  checkOrthography( prompt: string){
    return from (orthographyUseCase(prompt));
  }

  checkRequierement( prompt: string ){
    return from (requierementUseCase(prompt));
  }

  checkRequierementStream( prompt: string ){
    return from (requiarementStreamUseCase(prompt));
  }

  checkDeckTest( prompt: string ){
    return from (deckTestUseCase(prompt));
  }

}
