import { combineReducers, configureStore } from "@reduxjs/toolkit";
import loginReducer from './slices/loginSlice';

const rootReducer = combineReducers({
    login: loginReducer
})

export function setupStore() {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']