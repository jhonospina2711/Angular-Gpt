

export interface MessageDeckTest {
  text: string;
  isGpt: boolean;
  info?: {
    titulo: number;
    descripcionCasoPrueba: string;
    preRequisitos: string;
    descripcionPasosPrueba: string;
    resultado: string;
  }
}
