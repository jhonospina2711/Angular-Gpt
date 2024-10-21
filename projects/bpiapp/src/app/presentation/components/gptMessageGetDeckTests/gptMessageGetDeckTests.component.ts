import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CasoDePrueba } from '@interfaces/index';

@Component({
  selector: 'app-gpt-message-get-deck-tests',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './gptMessageGetDeckTests.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GptMessageGetDeckTestsComponent {
  @Input({required: true}) Necesidad_Nro!: number;
  @Input({required: true}) Casos_de_Prueba: CasoDePrueba[] = [];
}
