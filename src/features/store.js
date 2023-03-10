import { configureStore } from "@reduxjs/toolkit";
import degreeTogglerSlice from "./degreeToggler/degreeTogglerSlice";

export const store = configureStore({
    reducer: {
        degreeToggler: degreeTogglerSlice,
    }
})