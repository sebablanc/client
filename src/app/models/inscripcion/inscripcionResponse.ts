import { IInscripcionSend } from "../../services/inscripcion/inscripcionService.interface";

export interface InscripcionResponse {
    exito: boolean;
    messages: Array<string>;
    inscripciones: Array<IInscripcionSend>;
}
