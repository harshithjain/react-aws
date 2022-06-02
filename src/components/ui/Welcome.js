import React, { useState, useEffect } from 'react';
import axios from 'axios';
//import galleryImagesData from './data/gallery_images.json';

class Welcome extends React.Component {

  constructor(props) {
    super(props);
    this.loadGalleryImagesData = this.loadGalleryImagesData.bind(this);
  }

  loadGalleryImagesData = async() => {
    const response = await axios.get(`https://bqgn8o5c4d.execute-api.us-east-1.amazonaws.com/Development/images`)
                        .then(response => response.data)
    this.props.loadGalleryImages(response);

  }
  componentWillMount() {
    this.loadGalleryImagesData();
  }

  render() {
    const {galleryImagesData} = this.props;
    return(
      <div className="scene" id="welcome">
          <article className="content">
            <div className="gallery">
              {
                galleryImagesData.map((images) => 
                  <img key={images.src} className={images.className} src={images.src} alt={images.alt} />
                )
              }
            </div>
            <h1>Welcome to the Landon&nbsp;Hotel</h1>
            <p>The original Landon perseveres after 50 years in the heart of West London. The West End neighborhood has something for everyone—from theater to dining to historic sights. And the not-to-miss Rooftop Cafe is a great place for travelers and locals to engage over drinks, food, and good&nbsp;conversation. &nbsp;To learn more about the Landon Hotel in the West End, browse our website and <a href="files/landon_information_sheet_London.pdf">download our handy information sheet</a>.</p>
          </article>
      </div>
    );
  }
    // const [galleryImagesData, setGalleryImagesData] = useState([]);

    // const loadGalleryImagesData = async() => {
    //     //Query API Gateway
    //     const response = await axios.get(`https://bqgn8o5c4d.execute-api.us-east-1.amazonaws.com/Development/images`);
    //     setGalleryImagesData(response.data);
    // }
    
    // useEffect(() => {
    //     loadGalleryImagesData();
    // }, [])
    // return(
    //     <div className="scene" id="welcome">
    //         <article className="content">
    //           <div className="gallery">
    //             {
    //               galleryImagesData.map((images) => 
    //                 <img key={images.src} className={images.className} src={images.src} alt={images.alt} />
    //               )
    //             }
    //           </div>
    //           <h1>Welcome to the Landon&nbsp;Hotel</h1>
    //           <p>The original Landon perseveres after 50 years in the heart of West London. The West End neighborhood has something for everyone—from theater to dining to historic sights. And the not-to-miss Rooftop Cafe is a great place for travelers and locals to engage over drinks, food, and good&nbsp;conversation. &nbsp;To learn more about the Landon Hotel in the West End, browse our website and <a href="files/landon_information_sheet_London.pdf">download our handy information sheet</a>.</p>
    //         </article>
    //     </div>
    // );
}

export default Welcome;