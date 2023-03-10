import { configureStore } from "@reduxjs/toolkit";
import degreeTogglerSlice from "./degreeToggler/degreeTogglerSlice";
import langTogglerSlice from "./langToggler/langTogglerSlice";

export const store = configureStore({
    reducer: {
        degreeToggler: degreeTogglerSlice,
        langToggler: langTogglerSlice
    }
})