import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist'
const persistConfig = {
    key: 'root',
    storage,
    /** used to remove wrong redusers */
    // blacklist: ["todos"]
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
    let store = createStore(
        persistedReducer,
        compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() ? window.__REDUX_DEVTOOLS_EXTENSION__()  : f => f)
    )
    let persistor = persistStore(store)
    return { store, persistor }
  }