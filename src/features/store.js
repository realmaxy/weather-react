import { configureStore} from "@reduxjs/toolkit";
import degreeTogglerSlice from "./degreeTogglerSlice";
import langTogglerSlice from "./langTogglerSlice";
import { weatherApi } from "./weatherApi";


export const store = configureStore({
    reducer: {
        degreeToggler: degreeTogglerSlice,
        langToggler: langTogglerSlice,
        [weatherApi.reducerPath]: weatherApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(weatherApi.middleware)
})

