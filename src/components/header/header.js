import React from "react"
import styled from "styled-components"
import navBar from "./navBar"
import Background from "../assets/desktop/backgroundheader.png"
import { createGlobalStyle } from "styled-components"

const Header = styled.header`
    width: 98%;
    height: 98vh;
    margin: 15px auto;
    border: solid;
    background-image: url(${Background});
    background-size: contain;
`
const GlobalStyle = createGlobalStyle `
*{margin: 0;
padding: 0;
box-sizing:border-box;
}
`

export default function HeaderComponent (){
    return(
        <Header>
            <GlobalStyle/>
            {navBar()}
        </Header>
    )
}