import React from 'react';
import {createStore, applyMiddleware, compose} from 'redux';
import ReactDOM from 'react-dom/client';
import './index.css';
import thunk from 'redux-thunk';
import App from './components/app/App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from "react-router-dom";
import {Provider, TypedUseSelectorHook, useSelector as selectorHooks} from "react-redux";
import {rootReducer} from "./components/servicies/reducers/index-reducer";
import {socketMiddleware} from "./components/servicies/middleware/socket-middleware";
import {WS_QUERY} from "./components/servicies/api";
import {feedActionTypes} from "./components/servicies/actions/feed-action";
import {orderArchiveActionTypes} from "./components/servicies/actions/order-archive-actions";


declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(thunk), applyMiddleware( socketMiddleware(feedActionTypes),
    socketMiddleware(orderArchiveActionTypes)));

const store = createStore(rootReducer, enhancer);
const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootReducer>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router>
                <App/>
            </Router>
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


