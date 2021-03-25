import { combineReducers } from 'redux';
import { State as Account, reducer as account } from './account';
import { State as Activities, reducer as actitivies } from './request';

export interface ApplicationState {
  data: {
    account: Account;
  };
  request: {
    actitivies: Activities;
  };
}

export default combineReducers<ApplicationState>({
  data: combineReducers({
    account,
  }),
  request: combineReducers({
    actitivies,
  }),
});
