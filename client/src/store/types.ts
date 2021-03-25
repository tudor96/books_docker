import { ThunkAction, ThunkDispatch as Dispatch } from 'redux-thunk';
import { ApplicationState } from './root';

import { Actions as AccountActions } from './account';

import { Actions as ActivitiesActions } from './request';
import { ApiFactory } from 'api';

type ApplicationAction =
  | ActivitiesActions
  | AccountActions


export interface ThunkContext {
  api: ApiFactory;
}

export type Thunk = ThunkAction<
  Promise<void>,
  ApplicationState,
  ThunkContext,
  ApplicationAction
>;
export type ThunkDispatch = Dispatch<
  ApplicationState,
  ThunkContext,
  ApplicationAction
>;
