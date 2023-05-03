// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

import UserReducer from './user';
import { combineReducers } from '@reduxjs/toolkit';

// const PersistConfig = (reducerName) => ({
//     key: reducerName,
//     storage,
// });

export const RootReducer = combineReducers({
    // [REDUCER_NAMES.DEVICE]: persistReducer(PersistConfig(REDUCER_NAMES.DEVICE), DeviceReducer),
    user: UserReducer,
});
