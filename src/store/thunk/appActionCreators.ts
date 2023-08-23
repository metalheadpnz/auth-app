import {setError, setIsAuth} from "../reducers/appReducer";
import {AppDispatch, RootState} from "../store";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {LOGIN, newsURL, PASSWORD} from "../../constants/constants";
import axios from "axios";
import {LoginPasswordType, NewsData} from "../types";

type AsyncThunkConfig = {
    state: RootState,
    dispatch: AppDispatch,
}

export const setAuthData = createAsyncThunk<void, LoginPasswordType, AsyncThunkConfig>
('SET_AUTH_DATA', (loginData: LoginPasswordType, thunkAPI) => {
    if (loginData.login === LOGIN && loginData.password === PASSWORD) {
        thunkAPI.dispatch(setError(false))
        thunkAPI.dispatch(setIsAuth(true))
        localStorage.setItem('isAuth', 'true')
    } else {
        thunkAPI.dispatch(setError(true))
        thunkAPI.dispatch(setIsAuth(false))
        localStorage.setItem('isAuth', 'false')
    }
})

export const getAuthDataFromLS = createAsyncThunk<string | null, void, AsyncThunkConfig>
('GET_AUTH_DATA_FROM_LS', (_, thunkAPI) => {
    return localStorage.getItem('isAuth')
})

export const setLogOff = createAsyncThunk<void, void, AsyncThunkConfig>
('SET_LOG_OFF', (_, thunkAPI) => {
    localStorage.setItem('isAuth', 'false')
    thunkAPI.dispatch(setIsAuth(false))
})

export const getNews = createAsyncThunk<NewsData[], void, AsyncThunkConfig>
('GET_NEWS', async (_, thunkAPI) => {
    const response = await axios.get<any>(newsURL)
    return response.data
})
