import * as fromCdrdata from './cdrdata.action';

describe('Cdrdata Actions', () => {
    describe('LoadCdrdata Actions', () => {
        describe('LoadCdrdata', () => {
        it('should create an action', () => {
            const action = new fromCdrdata.LoadCdrdata();
    
            expect({ ...action }).toEqual({
            type: fromCdrdata.LOAD_CDRDATA,
            });
        });
        });
    
        describe('LoadCdrdataFail', () => {
        it('should create an action', () => {
            const payload = { message: 'Load Error' };
            const action = new fromCdrdata.LoadCdrdataFail(payload);
    
            expect({ ...action }).toEqual({
            type: fromCdrdata.LOAD_CDRDATA_FAIL,
            payload,
            });
        });
        });
    
        describe('LoadCdrdataSuccess', () => {
        it('should create an action', () => {
            const payload = [
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
            const action = new fromCdrdata.LoadCdrdataSuccess(payload);
    
            expect({ ...action }).toEqual({
            type: fromCdrdata.LOAD_CDRDATA_SUCCESS,
            payload,
            });
        });
        });
    });
});