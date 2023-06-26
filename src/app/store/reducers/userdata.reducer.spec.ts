import * as fromUserdata from './userdata.reducer';
import * as fromActions from '../actions/userdata.action';
import { Userdata } from './../../models/userdata.model';

describe('UserdataReducer', () => {
    describe('undefined action', () => {
        it('should return the default state', () => {
            const { initialState } = fromUserdata;
            const action = {} as any;
            const state = fromUserdata.reducer(undefined, action);

            expect(state).toBe(initialState);
        });
    });
    describe('LOAD_USERDATA action', () => {
        it('should set loading to true', () => {
            const { initialState } = fromUserdata;
            const action = new fromActions.LoadUserdata();
            const state = fromUserdata.reducer(initialState, action);

            expect(state.loading).toEqual(true);
            expect(state.loaded).toEqual(false);
            expect(state.data).toEqual({isLoggedIn: false, loggedInUser: ''});
        });
    });
    describe('LOAD_USERDATA_SUCCESS action', () => {
        it('should populate userdata', () => {
            const userdata: Userdata = {
                isLoggedIn: true,
                loggedInUser: 'admin'
            };
            const { initialState } = fromUserdata;
            const action = new fromActions.LoadUserdataSuccess(userdata);
            const state = fromUserdata.reducer(initialState, action);

            expect(state.loading).toEqual(false);
            expect(state.loaded).toEqual(true);
            expect(state.data).toEqual(userdata);
        });
    });
    describe('LOAD_USERDATA_FAIL action', () => {
        it('should return the initial state', () => {
            const { initialState } = fromUserdata;
            const action = new fromActions.LoadUserdataFail({});
            const state = fromUserdata.reducer(initialState, action);

            expect(state).toEqual(initialState);
        });
    });
    describe('ADD_USERDATA_SUCCESS action', () => {
        it('should populate userdata', () => {
            const userdata: Userdata = {
                isLoggedIn: true,
                loggedInUser: 'admin'
            };
            const { initialState } = fromUserdata;
            const action = new fromActions.AddUserdataSuccess(userdata);
            const state = fromUserdata.reducer(initialState, action);

            expect(state.data).toEqual(userdata);
        });
    });
    describe('REMOVE_USERDATA action', () => {
        it('should return the initial state', () => {
            const { initialState } = fromUserdata;
            const action = new fromActions.RemoveUserdata();
            const state = fromUserdata.reducer(initialState, action);

            expect(state).toEqual(initialState);
        });
    });
});