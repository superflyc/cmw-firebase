import {Base, MetaData} from './base';

export class Event extends Base {

    static metaData = {
    name: <MetaData> {
        type: 'string',
        label: 'Name'
    },
        eventDate: <MetaData> {
            type: 'date',
            label: 'Event Date'
        }
    };

    eventDate: Date;
    name: string;
}
