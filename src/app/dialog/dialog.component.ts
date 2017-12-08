import {Component, Input} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {CollMeta} from '../data/data.service';

@Component({
    templateUrl: 'dialog.component.html'
})
export class DialogComponent {

    @Input() collection: CollMeta;


    constructor(public dialogRef: MatDialogRef<DialogComponent>) {}
}