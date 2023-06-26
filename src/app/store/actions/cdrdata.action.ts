import { Action } from '@ngrx/store';
import { Cdrdata } from './../../models/cdrdata.model';

// load cdrdata
export const LOAD_CDRDATA = '[APP] Load Cdrdata';
export const LOAD_CDRDATA_FAIL = '[APP] Load Cdrdata Fail';
export const LOAD_CDRDATA_SUCCESS = '[APP] Load Cdrdata Success';

export class LoadCdrdata implements Action{
    readonly type = LOAD_CDRDATA;
}

export class LoadCdrdataFail implements Action{
    readonly type = LOAD_CDRDATA_FAIL;
    constructor(public payload: any){}
}

export class LoadCdrdataSuccess implements Action{
    readonly type = LOAD_CDRDATA_SUCCESS;
    constructor(public payload: Cdrdata[]){}
}

// action types
export type CdrdataAction = LoadCdrdata | LoadCdrdataFail | LoadCdrdataSuccess;
