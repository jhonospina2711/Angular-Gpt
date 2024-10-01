import { RequierementResponse } from "@interfaces/index";
import { environment } from "environments/environment";



export const requierementUseCase = async ( prompt: string ) => {

  try {

    const resp = await fetch(`${ environment.backendApi }/demotestingai`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({prompt})
    });

    if (!resp.ok) throw new Error('No se logro obtener los requerimientos');

    const data = await resp.json() as RequierementResponse

  } catch (error) {
    console.log(error);
    return {
      ok: false,
      necesidadNro: 0,
      actividad: 'No se encontro información',
      criteriosAceptacion: 'No se encontro información'
    }
  }
}
