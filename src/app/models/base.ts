export interface MetaData {
    type: string;
    label: string;
    default?: string | number | Date;
    values?: string[];
    required?: boolean;
}

export class Base {
    _dateCreated: Date;
    _dateModified: Date;
    _userCreated: string;
    _userModified: string;

}
