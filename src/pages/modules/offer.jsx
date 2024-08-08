import React, { Component } from 'react';
import styled from 'styled-components';

import world from "../../assets/icons/earth.svg"
import filter from "../../assets/icons/filter.svg"
import sofa from "../../assets/icons/sofa.svg"

const OfferPage = styled.div`
    height: 890px;
    margin-top: 267px;
`,Container = styled.div`
    width: 80%;
    margin: 0 auto;
`,Title = styled.h2`
    text-align: center;
    font-size: 50px;
    font-weight: 700;
    color: #fff
`, BlockWrapper = styled.div`
    margin-top: 120px;
    justify-content: space-around;
    display: flex;
`,Block = styled.div`
    display: flex;
    flex-direction: column;
    width: 210px;
    height: 210px;
    border-radius: 40px;
    align-items: center;
    justify-content: center;
`,BlockPink = styled(Block)`
    background: rgb(183, 150, 150);
`,BlockCreamy = styled(Block)`
    background: rgb(248, 237, 227);
`,BlockBrown = styled(Block)`
    background: rgb(195, 129, 84);
`,BlockImage = styled.img`
    width: 52px;
`,BlockDescr = styled.h2`
    width: 151px;
    margin-top: 20px;
    font-size: 25px;
    font-weight: 400;
    line-height: 32px;
    color: rgb(43, 43, 43);
    text-align: center;
`
export default class Offer extends Component {

    render() {
        return(
            <OfferPage>
                <Container>
                    <Title>
                        We offer
                    </Title>
                    <BlockWrapper>
                        <BlockPink>
                            <BlockImage src={world} alt=""/>
                            <BlockDescr>
                                Worldwide delivery
                            </BlockDescr>
                        </BlockPink>
                        <BlockCreamy>
                            <BlockImage src={filter} alt=""/>
                            <BlockDescr>
                                Many categories
                            </BlockDescr>
                        </BlockCreamy>
                        <BlockBrown>
                            <BlockImage src={sofa} alt=""/>
                            <BlockDescr>
                                Various models
                            </BlockDescr>
                        </BlockBrown>
                    </BlockWrapper>
                </Container>
            </OfferPage>
        )
    }

}