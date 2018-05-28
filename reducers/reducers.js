import { combineReducers } from 'redux';
import reducerDogs from './reducerDogs';
import reducerCats from './reducerCats';

const reducers = combineReducers({
    dogs:reducerDogs,
    cats:reducerCats
});

export default reducers;