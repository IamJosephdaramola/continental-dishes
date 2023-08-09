import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { recipeApi } from './recipe-service';

const store = configureStore({
    reducer: {
        [recipeApi.reducerPath]: recipeApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(recipeApi.middleware),
});

setupListeners(store.dispatch);

export { store };
