import { Persona } from "./persona";

export interface PersonaResponse {
    exito: boolean;
    messages: Array<string>;
    personas: Array<Persona>;
}
