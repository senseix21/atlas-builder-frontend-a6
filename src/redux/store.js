import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";
import pcBuilderReducer from '../redux/features/pc-builder/pcBuilderSlice'

const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        PCBuilder: pcBuilderReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
});


export default store;