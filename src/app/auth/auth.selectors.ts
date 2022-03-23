import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "./reducers";

export const selectAuthState = createFeatureSelector<AppState>("auth")

export const isLoggedIn = createSelector(
    selectAuthState,
    (auth) => !!auth.user
);

export const isLoggedOut = createSelector(
    isLoggedIn,
    (loggedIn) => !loggedIn
);