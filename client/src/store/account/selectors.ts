import { createSelector } from 'reselect';
import { State } from './types';
import _ from 'lodash';

export const selectIsLogged = createSelector(
  (state: State) => {
    const { user } = state;
    if (_.isEmpty(user.isLogged)) {
      return user.isLogged
    } else {
      return true;
    }
  },
  (logged) => logged
);

