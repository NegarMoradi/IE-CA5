import { createStore } from '@reduxjs/toolkit';
import { RootReducer } from './reducer';

export const Store = createStore(RootReducer, {});