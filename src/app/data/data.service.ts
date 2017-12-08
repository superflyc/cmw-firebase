import {Injectable} from '@angular/core';
import {Gear} from '../models/gear';
import {Event} from '../models/event';

export interface ColMeta {
    colPath: string;
    colName: string;
    docName: string;
    docClass: any;
}

@Injectable()
export class DataService {

    // models and metadata
    collections: ColMeta[] = [
        {
            colPath: 'gear',
            colName: 'Gear',
            docName: 'Gear',
            docClass: Gear
        },
        {
            colPath: 'events',
            colName: 'Events',
            docName: 'Event',
            docClass: Event
        }
    ];

    constructor() {
    }
}


