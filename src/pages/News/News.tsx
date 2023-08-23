import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {getNews} from "../../store/thunk/appActionCreators";
import {NewsBlock} from "../../components/NewsBlock/NewsBlock";

export const News = () => {
    const dispatch = useAppDispatch()
    const newsData = useAppSelector(state => state.app.newsData)
    const isLoading = useAppSelector(state => state.app.isLoading)

    useEffect(() => {
        dispatch(getNews())
    }, []);

    return (
        <div>
            <h1>
                News
            </h1>
            {isLoading
                ? <p>Loading...</p>
                : newsData.map(newsItemData => <NewsBlock newsItemData={newsItemData} key={newsItemData.id}/>)
            }
        </div>
    );
};
