import initialState from './initialState';
import produce from 'immer';
import { ActionTypes, Actions, State } from './types';
import _ from 'lodash';

export default (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionTypes.LOGIN: {
      const { data } = action.payload;
      return produce(state, (draft) => {
        draft.user.email = data.email;
        draft.user.password = data.password;
        draft.user.isLogged = data.isLogged;
      });
    }
   

    default: {
      return state;
    }
  }
};
