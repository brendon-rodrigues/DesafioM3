import React from "react"
import styled from "styled-components"
const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    h2{
        font-size: 1.7em;
        margin-left: 30px;
    }
`;
export const UlStyle = styled.ul`
    display: flex;
    align-items: center;
    padding: 10px;
    li{
        margin: 10px;
    }
`;
export const SubscribeButton = styled.button`
    width: 13vw;
    height: 9vh;
    font-size: 16px;
    background: none;
    border: none;
    &&:hover{
        border: 2px solid black;
    }
`;
export const Menu = ()=>{
    return(
        <UlStyle>
            <li>ABOUT</li>
            <li>RECIPES</li>
            <li><SubscribeButton>SUBSCRIBE</SubscribeButton></li>
        </UlStyle>
    );
};
export default function navBar(){
    return(
        <Nav>
            <div>
                <h2>RC</h2>
            </div>
            <div>
                {Menu()}
            </div>
        </Nav>
    );
}