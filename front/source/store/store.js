import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import authReducer from './authSlice.js';
import themeReducer from './themeSlice.js';
import languageReducer from './languageSlice.js';

const rootReducer = combineReducers({
  auth: authReducer,
  theme: themeReducer,
  language: languageReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth', 'theme', 'language'], // persist auth, theme, and language
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE', 'your/action/type'],
        ignoredActionPaths: ['meta.arg', 'payload.timestamp'],
        ignoredPaths: ['items.dates'],
      },
    }),
});

export const persistor = persistStore(store);
