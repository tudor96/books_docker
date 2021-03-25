import {useDispatch as useReduxDispatch, useSelector as useReduxSelector} from 'react-redux';
import { ApplicationState } from '../../store';


export function useSelector<T>(selector: (state:ApplicationState)=> T) {
    return useReduxSelector((state:ApplicationState) =>selector(state))
}

export function useDispatch() {
    const dispatch = useReduxDispatch();
    return dispatch;
}
