import React, {FC, useEffect} from "react";
import FeedDetails from "../components/feedDetails/feed-details";
import FeedTable from "../components/feed-table/feed-table";
import {useDispatch} from "../components/servicies/customHooks/typeHooks";
import styles from "./feed.module.css";
import {WS_FEED_HANDSHAKE_CLOSED, WS_FEED_HANDSHAKE_START} from "../components/utils/wsTypes";
import {WS_QUERY} from "../components/servicies/api";


const Feed : FC  = () =>{
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(
            { type: WS_FEED_HANDSHAKE_START, payload: WS_QUERY}
        );
        return () => {
            dispatch(
                { type: WS_FEED_HANDSHAKE_CLOSED}
            );
        };
    }, [dispatch]);


    return(
        <div className={`mt-20 ${styles.feed_container}`}>
          <h2 className={`text text_type_main-large`}></h2>
            <div>
                <div> <FeedDetails/></div>
            </div>
            <div>
                <FeedTable/>
            </div>



        </div>

    )
}

export  default  Feed;
