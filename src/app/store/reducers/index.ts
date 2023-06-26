import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import * as fromCdrdata from './cdrdata.reducer';
import * as fromUserdata from './userdata.reducer';

export interface State {
    cdrdata : fromCdrdata.CdrdataState;
    userdata : fromUserdata.UserdataState;
}

export const reducers: ActionReducerMap<State, any> = {
    cdrdata: fromCdrdata.reducer ,
    userdata: fromUserdata.reducer
};

// app state
export const getState = createFeatureSelector<State>('appState');

