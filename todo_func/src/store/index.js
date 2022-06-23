import { createStore } from "redux";
import reducers from './reducers'

function saveToLocalStorage(state) {
    const savedState = JSON.stringify(state);
    localStorage.setItem("state", savedState);
}

function loadFromLocalStorage() {
    const savedState = localStorage.getItem("state");
    if (savedState === null) return undefined;
    return JSON.parse(savedState);
}
const store = createStore(reducers, loadFromLocalStorage());
store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;