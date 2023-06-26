import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DebugElement } from '@angular/core';
import { TableModule } from 'primeng/table';
import { provideMockStore } from '@ngrx/store/testing';

import { HeaderComponent } from './../../components/header/header.component';
import { ChargingDataComponent } from './charging-data.component';

describe('ChargingDataComponent', () => {
  let component: ChargingDataComponent;
  let fixture: ComponentFixture<ChargingDataComponent>;
  let el: DebugElement;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent, ChargingDataComponent ],
      imports: [ HttpClientTestingModule, TableModule ],
      providers: [ provideMockStore({}) ]
    })
    .compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(ChargingDataComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should display the table header', () => {
    const header = el.nativeElement.querySelector('h3');
    expect(header.textContent).toContain('Charging Data');
  });
  it('should display the table', () => {
    const table = el.nativeElement.querySelector('p-table');
    expect(table).toBeTruthy();
  });
  it('should display the table header', () => {
    const tableHeader = el.nativeElement.querySelector('thead');
    expect(tableHeader).toBeTruthy();
  });
  it('should display the table body', () => {
    const tableBody = el.nativeElement.querySelector('tbody');
    expect(tableBody).toBeTruthy();
  });
  it('should display the table header row', () => {
    const tableHeaderRow = el.nativeElement.querySelector('tr');
    expect(tableHeaderRow).toBeTruthy();
  });
  it('should display the table header columns', () => {
    const tableHeaderColumns = el.nativeElement.querySelectorAll('th');
    expect(tableHeaderColumns.length).toEqual(4);
  });
});
