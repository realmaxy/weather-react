import { configureStore} from "@reduxjs/toolkit";
import degreeTogglerSlice from "./degreeTogglerSlice";
import langTogglerSlice from "./langTogglerSlice";
import trackingCitiesSlice from "./trackingCitiesSlice";

export const store = configureStore({
    reducer: {
        degreeToggler: degreeTogglerSlice,
        langToggler: langTogglerSlice,
        trackingCities: trackingCitiesSlice,
    },
})

