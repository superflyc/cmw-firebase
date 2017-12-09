import {Base, MetaData} from './base';

export class Gear extends Base {

    static metaData = {
        manufacturer: {
            type: 'string',
            label: 'Manufacturer',
            required: true,
            default: 'Shure'
        },
        model: <MetaData> {
            type: 'string',
            label: 'Model',
            required: true
        },
        category: <MetaData> {
            type: 'string',
            label: 'Category',
            values: ['Microphone', 'Amp', 'Keys', 'Drums', 'Bass', 'Guitar']
        },
        cost: <MetaData> {
            type: 'currency',
            label: 'Currency'
        },
        quantity: <MetaData> {
            type: 'number',
            label: 'Quantity'
        }
    };

    manufacturer: string;
    model: string;
    category: string;
    quantity: number;
    cost: number;
}
