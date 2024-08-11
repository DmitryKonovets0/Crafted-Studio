import React from "react"
import {Component} from "react";
import styled, {createGlobalStyle} from "styled-components";

import OutfitLight from "../assets/fonts/Outfit-Light.ttf";
import OutfitBold from "../assets/fonts/Outfit-Bold.ttf";
import OutfitRegular from "../assets/fonts/Outfit-Regular.ttf";



import Introduce from '../pages/modules/introduce'
import CompanyInfo from './modules/companyInfo'
import Offer from "../pages/modules/offer";
import Designers from "../pages/modules/designers";
import Bestsellers from "../pages/modules/bestsellers";

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'OutfitLight';
        src: url(${OutfitLight}) format('opentype');
        font-weight: 300;
        font-style: normal;
    }
    @font-face {
        font-family: 'OutfitBold';
        src: url(${OutfitBold}) format('opentype');
        font-weight: 700;
        font-style: normal;
    }
    @font-face {
        font-family: 'OutfitRegular';
        src: url(${OutfitRegular}) format('opentype');
        font-weight: 400;
        font-style: normal;
    }
    *{
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        font-style: normal;
    }
    body{
        background: #2b2b2b;
    }
    h2 {
        font-family: 'OutfitBold', sans-serif;
        font-style: normal;
        font-weight: 700;
    }
    h3,li,div,input,button,select {
        font-family: 'OutfitRegular', sans-serif;
        font-weight: 400;
        font-style: normal;

    }
`
export default class IndexPage extends Component {

  render() {
    return (
        <div>
            <GlobalStyle/>
            <Introduce/>
            <CompanyInfo/>
            <Offer/>
            <Designers/>
            <Bestsellers/>
        </div>
    )
  }
}
export const Head = () => <title>Home Page</title>
