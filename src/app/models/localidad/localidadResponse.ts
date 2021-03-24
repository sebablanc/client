import { Localidad } from "./localidad";

export interface LocalidadResponse {
    exito: boolean;
    messages: Array<string>;
    localidades: Array<Localidad>;
}
