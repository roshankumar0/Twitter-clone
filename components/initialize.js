import React from 'react'
import {  useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { checkLoggedIn } from '../store/cartSlice';

function Initialize() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(checkLoggedIn());
    }, []);


    return (
        <>

        </>
    )
}

export default Initialize
