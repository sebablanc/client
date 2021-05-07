import { IPremioSend } from "src/app/services/premio/premioService.interface";

export interface PremioResponse {
    exito: boolean;
    messages: Array<string>;
    premios: Array<IPremioSend>;
}