import {Component, Inject, Input} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {MAT_DIALOG_DATA} from '@angular/material';
import {ColMeta} from '../data/data.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
    templateUrl: 'dialog.component.html'
})
export class DialogComponent {

    colInfo: ColMeta;
    dataForm: FormGroup;

    createForm() {
        const metaData = this.colInfo.docClass.metaData;
        const group: any = {};

        Object.keys(metaData).forEach(
            key => {
                const field = metaData[key];
                const optionsObj = {
                    validators: field.required ? Validators.required : null
                };

                group[key] = new FormControl(field.default || '', optionsObj);
            }
        );

        this.dataForm = new FormGroup(group);
    }

    constructor(public dialogRef: MatDialogRef<DialogComponent>,
                @Inject(MAT_DIALOG_DATA) public data: ColMeta,
                fb: FormBuilder) {

        this.colInfo = data;
        this.createForm();

    }
}