import {
  BasicUserInformation,
} from 'api/account';

import { Action } from 'redux';


export interface ExtendedUserInterface extends BasicUserInformation {
  isLogged: boolean;
}

export interface State {
  user: ExtendedUserInterface;
}

export enum ActionTypes {
  LOGIN = 'store/account/LOGIN',
}

export interface LoginAction extends Action {
  type: ActionTypes.LOGIN;
  payload: {
    data: ExtendedUserInterface;
  };
}


export type Actions =
  | LoginAction
;
