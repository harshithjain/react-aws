import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Footer = () => {
  const [footerImages, setFooterImages] = useState([]);

  const loadFooterImagesData= async() => {
    const footerImage = await axios.get(`https://bqgn8o5c4d.execute-api.us-east-1.amazonaws.com/Development/footer_images`);

    setFooterImages(footerImage.data);
  }

  useEffect(() => {
    loadFooterImagesData();
  },[]);

  const computeHyperLinkData = (src) => {
    if(src.includes("twitter")) return "https://twitter.com"
    if(src.includes("facebook")) return "https://facebook.com"
    if(src.includes("youtube")) return "https://youtube.com"
  }
  return (
      <footer className="scene">
        <article className="content">
          <div id="socialmedia">
            <ul className="group">
              {
                footerImages.map(image => 
                  <li key={image.src}><a href={computeHyperLinkData(image.src)}><img className={image.className} src={image.src} alt={image.alt} /></a></li>
                )
              }
            </ul>      
          </div>
        </article>
      </footer>
  );
}

export default Footer;