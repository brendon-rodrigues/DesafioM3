import React from "react"
import styled from "styled-components"
import navBar from "./navBar"
const Header = styled.header`
    width: 98%;
    height: 80vh;
    margin: 15px auto;
    background: #cecece;
    background-image: url("../assets/desktop/backgroundheader.png");
`
export default function HeaderComponent (){
    return(
        <Header>
            {navBar()}
        </Header>
    )
}