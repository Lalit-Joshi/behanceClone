import { combineReducers } from 'redux';

import projectsReducer from './projects';

const reducers = {
  projects: projectsReducer
}

const rootReducer = combineReducers(reducers);

export default rootReducer;
