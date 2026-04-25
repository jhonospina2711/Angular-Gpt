import { environment } from '@enviroments/environment';
import { QaChatResponse } from '@interfaces/mefia-chat.response';

export const qaChatUseCase = async (question: string): Promise<{ ok: boolean } & QaChatResponse> => {
    try {
        const resp = await fetch(`${environment.backendApi}/mefia-chat`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ question }),
        });

        if (!resp.ok) throw new Error('No se pudo obtener respuesta del agente Q&A');

        const data = await resp.json() as QaChatResponse;

        return { ok: true, ...data };
    } catch (error) {
        console.error(error);
        return {
            ok: false,
            answer: 'No se pudo obtener respuesta del agente Q&A',
            sources: [],
            model: '',
            indexed_pages: 0,
        };
    }
};
