import React from 'react';
import HotelInfo from './HotelInfo';
import Welcome from './Welcome';

class Main extends React.Component{
    render() {
        return(
            <main id="wrapper">
                <Welcome loadGalleryImages = {this.props.loadGalleryImages} galleryImagesData = {this.props.galleryImagesData} />
                <HotelInfo hotelServicesData = {this.props.hotelServicesData} loadServices = {this.props.loadServices} />
            </main>
        );
    }
}

export default Main;