import {createStore, combineReducers} from 'redux';
import WelcomePageReducer from './components/reducer/WelcomePageReducer.js';
import HotelInfoPageReducer from './components/reducer/HotelInfoPageReducer.js';

const reducer = combineReducers({
    welcomePage: WelcomePageReducer,
    hotelPage: HotelInfoPageReducer
})

const store = createStore(reducer);

store.subscribe(() => {
    console.log("Store", store.getState())
})

export default store;