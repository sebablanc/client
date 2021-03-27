import { IPersonaSend } from "src/app/services/persona/personaService.interface";

export interface PersonaResponse {
    exito: boolean;
    messages: Array<string>;
    personas: Array<IPersonaSend>;
}
