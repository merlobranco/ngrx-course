import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer,
  on
} from '@ngrx/store';
import { AuthActions } from '../action-types';
import { User } from '../model/user.model';

export const authFeatureKey = 'auth';

export interface AuthState {
  user: User
}

export const initialAuth: AuthState = {
    user: undefined
}

export const authReducer = createReducer(
  initialAuth,
  on(AuthActions.login, (state, { user }) => ({ user: user })),
  on(AuthActions.logout, (state) => ({ user: undefined }))
);

