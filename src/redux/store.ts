import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import {useDispatch} from 'react-redux';
import {Action} from 'redux';
import {ThunkAction} from 'redux-thunk';
import rootReducer, {RootState} from './reducers/rootReducer';

const store = configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware(), thunk],
});

// Define a hook that can be used to dispatch actions from the store
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

// Define a thunk that can be used to dispatch actions that return promises
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
