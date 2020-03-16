import { Component, OnInit, Input } from '@angular/core';
import { GridItem } from '../app.interfaces';

@Component({
  selector: 'data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.scss']
})
export class DataGridComponent implements OnInit {

  @Input() items: GridItem[] = [];

  constructor() { }

  ngOnInit() {
  }

  getStyle(item: GridItem): any {
    return {
      'grid-column': `span ${item.columns} / auto`,
      'grid-row': `span ${item.rows} / auto`,
    }
  }
}
