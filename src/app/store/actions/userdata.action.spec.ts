import * as fromUserdata from './userdata.action';

describe('Userdata Actions', () => {
    describe('LoadUserdata Actions', () => {
        describe('LoadUserdata', () => {
            it('should create an action', () => {
                const action = new fromUserdata.LoadUserdata();
        
                expect({ ...action }).toEqual({
                type: fromUserdata.LOAD_USERDATA,
                });
            });
        });
    
        describe('LoadUserdataFail', () => {
            it('should create an action', () => {
                const payload = { message: 'Load Error' };
                const action = new fromUserdata.LoadUserdataFail(payload);
        
                expect({ ...action }).toEqual({
                type: fromUserdata.LOAD_USERDATA_FAIL,
                payload,
                });
            });
        });
    
        describe('LoadUserdataSuccess', () => {
            it('should create an action', () => {
                const payload = {
                    isLoggedIn: true,
                    loggedInUser: "admin"
                }
                const action = new fromUserdata.LoadUserdataSuccess(payload);

                expect({ ...action }).toEqual({
                type: fromUserdata.LOAD_USERDATA_SUCCESS,
                payload,
                });
            });
        });
        
    });
});
