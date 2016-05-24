import { Pipe, PipeTransform } from '@angular/core';
import { ISession } from '../session.model';

@Pipe({
    name: 'sessionFilter'
})

export class SessionFilterPipe implements PipeTransform {
    transform(value: ISession[], filter: string): ISession[] {
        filter = filter ? filter.toLocaleLowerCase() : null;
        return filter ? value.filter((session: ISession) =>
            session.name.toLocaleLowerCase().indexOf(filter) !== -1) : value;
    }
}