import { HttpClientTestingModule } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";

import { provideMockActions } from "@ngrx/effects/testing";
import { Actions } from "@ngrx/effects";

import { hot, cold } from "jasmine-marbles";
import { Observable, of, throwError, EMPTY } from "rxjs";

import * as fromEffects from "./userdata.effect";
import * as fromActions from "../actions/userdata.action";

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

describe("UserdataEffects", () => {
    let actions$: TestActions;
    let effects: fromEffects.UserdataEffects;

    const userdata = {
        isLoggedIn: true,
        loggedInUser: "test",
    }
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                fromEffects.UserdataEffects,
                provideMockActions(() => actions$),
                { provide: provideMockActions, useFactory: getActions }
            ]
        });
        actions$ = TestBed.inject(provideMockActions);
        effects = TestBed.inject(fromEffects.UserdataEffects);
    });
    describe("adduser$", () => {
        it("should return a stream with adduserSuccess action", () => {
            const action = new fromActions.AddUserdata(userdata);
            const completion = new fromActions.AddUserdataSuccess(userdata);
            actions$.stream = hot("-a", { a: action });
            const expected = cold("-b", { b: completion });
            expect(effects.adduser$).toBeObservable(expected);
        });
    });
});
