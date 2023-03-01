import {AnyAction, configureStore} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import thunkMiddleware, {ThunkDispatch} from 'redux-thunk';
import rootReducer, {RootState} from './reducers/rootReducer';

const middleware = [thunkMiddleware];

const store = configureStore({
  reducer: rootReducer,
  middleware: middleware,
});

export type AppDispatch = ThunkDispatch<RootState, undefined, AnyAction>;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
