import {Component, Inject, Input} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {MAT_DIALOG_DATA} from '@angular/material';
import {Base, FieldData} from '../models/base';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
    templateUrl: 'dialog.component.html'
})
export class DialogComponent {

    clazz: typeof Base;
    model: Base;
    fieldData: FieldData[];
    dataForm: FormGroup;
    isNew: boolean;

    createForm() {
        const group: any = {};

        this.fieldData.forEach(
            field => {
                const optionsObj = {
                    validators: field.required ? Validators.required : null
                };

                group[field.field] = new FormControl(field.default || '', optionsObj);
            }
        );

        this.dataForm = new FormGroup(group, {updateOn: 'blur'});
    }

submitForm() {

    if (this.dataForm.valid) {
        this.dialogRef.close(this.dataForm.value);
    }
}

    constructor(public dialogRef: MatDialogRef<DialogComponent>,
                @Inject(MAT_DIALOG_DATA) public data,
                fb: FormBuilder) {

        this.clazz = data.clazz;
        this.model = data.instance;
        this.fieldData = this.clazz.fieldData;
        this.isNew = data.isNew ? true : false;
        this.createForm();

    }
}