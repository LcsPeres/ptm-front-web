import { ColumnEnum } from "./enums/columns.enum";
import { GravidadeEnum } from "./enums/gravidade.enum";
import { TendenciaEnum } from "./enums/tendencia.enum";
import { UrgenciaEnum } from "./enums/urgencia.enum";

export class TaskModel {

    constructor(item?: any) {
        if (item) {
            if (item.id) this.id = item.id;
            if (item.title) this.title = item.title;
            if (item.description) this.description = item.description;
            if (item.gravidade) this.gravidade = item.gravidade as GravidadeEnum;
            if (item.urgencia) this.urgencia = item.urgencia as UrgenciaEnum;
            if (item.tendencia) this.tendencia = item.tendencia as TendenciaEnum;
            if (item.deadline) {
                this.deadline = this.createDate(item.deadline);
                this.color = this.defineColorByDeadline(this.deadline);
            }
            if (item.column) this.column = item.column;

            return;
        }

        this.deadline = new Date();
        this.color = this.defineColorByDeadline(this.deadline);
    }

    // user inputs
    id: string = "";
    title: string = "";
    description: string = "";
    deadline!: Date;
    column: ColumnEnum = ColumnEnum.BACKLOG;

    gravidade: GravidadeEnum = GravidadeEnum.SEM_GRAVIDADE;
    urgencia: UrgenciaEnum = UrgenciaEnum.PODE_ESPERAR;
    tendencia: TendenciaEnum = TendenciaEnum.NAO_IRA_MUDAR;

    creator: string = '';

    // model control
    color: string = "white";

    defineColorByDeadline(deadline: Date): string {
        let diffDays = +((deadline.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)).toFixed(0);

        if (diffDays >= 2) return 'red';
        if (diffDays >= 4) return 'yellow';

        return 'white';
    }

    createDate(date: string): Date {
        let items = date.split('-');

        return new Date(+items[0], +items[1] - 1, +(items[2].substring(0, items[2].indexOf('T'))));
    }

}