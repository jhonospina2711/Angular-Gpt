import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { GptMessageGetRequierementComponent } from '@components/chat-bubbles/gptMessageGetRequierement/gptMessageGetRequierement.component';
import { ChatMessageComponent, MyMessageComponent, TextMessageBoxComponent, TextMessageBoxFileComponent, TextMessageBoxSelectComponent, TextMessageEvent, TypingLoaderComponent } from '@components/index';
import { MessageRequierement } from '@interfaces/messageRequierement.interface';
import { OpenAiService } from 'app/presentation/services/openai.service';

@Component({
  selector: 'app-get-requiarements-page',
  standalone: true,
  imports: [
    CommonModule,
    ChatMessageComponent,
    GptMessageGetRequierementComponent,
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

  async handleMessage( prompt: string ) {

    await this.OpenAiService.checkRequierementStream( prompt );
    

  }

  // handleMessage( prompt: string ) {
  //   this.isLoading.set(true);

  //   this.messages.update( (prev) => [
  //     ...prev,
  //     {
  //       isGpt: false,
  //       text: prompt
  //     }
  //   ]);

  //   this.OpenAiService.checkRequierement( prompt )
  //   .subscribe( resp => {
  //     console.log(resp);
  //     this.isLoading.set(false);
  //     this.messages.update( prev => [
  //       ...prev,
  //       {
  //         isGpt: true,
  //         info: resp,
  //       }
  //     ])
  //   })
  // }
 }
