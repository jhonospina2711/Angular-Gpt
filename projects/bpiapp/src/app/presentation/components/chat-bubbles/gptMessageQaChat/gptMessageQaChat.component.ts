import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-gpt-message-qa-chat',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './gptMessageQaChat.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GptMessageQaChatComponent {
    @Input({ required: true }) answer!: string;
    @Input() sources: string[] = [];
    @Input() model: string = '';
    @Input() indexed_pages: number = 0;
}
