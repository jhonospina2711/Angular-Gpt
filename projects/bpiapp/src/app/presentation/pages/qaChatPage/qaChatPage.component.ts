import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    ChatMessageComponent,
    MyMessageComponent,
    TextMessageBoxComponent,
    TypingLoaderComponent,
} from '@components/index';
import { GptMessageQaChatComponent } from '@components/chat-bubbles/gptMessageQaChat/gptMessageQaChat.component';
import { MessageQaChat } from '@interfaces/message-mefia-chat.interface';
import { OpenAiService } from '@services/openai.service';

@Component({
    selector: 'app-qa-chat-page',
    standalone: true,
    imports: [
        CommonModule,
        ChatMessageComponent,
        MyMessageComponent,
        GptMessageQaChatComponent,
        TypingLoaderComponent,
        TextMessageBoxComponent,
    ],
    templateUrl: './qaChatPage.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class QaChatPageComponent {
    public messages = signal<MessageQaChat[]>([]);
    public isLoading = signal(false);
    public errorMessage = signal<string | null>(null);

    private openAiService = inject(OpenAiService);

    handleMessage(prompt: string) {
        if (prompt.trim().length < 3) return;

        this.errorMessage.set(null);
        this.isLoading.set(true);

        this.messages.update((prev) => [...prev, { isGpt: false, text: prompt }]);

        this.openAiService.qaChat(prompt).subscribe((resp) => {
            this.isLoading.set(false);
            if (!resp.ok) {
                this.errorMessage.set(resp.answer);
                return;
            }
            this.messages.update((prev) => [...prev, { isGpt: true, info: resp }]);
        });
    }
}
