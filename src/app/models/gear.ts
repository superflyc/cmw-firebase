import {Base, ColData, FieldData} from './base';

export class Gear extends Base {

    static colData: ColData = {
        path: 'gear',
        colName: 'Gear',
        docName: 'Gear'
    };

    static fieldData: FieldData[] = [
        {
            field: 'manufacturer',
            type: 'string',
            label: 'Manufacturer',
            required: true,
            default: 'Shure'
        },
        {
            field: 'model',
            type: 'string',
            label: 'Model',
            required: true
        },
        {
            field: 'category',
            type: 'select',
            label: 'Category',
            required: true,
            values: ['Microphone', 'Amp', 'Keys', 'Drums', 'Bass', 'Guitar']
        },
        {
            field: 'cost',
            type: 'currency',
            label: 'Currency'
        },
        {
            field: 'quantity',
            type: 'number',
            label: 'Quantity'
        }
    ];

    manufacturer: string;
    model: string;
    category: string;
    quantity: number;
    cost: number;
}
