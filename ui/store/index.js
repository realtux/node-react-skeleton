import { configureStore } from '@reduxjs/toolkit';

import sample from '#ui/store/reducers/sample';

export const store = configureStore({
    reducer: {
        sample,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false
        })
});
