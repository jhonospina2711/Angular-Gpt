import { environment } from "@enviroments/environment";
import { RequierementResponse } from "@interfaces/index";


export const requierementUseCase = async ( prompt: string ) => {

  try {

    const resp = await fetch(`${ environment.backendApi }/requierement`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({prompt})
    });

    if (!resp.ok) throw new Error('No se logro obtener los requerimientos');

    const data = await resp.json() as RequierementResponse
    console.log('Esta es la data:', data);

    return {
      ok: true,
      ...data,
    }

  } catch (error) {
    console.log(error);
    return {
      ok: false,
      Necesidad_Nro: 0,
      Actividad: 'No se encontro información',
      Criterios_de_Aceptacion: [],
    }
  }
}
