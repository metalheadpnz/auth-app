import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {getAuthDataFromLS, getNews} from "../thunk/appActionCreators";
import {AppState} from "../types";

const initialState: AppState = {
    isAuth: false,
    loginError: false,
    isLoading: false,
    loadingError: '',
    newsData: [],
};

const appReducer = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setIsAuth: (state, action: PayloadAction<boolean>) => {
            state.isAuth = action.payload
        },
        setError: (state, action: PayloadAction<boolean>) => {
            state.loginError = action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getNews.pending, (state, action) => {
            state.isLoading = true
            state.loadingError = ''
        })
        builder.addCase(getNews.fulfilled, (state, action) => {
            state.isLoading = false
            state.newsData = action.payload
        });
        builder.addCase(getNews.rejected, (state, action) => {
            state.isLoading = false
            state.loadingError = action.error.message || 'Error'
        });

        builder.addCase(getAuthDataFromLS.fulfilled, (state, action) => {
            const storedValue = action.payload
            if (storedValue !== null) {
                const isAuthStored: boolean = JSON.parse(storedValue)
                state.isAuth = isAuthStored
            } else {
                state.isAuth = false
            }
        })
    }
});

export const {setIsAuth, setError} = appReducer.actions;
export default appReducer.reducer;
