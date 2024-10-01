

export interface MessageDeckTest {
  text: string;
  isGpt: boolean;
  info?: {
    titulo: string;
    descripcionCasoPrueba: string;
    preRequisitos: string;
    descripcionPasosPrueba: string;
    resultado: string;
  }
}
