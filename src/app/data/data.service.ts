import {Injectable} from '@angular/core';
import {Car} from '../models/car';
import {Taco} from '../models/taco';

@Injectable()
export class DataService {

    // models and metadata
    static metaData = {
        'cars': {
            colPath: 'cars',
            collName: 'Cars',
            docName: 'Car',
            docClass: Car
        },
        'tacos': {
            colPath: 'tacos',
            colName: 'Tacos',
            docName: 'Taco',
            docClass: Taco
        }
    };

    constructor() {
    }

}
