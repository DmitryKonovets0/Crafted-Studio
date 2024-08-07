import React from "react"
import {Component} from "react";
import styled from "styled-components"


import chair from '../../assets/images/long-chair.png'
const IntroduceSection = styled.section`
    height: 869px;
    padding-top: 74px;
`, Container = styled.div`
    width: 90%;
    margin: 0 auto;
`, Header = styled.header`
    display: flex;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    width: 104%;
    margin: 0 auto;
    justify-content: space-between;
`, Logo = styled.div`
    color: #fff;
    font-size: 30px;
    margin-right: 414px;
`, LinkWrapper = styled.div`
    color: #fff;
    font-size: 20px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`, Link = styled.a``
, BlockWrapper = styled.div`
    margin-top: 255px;
    display: flex;
`, Block = styled.div`
    padding: 31px;
    width: 80%;
    height: 433px;
    border-radius: 40px;
    background-color: rgb(248, 237, 227);
    margin-right: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`, BlockTitle = styled.h2`
    font-size: 50px;
    padding-right: 31px;
    color: #000;
`, BlockSubTitle = styled.h3`
    font-size: 25px;
    color: #000;
`, Picture = styled.img`
    border-radius: 40px;
    width: 40%;
`



export default class Introduce extends Component {

    render() {
        return(
            <IntroduceSection>
                <Container>
                    <Header>
                        <Logo>Crafted</Logo>
                        <LinkWrapper>
                            <Link> About</Link>
                            <Link>Our designers</Link>
                            <Link>Bestsellers</Link>
                            <Link>Creations</Link>
                            <Link>Visit</Link>
                        </LinkWrapper>
                    </Header>
                    <BlockWrapper>
                        <Block>
                            <BlockTitle>Create your comfort space with Crafted</BlockTitle>
                            <BlockSubTitle>The art of turning space into a masterpiece</BlockSubTitle>
                        </Block>
                        <Picture src={chair}></Picture>
                    </BlockWrapper>
                </Container>
            </IntroduceSection>
        )
    }
}