import React from 'react';
import {NewsData} from "../../store/types";
import styles from "./NewsBlock.module.css"
import {formatUnixTime} from "../../helpers/helpers";

type PropsType = {
    newsItemData: NewsData
}

export const NewsBlock = ({newsItemData}: PropsType) => {
    return (
        <div className={styles.newsBlock}>
            <img
                 src={newsItemData.imageUrl}
                 alt="image news"/>
            <h2>{newsItemData.title}</h2>
            <p className={styles.newsText}>{newsItemData.text}</p>
            <p className={styles.newsDate}>{formatUnixTime(newsItemData.createdAt)}</p>
            <hr/>
        </div>
    );
};
