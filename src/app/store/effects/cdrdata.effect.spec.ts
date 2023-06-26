import { HttpClientTestingModule } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";

import { provideMockActions } from "@ngrx/effects/testing";
import { Actions } from "@ngrx/effects";

import { hot, cold } from "jasmine-marbles";
import { Observable, of, throwError, EMPTY } from "rxjs";

import { ChargingService } from "../../services/charging.service";
import * as fromEffects from "./cdrdata.effect";
import * as fromActions from "../actions/cdrdata.action";

export class TestActions extends Actions {
    constructor() {
        super(EMPTY);
    }
    
    set stream(source: Observable<any>) {
        this.source = source;
    }
}

export function getActions() {
    return new TestActions();
}

describe("CdrdataEffects", () => {
    let actions$: TestActions;
    let service: ChargingService;
    let effects: fromEffects.CdrdataEffects;

    const cdrdata = [
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
        }
    ];

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                ChargingService,
                fromEffects.CdrdataEffects,
                provideMockActions(() => actions$),
                { provide: provideMockActions, useFactory: getActions }
            ]
        });

        actions$ = TestBed.inject(provideMockActions);
        service = TestBed.inject(ChargingService);
        effects = TestBed.inject(fromEffects.CdrdataEffects);

        spyOn(service, "getCdrData").and.returnValue(of(cdrdata));
    });

    describe("loadCdrData$", () => {
        it("should return a collection from LoadCdrDataSuccess", () => {
            const action = new fromActions.LoadCdrdata();
            const completion = new fromActions.LoadCdrdataSuccess(cdrdata);

            actions$.stream = hot("-a", { a: action });
            const expected = cold("-b", { b: completion });

            expect(effects.loadCdr$).toBeObservable(expected);
        });
    });
});


