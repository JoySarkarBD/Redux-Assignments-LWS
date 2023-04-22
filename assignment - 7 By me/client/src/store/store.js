import { configureStore } from "@reduxjs/toolkit";
import jobReducer from '../features/Jobs/jobsSlice';
import filterJobReducer from '../features/filterJob/filterJobSlice';

const store = configureStore({
    reducer: {
        jobs: jobReducer,
        filterJob: filterJobReducer,
    },
});

export default store;
