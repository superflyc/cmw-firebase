import {Component, Input} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {ColMeta} from '../data/data.service';

@Component({
    templateUrl: 'dialog.component.html'
})
export class DialogComponent {

    @Input() collection: ColMeta;


    constructor(public dialogRef: MatDialogRef<DialogComponent>) {}
}