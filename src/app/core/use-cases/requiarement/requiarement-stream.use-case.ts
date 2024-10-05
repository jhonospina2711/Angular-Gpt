import { RequierementResponse } from "@interfaces/requierement.response";
import { environment } from "environments/environment.development";


export async function* requiarementStreamUseCase( prompt: string ) {
  try {

    const resp = await fetch(`${ environment.backendApi }/requierement`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({prompt})
    });

    if (!resp.ok) throw new Error('No se logro obtener los requerimientos');

    const reader = resp.body?.getReader();
    if ( !reader ) {
      console.log('No se puedo generar el reader');
      throw new Error('No se puedo generar el reader')
    }

    const decoder = new TextDecoder();
    let text = '';

    while(true){
      const { value, done } = await reader.read();

      if ( done ){
        break;
      }
    const decodedChunk = decoder.decode( value, { stream: true });
    text += decodedChunk;
    yield text
    }

    return text;
  } catch (error) {
    return null;
  }

}
