import React from 'react';
import {NavLink} from "react-router-dom";
import styles from "./Navigation.module.css"

export const Navigation = () => {
    const getNavLinkClassName = ({isActive}: { isActive: boolean }) => isActive ? styles.activeName : styles.navigationLink

    return (
        <div className={styles.navigationContainer}>
            <NavLink
                className={getNavLinkClassName}
                to={'/'}>
                Home
            </NavLink>
            <NavLink
                className={getNavLinkClassName}
                to={'/news'}>
                News
            </NavLink>
            <NavLink
                className={getNavLinkClassName}
                to={'/profile'}>
                Profile
            </NavLink>
            <NavLink
                className={getNavLinkClassName}
                to={'/login'}>
                Login
            </NavLink>
        </div>
    );
};
