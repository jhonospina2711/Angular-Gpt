import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-gpt-message-get-requierement',
  standalone: true,
  imports: [
  ],
  templateUrl: './gptMessageGetRequierement.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GptMessageGetRequierementComponent {
  @Input({required: true}) Necesidad_Nro!: number;
  @Input({required: true}) Actividad!: string;
  @Input({required: true}) Criterios_de_Aceptacion: string[] = [];
}
