import { configureStore } from '@reduxjs/toolkit';
import appReducer from './reducers/appReducer';
import thunkMiddleware from 'redux-thunk';

const store = configureStore({
    reducer: {
        app: appReducer,
    },
    middleware: (getDefaultMiddleware)=> getDefaultMiddleware().prepend(thunkMiddleware),
});

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
