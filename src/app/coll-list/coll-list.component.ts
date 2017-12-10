import {Component, OnInit} from '@angular/core';
import {DialogComponent} from '../dialog/dialog.component';
import {MatDialog} from '@angular/material';
import {DataService} from '../data/data.service';
import {Base} from '../models/base';

@Component({
    selector: 'app-coll-list',
    templateUrl: './coll-list.component.html',
    styleUrls: ['./coll-list.component.css']
})
export class CollListComponent implements OnInit {

    collections: typeof Base[];
    selectedCollection: typeof Base;

    getCols(): void {
        this.collections = this.dataService.collections;
    }

    createNew() {
        this.dialog.open(DialogComponent,
            {
                data: {
                    clazz: this.selectedCollection,
                    instance: new this.selectedCollection(),
                    isNew: true
                }
            }).afterClosed()
            .filter(result => !!result)
            .subscribe(user => {
                //  this.users.push(user);
                //  this.selectedUser = user;
            });
    }

    constructor(private dialog: MatDialog,
                private dataService: DataService) {
        this.getCols();
        this.selectedCollection = this.collections.length ? this.collections[0] : null;
    }

    ngOnInit() {
    }

}
