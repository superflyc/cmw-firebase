export interface FieldData {
    field: string,
    type: string;
    label: string;
    default?: string | number | Date;
    values?: string[];
    required?: boolean;
}

export interface ColData {
    path: string;
    colName: string;
    docName: string;
}

export class Base {

    public static fieldData: FieldData[];
    public static colData: ColData;

    _dateCreated: Date;
    _dateModified: Date;
    _userCreated: string;
    _userModified: string;

}
