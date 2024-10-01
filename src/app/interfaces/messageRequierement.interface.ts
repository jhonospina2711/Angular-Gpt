


export interface MessageRequierement {
  text: string;
  isGpt: boolean;
  info?: {
    necesidadNro: number;
    actividad: string;
    criteriosAceptacion: string[];
  }
}
