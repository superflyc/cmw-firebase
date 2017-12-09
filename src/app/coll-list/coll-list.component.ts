import {Component, OnInit} from '@angular/core';
import {DialogComponent} from '../dialog/dialog.component';
import {MatDialog} from '@angular/material';
import {ColMeta, DataService} from '../data/data.service';

@Component({
    selector: 'app-coll-list',
    templateUrl: './coll-list.component.html',
    styleUrls: ['./coll-list.component.css']
})
export class CollListComponent implements OnInit {

    collections: ColMeta[];
    selectedCollection: ColMeta;

    getColls(): void {
        this.collections = this.dataService.collections;
    }

    openAdminDialog() {
        this.dialog.open(DialogComponent,
            {data: this.selectedCollection}).afterClosed()
            .filter(result => !!result)
            .subscribe(user => {
                //  this.users.push(user);
                //  this.selectedUser = user;
            });
    }

    constructor(private dialog: MatDialog,
                private dataService: DataService) {
        this.getColls();
        this.selectedCollection = this.collections.length ? this.collections[0] : null;
    }

    ngOnInit() {
    }

}
