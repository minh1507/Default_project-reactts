<<<<<<< HEAD
import { applyMiddleware, combineReducers, createStore } from '@reduxjs/toolkit';
import { Reducer as GlobalReducer} from 'store/Global';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
    global: GlobalReducer
})
const composedEnhancer = composeWithDevTools(
    applyMiddleware(thunkMiddleware)
)
  

const store = createStore(rootReducer, composedEnhancer)
=======
import { configureStore } from '@reduxjs/toolkit';
import { Reducer as appReducer} from 'store/app';
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';
export const history = createBrowserHistory();
const rootReducer = (history:any) => ({
    apps: appReducer
})
const store = configureStore({
    reducer: rootReducer(history),
    middleware: [thunk]
})
>>>>>>> 0182be78014e740cb420ac7b0e9ef4f9a533ba92
export default store