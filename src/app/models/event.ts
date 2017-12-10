import {Base, FieldData, ColData} from './base';

export class Event extends Base {

    static colData: ColData = {
        path: 'events',
        colName: 'Events',
        docName: 'Event'
    }

    static fieldData: FieldData[] = [
        {
            field: 'name',
            type: 'string',
            label: 'Name'
        },
        {
            field: 'eventData',
            type: 'date',
            label: 'Event Date'
        }
    ];

    eventDate: Date;
    name: string;
}
