import { configureStore } from '@reduxjs/toolkit';
import tooltip from "./slices/tooltip";

export default configureStore({
    reducer: {
        tooltip:tooltip
    }
})