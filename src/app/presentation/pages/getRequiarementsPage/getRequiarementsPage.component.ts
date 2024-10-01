import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ChatMessageComponent, MyMessageComponent, TextMessageBoxComponent, TextMessageBoxFileComponent, TextMessageBoxSelectComponent, TextMessageEvent, TypingLoaderComponent } from '@components/index';
import { MessageRequierement } from '@interfaces/messageRequierement.interface';
import { OpenAiService } from 'app/presentation/services/openai.service';

@Component({
  selector: 'app-get-requiarements-page',
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
  templateUrl: './getRequiarementsPage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class GetRequiarementsPageComponent {


  public messages = signal<MessageRequierement[]>([]);
  public isLoading = signal(false);
  public OpenAiService = inject( OpenAiService)

   handleMessageWithFile( {prompt, file}: TextMessageEvent ) {
    console.log({prompt, file});
  }
 }
