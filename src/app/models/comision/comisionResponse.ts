import { IComisionSend } from "src/app/services/comision/comisionService.interface";

export interface ComisionResponse {
    exito: boolean;
    messages: Array<string>;
    comisiones: Array<IComisionSend>;
}
