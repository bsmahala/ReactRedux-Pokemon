import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { loginData } from './loginReducer';
import { pokemonReducer } from './pokemonReducer';


// combine all reducer
const rootReducer = combineReducers({
    form: formReducer,
    loginData,
    pokemonData : pokemonReducer
  });

export default rootReducer;