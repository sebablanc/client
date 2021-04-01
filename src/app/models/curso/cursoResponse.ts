import { ICursoSend } from "src/app/services/curso/cursoService.interface";

export interface CursoResponse {
    exito: boolean;
    messages: Array<string>;
    cursos: Array<ICursoSend>;
}
