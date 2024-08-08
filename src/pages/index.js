import React from "react"
import {Component} from "react";
import styled, {createGlobalStyle} from "styled-components";

import Introduce from '../pages/modules/introduce'
import CompanyInfo from './modules/companyInfo'
import Offer from "../pages/modules/offer";

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        font-style: normal;
    }
    body{
        background: #2b2b2b;
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
        </div>
    )
  }
}
export const Head = () => <title>Home Page</title>
