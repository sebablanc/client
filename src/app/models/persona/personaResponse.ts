import { Persona } from "./persona";

export interface PersonaResponse {
    exito: boolean;
    messages: Array<string>;
    localidades: Array<Persona>;
}
