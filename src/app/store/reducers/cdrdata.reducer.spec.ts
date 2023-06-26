import * as fromCdrdata from './cdrdata.reducer';
import * as fromActions from '../actions/cdrdata.action';
import { Cdrdata } from './../../models/cdrdata.model';

describe('CdrdataReducer', () => {
    describe('undefined action', () => {
        it('should return the default state', () => {
            const { initialState } = fromCdrdata;
            const action = {} as any;
            const state = fromCdrdata.reducer(undefined, action);

            expect(state).toBe(initialState);
        });
    });
    describe('LOAD_CDRDATA action', () => {
        it('should set loading to true', () => {
            const { initialState } = fromCdrdata;
            const action = new fromActions.LoadCdrdata();
            const state = fromCdrdata.reducer(initialState, action);

            expect(state.loading).toEqual(true);
            expect(state.loaded).toEqual(false);
            expect(state.entities).toEqual({});
        });
    });
    describe('LOAD_CDRDATA_SUCCESS action', () => {
        it('should map an array to entities', () => {
            const cdrdata: Cdrdata[] = [
                {
                    sessionId: "7404cd96-11a9-11ee-be56-0242ac120002",
                    vehicleId: "B85C4J",
                    startTime: "2023-05-10 04:23:32",
                    endTime: "2023-05-10 06:23:32",
                    totalCost: 15
                },
                {
                    sessionId: "7404d020-11a9-11ee-be56-0242ac120002",
                    vehicleId: "0Y3TPC",
                    startTime: "2023-01-20 23:17:28",
                    endTime: "2023-01-20 23:50:28",
                    totalCost: 10
                },
            ];
            const entities = {
                "7404cd96-11a9-11ee-be56-0242ac120002": cdrdata[0],
                "7404d020-11a9-11ee-be56-0242ac120002": cdrdata[1],
            };
            const { initialState } = fromCdrdata;
            const action = new fromActions.LoadCdrdataSuccess(cdrdata);
            const state = fromCdrdata.reducer(initialState, action);

            expect(state.entities).toEqual(entities);
            expect(state.loading).toEqual(false);
            expect(state.loaded).toEqual(true);
        });
    });
    describe('LOAD_CDRDATA_FAIL action', () => {
        it('should return the initial state', () => {
            const { initialState } = fromCdrdata;
            const action = new fromActions.LoadCdrdataFail({});
            const state = fromCdrdata.reducer(initialState, action);

            expect(state).toEqual(initialState);
        });
    });
});
