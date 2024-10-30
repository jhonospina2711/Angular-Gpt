


export interface MessageRequierement {
  text?: string | null | undefined;
  isGpt: boolean;
  info?: {
    Necesidad_Nro: number;
    Actividad: string;
    Criterios_de_Aceptacion: string[];
  }
}
