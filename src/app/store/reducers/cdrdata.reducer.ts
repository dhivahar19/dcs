import * as fromCdrdata from '../actions/cdrdata.action';
import { Cdrdata } from './../../models/cdrdata.model';

export interface CdrdataState {
    entities: {[sessionId: string]: Cdrdata},
    loading: boolean;
    loaded: boolean;
}

export const initialState: CdrdataState = {
    entities: {},
    loading: false,
    loaded: false,
}
/**
 * @description Cdrdata reducer
 * @param state 
 * @param action 
 * @returns CdrdataState
 */
export function reducer(
    state = initialState,
    action: fromCdrdata.CdrdataAction
): CdrdataState {
    switch (action.type) {
        case fromCdrdata.LOAD_CDRDATA: {
            return {
                ...state,
                loading: true,
                loaded: false
            }
        }
        case fromCdrdata.LOAD_CDRDATA_FAIL: {
            return {
                ...state,
                loading: false,
                loaded: false
            }
        }
        case fromCdrdata.LOAD_CDRDATA_SUCCESS: {
            const cdrdata = action.payload;
            const entities = cdrdata.reduce(
                (entities: {[sessionId: string]: Cdrdata}, cdrdata: Cdrdata) => {
                    return {
                        ...entities,
                        [cdrdata.sessionId]: cdrdata
                    }
                }, 
                {
                    ...state.entities
                });
            return {
                ...state,
                loading: false,
                loaded: true,
                entities
            }
        }
        default:
            return state;
    }
}

export const getCdrdataLoading = (state: CdrdataState) => state.loading;
export const getCdrdataLoaded = (state: CdrdataState) => state.loaded;
export const getCdrEntities = (state: CdrdataState) => state.entities;

