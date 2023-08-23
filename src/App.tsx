import React, {useEffect} from 'react';
import {HashRouter} from "react-router-dom";
import {Navigation} from "./components/Navigation/Navigation";
import {AppRoutes} from "./components/Routes/Routes";
import {useAppDispatch} from "./hooks/redux";
import {getAuthDataFromLS} from "./store/thunk/appActionCreators";

const App = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getAuthDataFromLS())
    }, []);

    return (
        <HashRouter>
            <Navigation/>
            <div className='main-content'>
                <AppRoutes/>
            </div>
        </HashRouter>
    )
};

export default App;
