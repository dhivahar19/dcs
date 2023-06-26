import { Action } from '@ngrx/store';
import { Userdata } from '../../models/userdata.model';

// load userdata
export const LOAD_USERDATA = '[APP] Load Userdata';
export const LOAD_USERDATA_FAIL = '[APP] Load Userdata Fail';
export const LOAD_USERDATA_SUCCESS = '[APP] Load Userdata Success';

export class LoadUserdata implements Action{
    readonly type = LOAD_USERDATA;
}

export class LoadUserdataFail implements Action{
    readonly type = LOAD_USERDATA_FAIL;
    constructor(public payload: any){}
}   

export class LoadUserdataSuccess implements Action{
    readonly type = LOAD_USERDATA_SUCCESS;
    constructor(public payload: Userdata){}
}

// add userdata
export const ADD_USERDATA = '[APP] Add Userdata';
export const ADD_USERDATA_FAIL = '[APP] Add Userdata Fail';
export const ADD_USERDATA_SUCCESS = '[APP] Add Userdata Success';

export class AddUserdata implements Action{
    readonly type = ADD_USERDATA;
    constructor(public payload: Userdata){}
}

export class AddUserdataFail implements Action{
    readonly type = ADD_USERDATA_FAIL;
    constructor(public payload: any){}
}

export class AddUserdataSuccess implements Action{
    readonly type = ADD_USERDATA_SUCCESS;
    constructor(public payload: Userdata){}
}

// remove userdata
export const REMOVE_USERDATA = '[APP] Remove Userdata';

export class RemoveUserdata implements Action{
    readonly type = REMOVE_USERDATA;
}

        

// action types
export type UserdataAction = 
    | LoadUserdata 
    | LoadUserdataFail 
    | LoadUserdataSuccess
    | AddUserdata
    | AddUserdataFail
    | AddUserdataSuccess
    | RemoveUserdata;

