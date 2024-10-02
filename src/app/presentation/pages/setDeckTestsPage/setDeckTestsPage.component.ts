import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ChatMessageComponent, MyMessageComponent, TextMessageBoxComponent, TextMessageBoxFileComponent, TextMessageBoxSelectComponent, TypingLoaderComponent } from '@components/index';
import { MessageDeckTest } from '@interfaces/index';
import { OpenAiService } from 'app/presentation/services/openai.service';


@Component({
  selector: 'app-set-deck-tests-page',
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
  templateUrl: './setDeckTestsPage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SetDeckTestsPageComponent {

  public messages = signal<MessageDeckTest[]>([]);
  public isLoading = signal(false);
  public OpenAiService = inject( OpenAiService)

  handleMessage( prompt: string ) {
    this.isLoading.set(true);

    this.messages.update( (prev) => [
      ...prev,
      {
        isGpt: false,
        text: prompt
      }
    ]);

    this.OpenAiService.checkDeckTest( prompt )
    .subscribe( resp => {
      console.log(resp);
      // this.isLoading.set(false);
      // this.messages.update( prev => [
      //   ...prev,
      //   {
      //     isGpt: true,
      //     text: resp.message,
      //     info: resp,
      //   }
      // ])
    })
 }
}
