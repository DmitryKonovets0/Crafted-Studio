import React, {Component} from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import star from "../../assets/icons/star-orange.svg";

import graySofa from '../../assets/images/sofas/sofa_gray.png'
import silverSofa from '../../assets/images/sofas/sofa_silver.png'
import orangeSofa from '../../assets/images/sofas/sofa_orange.png'
import arrow from "../../assets/icons/arrow-slider.svg";

const SofasSection = styled.section`
    height: 900px;
    margin-top: 200px;
`, Container = styled.div`
    margin: 0 auto;
`, TitleWrapper = styled.div`
    display: flex;
    gap: 169px;
    margin-left: 77px;
`, Title = styled.h2`
    color: #fff;
    font-size: 50px;
    font-weight: 700;
`, Slide = styled.img`
    padding-right: 10px;
    margin-top: 120px;
    margin-left: 77px;
`, Arrow = styled.img`
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
            style={{ ...style, right: '77px', top:"780px" }}
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
            style={{ ...style, left: '77px', top:"750px", transform: 'rotate(180deg)' }}
            onClick={onClick}
        />
    );
};
export default class Sofas extends Component {
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
            <SofasSection>
                <Container>
                    <TitleWrapper>
                        <Title>
                            Sofas
                        </Title>
                        <img src={star} alt=""/>
                    </TitleWrapper>
                    <Slider {...settings}>
                        <Slide src={graySofa} alt=""/>
                        <Slide src={silverSofa} alt=""/>
                        <Slide src={orangeSofa} alt=""/>
                        <Slide src={graySofa} alt=""/>
                        <Slide src={silverSofa} alt=""/>
                        <Slide src={orangeSofa} alt=""/>
                    </Slider>
                </Container>
            </SofasSection>
        )
    }
}
