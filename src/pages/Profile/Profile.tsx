import React from 'react';
import {useAppDispatch} from "../../hooks/redux";
import {setLogOff} from "../../store/thunk/appActionCreators";

export const Profile = () => {
    const dispatch = useAppDispatch()
    const logOffBtnHandler = () => {
        dispatch(setLogOff())
    }
    return (
        <>
            <h1>
                Profile
            </h1>
            <button onClick={logOffBtnHandler}>Log off</button>
        </>
    );
};
