import {useState, useEffect} from 'react';
import {useSelector} from 'hooks';

import { selectActivity, selectError} from 'store/request'

import {ActivityResult} from '../types'

export function useActivity(type:string, payload?:any):ActivityResult {

    const [cancel, setCancel] = useState(false);
    const loading = useSelector(state => selectActivity(state.request.actitivies, {type,payload}));
    const errored = useSelector(state => selectError(state.request.actitivies, {type,payload}));

    useEffect(()=> {
        if(errored) setCancel(true);
    }, [errored]);

    function reset() {
        setCancel(false);
    }

    return [
        {loading, error:cancel},
        reset
    ]
}