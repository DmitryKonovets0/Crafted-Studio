import React, { Component } from 'react';
import styled from 'styled-components';

import maxim from '../../assets/images/maxim.png';
import alexandra from '../../assets/images/alexandra.png';
import james from '../../assets/images/james.png';
import emma from '../../assets/images/emma.png';
import arrow from '../../assets/icons/arrow.svg';


const DesignerSection = styled.section`
    height: 1870px;
`, Container = styled.div`
    width: 90%;
    margin: 0 auto;
`, Title = styled.h2`
    font-size: 50px;
    font-weight: 700;
    color: #fff;
    text-align: center;
`, WrapperGrid = styled.div`
    margin-top: 120px;
    display: grid;
    justify-content: center;
    gap: 10px;
    grid-template-areas: 
        "maxim james"
        "emma alexandra";
`, Maxim = styled.img`
    grid-area: maxim;
`, Emma = styled.img`
    grid-area: emma;
`, James = styled.img`
    grid-area: james;
`, Alexandra = styled.div`
    grid-area: alexandra;
    display: flex;
    flex-direction: column;
    align-items: center;
`, DesignersBtn = styled.button`
    margin-top: 70px;
    display: flex;
    background-color: transparent;
    border: none;
    font-size: 25px;
    font-weight: 300;
    color: #fff;
    gap: 20px;
    
`
export default class Designers extends Component {
    render() {
        return(
            <DesignerSection>
                <Container>
                    <Title>
                        Designers with whom we cooperate
                    </Title>
                    <WrapperGrid>
                        <Maxim src={maxim} alt=""/>
                        <James src={james} alt=""/>
                        <Emma src={emma} alt=""/>
                        <Alexandra>
                            <img src={alexandra} alt=""/>
                            <DesignersBtn>
                                All designers
                                <img src={arrow} alt=""/>
                            </DesignersBtn>
                        </Alexandra>
                    </WrapperGrid>
                </Container>
            </DesignerSection>
        )
    }
}