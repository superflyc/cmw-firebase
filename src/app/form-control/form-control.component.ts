import {Component, Input, OnInit} from '@angular/core';
import {FieldData} from '../models/base';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.css']
})
export class FormControlComponent implements OnInit {

  @Input() fieldData: FieldData;
  @Input() fieldValue: any;
  @Input() control: FormControl;

  constructor() {

  }

  ngOnInit() {
      this.fieldValue = this.fieldValue || '';
  }

}
