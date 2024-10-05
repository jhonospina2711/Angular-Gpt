import { Injectable } from '@angular/core';
import { deckTestUseCase, orthographyUseCase, prosConsStreamUseCase, prosConsUseCase, requiarementStreamUseCase, requierementUseCase } from '@use-cases/index';
import { from } from 'rxjs';

@Injectable({providedIn: 'root'})
export class OpenAiService {

  checkOrthography( prompt: string){
    return from (orthographyUseCase(prompt));
  }

  checkRequierement( prompt: string ){
    return from (requierementUseCase(prompt));
  }

  checkDeckTest( prompt: string ){
    return from (deckTestUseCase(prompt));
  }

  prosConsDiscusser( prompt: string ) {
    return from( prosConsUseCase(prompt) );
  }

  prosConsStreamDiscusser( prompt: string, abortSignal: AbortSignal ) {
    return prosConsStreamUseCase(prompt, abortSignal );
  }

}
