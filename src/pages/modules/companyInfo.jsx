import React, { Component } from 'react';
import styled from 'styled-components';

import star from "../../assets/icons/star-orange.svg"
import block from "../../assets/../assets/images/Rectangle-CompanyInfo.svg"
const CompanySection = styled.section`
    height: 660px;
    padding-top: 130px;
`,Container = styled.div`
    width: 90%;
    margin: 0 auto;
`, FlexContainer = styled.div`
    display: flex;
    align-items: flex-end;
    grid-gap: 10px;
    justify-content: space-between;
`,BigBlock = styled.div`
    width: 67%;
    height: 430px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    background-image: url(${block});
    background-size: cover;
    border-radius: 40px;
    background-repeat: no-repeat;
`,Star = styled.img`
    width: 10%;
    position: absolute;
    top: -8%;
    right: 19.5%;
`,TitleBigBlock = styled.h2`
    padding-left: 31px;
    font-size: 50px;
    font-weight: 700;
`,SubtitleBigBlock = styled.h3`
    font-size: 25px;
    font-weight: 400;
    padding-left: 31px;
`,LastMiniBlockWrapper = styled.div`
    gap: 10px;
    display: flex;
    flex-direction: column;
`, MiniBlockWrapper = styled.div`
    display: flex;
    align-items: flex-end;
    gap: 10px;
`,
    BlockMini = styled.div`
    width: 210px;
    height: 210px;
    border-radius: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 16px;
`,BlockMiniOrange = styled(BlockMini)`
    background: rgb(195, 129, 84);
`,BlockMiniPink = styled(BlockMini)`
    background: rgb(183, 150, 150);
`,BlockMiniTransparent = styled(BlockMini)`
    border: 2px solid rgb(248, 237, 227);
`,BlockMiniNumber = styled.h2`
    font-size: 50px;
    font-weight: 700;
    text-align: center;
    color: rgb(43, 43, 43);
`,BlockMiniDescr = styled.h3`
    font-size: 25px;
    font-weight: 400;
    line-height: 32px;
    text-align: center;
    color: rgb(43, 43, 43);
`,BlockMiniNumberTransparent = styled(BlockMiniNumber)`
    color: rgb(251, 251, 251);
`,BlockMiniDescrTransparent = styled(BlockMiniDescr)`
    color: rgb(251, 251, 251);
`
export default class CompanyInfo extends Component {
    render() {
        return(
            <CompanySection>
                <Container>
                    <FlexContainer>
                            <BigBlock>
                                <TitleBigBlock>
                                    Crafted aims to create
                                </TitleBigBlock>
                                <SubtitleBigBlock>
                                    a space where you will enjoy every moment.
                                </SubtitleBigBlock>
                                <Star src={star} alt=""/>

                            </BigBlock>
                        <MiniBlockWrapper>
                            <BlockMiniOrange>
                                <BlockMiniNumber>
                                    10
                                </BlockMiniNumber>
                                <BlockMiniDescr>
                                    years on the market
                                </BlockMiniDescr>
                            </BlockMiniOrange>
                            <LastMiniBlockWrapper>
                                <BlockMiniPink>
                                    <BlockMiniNumber>
                                        120
                                    </BlockMiniNumber>
                                    <BlockMiniDescr>
                                        created furniture collections
                                    </BlockMiniDescr>
                                </BlockMiniPink>
                                <BlockMiniTransparent>
                                    <BlockMiniNumberTransparent>
                                        +30
                                    </BlockMiniNumberTransparent>
                                    <BlockMiniDescrTransparent>
                                        top designers of today
                                    </BlockMiniDescrTransparent>
                                </BlockMiniTransparent>
                            </LastMiniBlockWrapper>
                        </MiniBlockWrapper>

                    </FlexContainer>
                </Container>
            </CompanySection>
        )
    }
}