import React from "react"
import styled from "styled-components"
import navBar from "./navBar"
import Background from "../assets/desktop/backgroundheader.png"
const Header = styled.header`
    width: 98%;
    height: 133vh;
    margin: 15px auto;
    border: solid;
    background-image: url(${Background});
    background-size: cover  ;
    background-position: center;
`
const Title = styled.h1`
    text-align: center;
    font-size: 6em;
    color: #373737;
    letter-spacing: 15.75px;
    margin-top: 22%;
` 
export default function HeaderComponent (){
    return(
        <Header>
            {navBar()}
            <Title>RECIPES</Title>
        </Header>
    )
}