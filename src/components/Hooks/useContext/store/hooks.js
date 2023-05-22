import React, { useContext } from 'react';
import Context from './Context'; // Don't should import StoreContext bc Context in file beside 
//Context = StoreContext


//Customize hook
export const useStore = () => {
    const [state, dispatch] = useContext(Context)
    return [state, dispatch]
}