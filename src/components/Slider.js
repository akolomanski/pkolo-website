import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Img from 'gatsby-image';
import styled from 'styled-components';

const StyledWrapper = styled.div`
    width: 30vw;
    float:right;
    margin-left: auto;
    margin-right: auto;
    background-color: white;
    .carousel .slide{
        background: white;
    }
`;

const Slider = ({ props }) => {
	return (
		<StyledWrapper>
			<Carousel showThumbs={false} autoPlay={true} infiniteLoop={true}>
				{props.map((photo) => {
					return <Img fluid={photo.fluid} />;
				})}
			</Carousel>
		</StyledWrapper>
	);
};

export default Slider;
