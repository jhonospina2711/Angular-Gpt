import { WorkSheet, WorkBook } from './../../../../../../../node_modules/xlsx/types/index.d';

import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ChatMessageComponent, MyMessageComponent, TextMessageBoxComponent, TextMessageBoxFileComponent, TextMessageBoxSelectComponent, TypingLoaderComponent } from '@components/index';
import { CasoDePrueba, MessageDeckTest } from '@interfaces/index';
import { OpenAiService } from '@services/openai.service';
import { CommonModule } from '@angular/common';
import { GptMessageGetDeckTestsComponent } from '@components/gptMessageGetDeckTests/gptMessageGetDeckTests.component';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-set-deck-tests-page',
  standalone: true,
  imports: [
    CommonModule,
    ChatMessageComponent,
    MyMessageComponent,
    GptMessageGetDeckTestsComponent,
    TypingLoaderComponent,
    TextMessageBoxComponent,
    TextMessageBoxFileComponent,
    TextMessageBoxSelectComponent
  ],
  templateUrl: './setDeckTestsPage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SetDeckTestsPageComponent {

  public messages       = signal<MessageDeckTest[]>([]);
  public isLoading      = signal(false);
  public OpenAiService  = inject( OpenAiService);
  public DataExcel: CasoDePrueba[] = [];

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
      this.DataExcel = resp.Casos_de_Prueba;
      console.log('Respuesta de OpenAI:', resp?.Casos_de_Prueba);
      this.isLoading.set(false);
      this.messages.update( prev => [
        ...prev,
        {
          isGpt: true,
          text: 'Generando el set de pruebas: ',
          info: resp
        }
      ])
    })
 }

 trackByText(index: number, message: any): string {
  return message.text;
  }

  exportToExcel() {

    const WorkSheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.DataExcel)
    const WorkBook: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(WorkBook, WorkSheet, 'SetDePruebas');

    XLSX.writeFile(WorkBook, 'SetDePruebas_BPIA.xlsx');
  }

  hasDataExcel(): boolean {
    return Array.isArray(this.DataExcel) && this.DataExcel.length > 0;
  }
}
