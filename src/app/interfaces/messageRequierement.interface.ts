


export interface MessageRequierement {
  text?: string;
  isGpt: boolean;
  info?: {
    Necesidad_Nro: number;
    Actividad: string;
    Criterios_de_Aceptacion: string[];
  }
}
