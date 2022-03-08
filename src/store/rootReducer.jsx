import { combineReducers } from '@reduxjs/toolkit';
import user from './UserSlice';

const createReducer = () => (state, action) => {
  const combinedReducer = combineReducers({
    user,
  });

  return combinedReducer(state, action);
};

export default createReducer;
