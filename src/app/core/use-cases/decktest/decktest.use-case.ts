import { DeckTestResponse, RequierementResponse } from "@interfaces/index";
import { environment } from "environments/environment";



export const deckTestUseCase = async ( prompt: string ) => {

  try {

    const resp = await fetch(`${ environment.backendApi }/decktest`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({prompt})
    });

    if (!resp.ok) throw new Error('No se obtuvo respuesta de OpenAI');

    const data = await resp.json() as DeckTestResponse

    return {
      ok: true,
      ...data,
    }

  } catch (error) {
    console.log(error);
    return {
      ok: false,
      titulo: 'null',
      descripcionCasoPrueba: 'null' ,
      preRequisitos: 'null',
      descripcionPasosPrueba: 'null',
      resultado: 'null',
    }
  }
}
