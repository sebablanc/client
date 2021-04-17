import { INovedadSend } from "src/app/services/novedad/novedadService.interface";

export interface NovedadResponse {
    exito: boolean;
    messages: Array<string>;
    personas: Array<INovedadSend>;
}