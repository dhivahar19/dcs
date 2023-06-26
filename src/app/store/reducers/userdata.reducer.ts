import * as fromUserdata from '../actions/userdata.action';
import { Userdata } from './../../models/userdata.model';

export interface UserdataState {
    data : Userdata;
    loading: boolean;
    loaded: boolean;
}

export const initialState: UserdataState = {
    data: {isLoggedIn: false, loggedInUser: ''},
    loading: false,
    loaded: false,
}
/**
 * @description Userdata reducer
 * @param state
 * @param action
 * @returns UserdataState
 * */
export function reducer(
    state = initialState,
    action: fromUserdata.UserdataAction
): UserdataState {
    switch (action.type) {
        case fromUserdata.LOAD_USERDATA: {
            return {
                ...state,
                loading: true,
                loaded: false
            }
        }
        case fromUserdata.LOAD_USERDATA_FAIL: {
            return {
                ...state,
                loading: false,
                loaded: false
            }
        }
        case fromUserdata.LOAD_USERDATA_SUCCESS: {
            const userdata = action.payload;
            return {
                ...state,
                loading: false,
                loaded: true,
                data: userdata
            }
        }
        case fromUserdata.ADD_USERDATA_SUCCESS: {
            const userdata = action.payload;
            return {
                ...state,
                data: userdata
            }
        }
        case fromUserdata.REMOVE_USERDATA: {
            return {
                ...state,
                data: initialState.data
            }
        }
        default:
            return state;
    }
}

export const getUserdataLoading = (state: UserdataState) => state.loading;
export const getUserdataLoaded = (state: UserdataState) => state.loaded;
export const getUserdata = (state: UserdataState) => state.data;
