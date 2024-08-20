import React, { Component } from 'react';
import styled from 'styled-components';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import star from "../../assets/icons/star-pink.svg";

import armchair from "../../assets/images/bestseller/armchair.png";
import hangingChair from "../../assets/images/bestseller/armchair-2.png";
import clock from "../../assets/images/bestseller/clock.png";
import arrow from "../../assets/icons/arrow-slider.svg";

const BestsellersSection = styled.section`
    height: 900px;
    position: relative;
`, Container = styled.div`
    margin: 0 auto;
`, TitleWrapper = styled.div`
    margin-left: 77px ;
    display: flex;
    gap: 50px;
    margin-bottom: 120px;
`,Title = styled.h2`
    font-size: 50px;
    font-weight: 700;
    color: #fff;
`,Slide = styled.img`
    padding-right: 10px;
    margin-left: 77px;
`,Arrow = styled.img`
    width: 60px; 
    height: 60px;
    cursor: pointer;
`;
const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <Arrow
            src={arrow}
            alt="Next"
            className={className}
            style={{ ...style, right: '77px', top:"630px" }}
            onClick={onClick}
        />
    );
};

const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <Arrow
            src={arrow}
            alt="Previous"
            className={className}
            style={{ ...style, left: '77px', top:"609px", transform: 'rotate(180deg)' }}
            onClick={onClick}
        />
    );
};
export default class Bestsellers extends Component {
    render() {
        const settings = {
            speed: 500,
            slidesToShow: 2.8,
            slidesToScroll: 1,
            infinite: false,
            centeredSlides: true,
            center: false,
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />
        };
        return(
            <BestsellersSection>
                <Container>
                    <TitleWrapper>
                        <Title>
                            Bestsellers
                        </Title>
                        <img src={star} alt=""/>
                    </TitleWrapper>
                    <div>
                        <Slider {...settings}>
                            <Slide src={armchair} alt=""/>
                            <Slide src={hangingChair} alt=""/>
                            <Slide src={clock} alt=""/>
                            <Slide src={armchair} alt=""/>
                            <Slide src={hangingChair} alt=""/>
                            <Slide src={clock} alt=""/>
                            <Slide src={armchair} alt=""/>
                            <Slide src={hangingChair} alt=""/>
                            <Slide src={clock} alt=""/>
                        </Slider>
                    </div>
                </Container>
            </BestsellersSection>
        )
    }

}