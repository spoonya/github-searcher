import { combineReducers } from 'redux';

import user from './user.reducer';
import repos from './repos.reducer';

const rootReducer = combineReducers({
  user,
  repos,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
