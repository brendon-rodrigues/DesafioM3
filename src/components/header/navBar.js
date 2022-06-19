import React from "react"
import styled from "styled-components"
const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    h2{
        font-size: 1.7em;
        margin: 10px;
    }
    `;
const UlStyle = styled.ul`
    display: flex;
    align-items: center;
    padding: 10px;
    li{
        margin: 10px;
    }
`;
const SubscribeButton = styled.button`
    width: 10vw;
    height: 6vh;
    border: 2px solid black;
    background: none;
`
export default function navBar(){
    return(
        <Nav>
            <div>
                <h2>RC</h2>
            </div>
            <div>
                <UlStyle>
                    <li>ABOUT</li>
                    <li>RECIPES</li>
                    <li><SubscribeButton>SUBSCRIBE</SubscribeButton></li>
                </UlStyle>
            </div>
        </Nav>
    )
}