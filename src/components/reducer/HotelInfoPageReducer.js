import { LOAD_SERVICES } from '../../actions/HotelInfoActions.js';

const hotelInfoServices = (state = {
    services: []
}, action) => {
    switch (action.type) {
        case LOAD_SERVICES:
            state = {
                ...state,
                services: action.payload
            }
            break;
    }
    return state;
}

export default hotelInfoServices;