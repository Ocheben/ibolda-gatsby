import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Img from "gatsby-image";
import { Content, SText } from './styledComponents';

const Gallery = ({ gallery }) => {
  return (
    <Content as={Carousel} flex align="center" autoPlay infiniteLoop>
      {
        Array.isArray(gallery) && gallery.map(item => (
          <Content flex align="center">
            {item.image.childImageSharp === null ? (
                <img src={item.image.publicURL} alt={item.caption} />
              ) : (
                <Img fluid={item.image.childImageSharp.fluid} alt={item.caption} />
              )}
              <img src={item.image.publicURL} alt={item.caption} />
                <SText className="legend" size="18px">{item.caption}</SText>
            </Content>
        ))
      }
    </Content>
  )
}

export default Gallery;
