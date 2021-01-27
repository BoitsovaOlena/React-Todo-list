import {combineReducers} from 'redux';

import tasks from './tasks';
import counter from './counter';

export default combineReducers({tasks, counter});
