import { QaChatResponse } from './mefia-chat.response';

export interface MessageQaChat {
    text?: string;
    isGpt: boolean;
    info?: QaChatResponse;
}
