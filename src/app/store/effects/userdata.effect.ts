import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import * as userdataActions from '../actions/userdata.action';
import { map, switchMap, catchError } from 'rxjs/operators';



@Injectable({
    providedIn: 'root'
})

export class UserdataEffects {
    constructor(
        private action$: Actions
        ) { }
    loaduser$ = createEffect(() => {
        return this.action$.pipe(
                    ofType(userdataActions.LOAD_USERDATA),
                    switchMap(() => {
                        const userdata = {
                            isLoggedIn: localStorage.getItem('isLoggedIn') === 'true',
                            loggedInUser: localStorage.getItem('loggedInUser') || ''
                        }
                        return of(new userdataActions.LoadUserdataSuccess(userdata));
                    }));
    });
    /**
     * @description Add userdata to store
     * @returns Observable<Userdata>
     * */
    adduser$ = createEffect(() => {
        return this.action$.pipe(
                    ofType(userdataActions.ADD_USERDATA),
                    map((action: userdataActions.AddUserdata) => action.payload),
                    switchMap((userdata) => {
                        return of(new userdataActions.AddUserdataSuccess(userdata));
                    }));
    });
}