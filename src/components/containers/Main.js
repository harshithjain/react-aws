import React from 'react';
import { connect } from 'react-redux';
import Main from '../ui/Main.js';
import { LOAD_GALLERY_IMAGES } from '../../actions/WelcomeAction.js';
import { LOAD_SERVICES } from '../../actions/HotelInfoActions.js';

class MainContainer extends React.Component {
    render() {
        return(
            <Main 
              loadGalleryImages = {this.props.loadGalleryImages}
              galleryImagesData = {this.props.galleryImagesData}
              hotelServicesData = {this.props.hotelServicesData}
              loadServices = {this.props.loadServices}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return{
      galleryImagesData: state.welcomePage.images,
      hotelServicesData: state.hotelPage.services
    }
}
  
const mapDispatchToProps = (dispatch) => {
    return {
      loadGalleryImages: (payload) => {
        dispatch({
          type: LOAD_GALLERY_IMAGES,
          payload: payload
        })
      },
      loadServices: (payload) => {
        dispatch({
          type: LOAD_SERVICES,
          payload: payload
        })
      }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);