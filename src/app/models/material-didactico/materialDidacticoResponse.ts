import { IMaterialDidacticoSend } from "src/app/services/pdf/materialDidactico.interface";

export interface MaterialDidacticoResponse {
    exito: boolean;
    messages: Array<string>;
    cursoArchivos: Array<IMaterialDidacticoSend>;
}
