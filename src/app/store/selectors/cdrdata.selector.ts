import { createSelector } from "@ngrx/store";
import * as fromFeature from '../reducers';
import * as fromCdrdata from '../reducers/cdrdata.reducer';

// cdrdata state
export const getCdrdataState = createSelector(fromFeature.getState, (state: fromFeature.State) => state.cdrdata);

export const getAllCdrEntities = createSelector(getCdrdataState, fromCdrdata.getCdrEntities);
export const getAllCdrdata = createSelector(getAllCdrEntities, (entities) => {
    return Object.keys(entities).map(vehicleId => entities[vehicleId]);
});
export const getCdrdataLoaded = createSelector(getCdrdataState, fromCdrdata.getCdrdataLoaded);
export const getCdrdataLoading = createSelector(getCdrdataState, fromCdrdata.getCdrdataLoading);