import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ChatMessageComponent, MyMessageComponent, TextMessageBoxComponent, TextMessageBoxEvent, TextMessageBoxFileComponent, TextMessageBoxSelectComponent, TextMessageEvent, TypingLoaderComponent } from '@components/index';
import { Message } from '@interfaces/message.interfaces';
import { OpenAiService } from '../../services/openai.service';


@Component({
  selector: 'app-orthography-page',
  standalone: true,
  imports: [
    CommonModule,
    ChatMessageComponent,
    MyMessageComponent,
    TypingLoaderComponent,
    TextMessageBoxComponent,
    TextMessageBoxFileComponent,
    TextMessageBoxSelectComponent,
  ],
  templateUrl: './orthographyPage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class OrthographyPageComponent {

  public messages = signal<Message[]>([ {text: 'Hola Mundo', isGpt: false }]);
  public isLoading = signal(false);
  public OpenAiService = inject( OpenAiService)

  handleMessage( prompt: string ) {
    console.log({prompt});
  }

  handleMessageWithFile( {prompt, file}: TextMessageEvent ) {
    console.log({prompt, file});
  }

  handleMessageWithSelect( event: TextMessageBoxEvent) {
    console.log({event});
  }
}
