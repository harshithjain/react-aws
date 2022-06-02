import { LOAD_GALLERY_IMAGES } from '../../actions/WelcomeAction.js';
const welcomeImages = (state = {
    images: []
}, action) => {
    switch (action.type) {
        case LOAD_GALLERY_IMAGES:
            state = {
                ...state,
                images: action.payload
            }
    }
    return state;
}

export default welcomeImages;