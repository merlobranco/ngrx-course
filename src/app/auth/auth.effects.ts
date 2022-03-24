import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { pipe } from "rxjs";
import { tap } from "rxjs/operators";
import { AuthActions } from "./action-types";

@Injectable()
export class AuthEffects {

    login$ = createEffect(() => this.actions$
    .pipe(
        ofType(AuthActions.login),
        tap(action => localStorage.setItem('user', JSON.stringify(action.user)))
    ),
    {dispatch: false}); // This is required, because normally a effect triggers a new action but here is not the case

    constructor(private actions$: Actions) {     
    }

}