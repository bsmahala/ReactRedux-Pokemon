import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { loginData } from './loginReducer';
import { pokemonReducer, favReducer } from './pokemonReducer';


// combine all reducer
const rootReducer = combineReducers({
    form: formReducer,
    loginData,
    pokemonData : pokemonReducer,
    fav: favReducer
  });

export default rootReducer;