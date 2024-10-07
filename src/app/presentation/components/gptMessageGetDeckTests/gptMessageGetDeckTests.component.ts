import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-gpt-message-get-deck-tests',
  standalone: true,
  imports: [
  ],
  templateUrl: './gptMessageGetDeckTests.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GptMessageGetDeckTestsComponent {
  @Input({required: true}) titulo!: number;
  @Input({required: true}) descripcionCasoPrueba!: string;
  @Input({required: true}) preRequisitos!: string;
  @Input({required: true}) descripcionPasosPrueba: string[] = [];
  @Input({required: true}) resultado!: string;
}
