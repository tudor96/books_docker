import { BasicUserInformation } from 'api/account';
import { useActivity } from 'hooks/activity/useActivity';
import { OperationResult } from 'hooks/types';
import { useDispatch, useSelector } from 'hooks/utils';
import { ActionTypes, login, selectIsLogged } from 'store/account';

export function useLogin(): OperationResult<
  boolean,
  (data: BasicUserInformation) => void
> {
  const dispatch = useDispatch();
  const logged = useSelector((state) => selectIsLogged(state.data.account));
  const [{ loading, error }] = useActivity(ActionTypes.LOGIN);

  function handler(data: BasicUserInformation) {
    dispatch(login(data));
  }

  return [
    {
      loading,
      error,
      data: logged,
    },
    handler,
  ];
}
