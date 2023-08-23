import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Home} from "../../pages/Home/Home";
import {News} from "../../pages/News/News";
import {Login} from "../../pages/Login/Login";
import {Profile} from "../../pages/Profile/Profile";
import {WithAuth} from "../../utils/hoc/WithAuth";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route path={'/news'} element={<News/>}/>
            <Route path={'/login'} element={<Login/>}/>
            <Route path={'/profile'} element={<WithAuth><Profile/></WithAuth>}/>
        </Routes>
    );
};
