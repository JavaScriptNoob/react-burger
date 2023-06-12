import React, {FC, useEffect} from "react";
import FeedDetails from "../components/feedDetails/feed-details";
import FeedTable from "../components/feed-table/feed-table";
import {useDispatch, useSelector} from "../components/servicies/customHooks/typeHooks";
import {WS_HANDSHAKE_CLOSED, WS_HANDSHAKE_START} from "../components/utils/wsTypes";
import {RootState} from "../components/servicies/reducers/index-reducer";


const Feed : FC  = () =>{
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(
            { type: WS_HANDSHAKE_START }
        );
        return () => {
            dispatch(
                { type: WS_HANDSHAKE_CLOSED }
            );
        };
    }, [dispatch]);


    return(
        <div>
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
