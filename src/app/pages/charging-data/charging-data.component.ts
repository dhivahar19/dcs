import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromStore from '../../store';
// import { ChargingService } from './../../services/charging.service';
import { Cdrdata } from '../../models/cdrdata.model';

@Component({
  selector: 'app-charging-data',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './charging-data.component.html',
  styleUrls: ['./charging-data.component.scss']
})
export class ChargingDataComponent implements OnInit {

  cdrData$: Observable<Cdrdata[]>;
  @ViewChild('dt') pTable: Table;
  constructor(
    private store: Store<fromStore.State>
  ) { 
    
  }
  /**
   * @description Get the cdrdata from store and dispatch an action for fetch cdrdata to store
   * @returns void
   * */
  ngOnInit(): void {
    this.cdrData$ = this.store.select(fromStore.getAllCdrdata);   
    this.store.dispatch(new fromStore.LoadCdrdata()); 
  }
  /**
   * @description Filter the table data based on the input value
   * @param $event
   * @param stringVal
   * @returns void
  */
  applyFilterGlobal($event: any, stringVal: string) {
    this.pTable.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }  
  /**
   * @description Clear the table filter
   * @param table
   * @returns void
  */
  clear(table: Table) {
    table.clear();
  }
}
