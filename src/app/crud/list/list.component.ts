import {Component, Input, OnInit} from '@angular/core';
import {CrudService} from '../crud.service';
import {Observable} from 'rxjs/Observable';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

    collection: Observable<any[]>;
    @Input() docModel: any;

    constructor(private crudService: CrudService) {
    }

    ngOnInit() {
        this.collection = this.crudService.getColl$('cars');
    }

}
