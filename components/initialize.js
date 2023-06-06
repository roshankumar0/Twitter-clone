import React from 'react'
import { Provider, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { checkLoggedIn } from '../store/cartSlice';

function Initialize() {
    const dispatch = useDispatch();
    useEffect(() => {
        // if (!user && router.pathname !== '/login') {
        //   router.push("/login");
        // }    
        dispatch(checkLoggedIn());
    }, []);


    return (
        <>

        </>
    )
}

export default Initialize
