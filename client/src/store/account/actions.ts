import { BasicUserInformation } from 'api/account';

import { ActionCreator } from 'redux';
import { beginActivity, endActivity, setError } from 'store/request';
import { Thunk } from 'store/types';
import { v4 as uuidv4 } from 'uuid';
import { ActionTypes, ExtendedUserInterface, LoginAction } from './types';

export const loginAction: ActionCreator<LoginAction> = (
  data: ExtendedUserInterface
) => ({
  type: ActionTypes.LOGIN,
  payload: {
    data,
  },
});

export const login = (data: BasicUserInformation): Thunk => async (
  dispatch,
  getState,
  context
) => {
  const activityId = uuidv4();
  try {
    await dispatch(
      beginActivity({
        type: ActionTypes.LOGIN,
        uuid: activityId,
      })
    );
    const loginInformation = await context.api.data.account().login(data);
    dispatch(
      loginAction({
        ...data,
        isLogged: loginInformation === 'connected' ? true : false,
      })
    );
  } catch (error) {
    await dispatch(
      setError({
        type: ActionTypes.LOGIN,
        error: error.message,
        uuid: uuidv4(),
      })
    );
  } finally {
    await dispatch(endActivity({ uuid: activityId }));
  }
};
