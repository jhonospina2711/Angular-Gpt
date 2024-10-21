
import { environment } from "@enviroments/environment";
import { DeckTestResponse, RequierementResponse } from "@interfaces/index";





export const deckTestUseCase = async ( prompt: string ) => {

  try {
    console.log('PASO 1: ', prompt);
    const resp = await fetch(`${ environment.backendApi }/decktest`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ prompt })
    });

    if (!resp.ok) throw new Error('No se obtuvo respuesta de OpenAI');

    const data = await resp.json() as DeckTestResponse

    console.log('PASO 2: ', data);

    return {
      ok: true,
      ...data,
    }

  } catch (error) {
    console.log(error);
    return {
      ok: false,
      Necesidad_Nro: 0,
      Casos_de_Prueba: []
    }
  }
}
