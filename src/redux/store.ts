import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import {judge0Api} from './services/judge0'
export const store = configureStore({
    reducer: {
        [judge0Api.reducerPath]:judge0Api.reducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(judge0Api.middleware),
  })

  setupListeners(store.dispatch)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch