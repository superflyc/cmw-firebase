import {Injectable} from '@angular/core';
import {Gear} from '../models/gear';
import {Event} from '../models/event';

@Injectable()
export class DataService {

    // models
    collections: any[] = [
        Event,
        Gear
    ];

    constructor() {
    }
}


