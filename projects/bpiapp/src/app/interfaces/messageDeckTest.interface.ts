import { CasoDePrueba } from "./casoDePrueba";


export interface MessageDeckTest {
  text: string;
  isGpt: boolean;
  info?: {
    Necesidad_Nro: number;
    Casos_de_Prueba: CasoDePrueba[];
  }
}
