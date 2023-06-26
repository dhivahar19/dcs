import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import * as cdrdataActions from '../actions/cdrdata.action';
import { map, switchMap, catchError } from 'rxjs/operators';

import { ChargingService } from './../../services/charging.service';

@Injectable({
    providedIn: 'root'
})

export class CdrdataEffects {
    constructor(
        private action$: Actions,
        private chargingService: ChargingService
        ) { }
    /**
     * @description Load CDR data from json file
     * @returns Observable<Cdrdata[]>
     */
    loadCdr$ = createEffect(() => {
        return this.action$.pipe(
                    ofType(cdrdataActions.LOAD_CDRDATA),
                    switchMap(() => {
                        return this.chargingService.getCdrData().pipe(
                            map(data => new cdrdataActions.LoadCdrdataSuccess(data)),
                            catchError(error => of(new cdrdataActions.LoadCdrdataFail(error)))
                        )
                    }))
    });
}