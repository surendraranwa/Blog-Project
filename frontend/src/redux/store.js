import { configureStore, combineReducers } from '@reduxjs/toolkit';
import userReducer from './user/userSlice';
import storage from 'redux-persist/lib/storage';
import {persistReducer} from 'redux-persist';
import { persistStore } from 'redux-persist';




const rootReducer = combineReducers({user : userReducer,});
const persistConfig = {key: 'root',
    storage,
    version: 1,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)


 const store = configureStore({
  reducer:persistedReducer,
  middleware: (getDefaultMiddleware)=> getDefaultMiddleware({
    serializableCheck : false,
  })
});
export default store;
export const persistor = persistStore(store);