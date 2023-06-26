import { createSelector } from '@ngrx/store';
import * as fromFeature from '../reducers';
import * as fromUserdata from '../reducers/userdata.reducer';



// userdata state
export const getUserdataState = createSelector(fromFeature.getState, (state: fromFeature.State) => state.userdata);

export const getUserdata = createSelector(getUserdataState, fromUserdata.getUserdata);
export const getUserdataLoaded = createSelector(getUserdataState, fromUserdata.getUserdataLoaded);
export const getUserdataLoading = createSelector(getUserdataState, fromUserdata.getUserdataLoading);
