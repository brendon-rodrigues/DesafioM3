import React from "react"
import styled from "styled-components"
import { Menu } from "../header/navBar"
import Facebook from "../assets/desktop/facebook.png"
import Twitter from "../assets/desktop/twitter.png"
import Instagram from "../assets/desktop/instagram.png"
import Pinterest from "../assets/desktop/pinterest.png"
const SocialMedia = styled.div`
    width: 30%;
    img{
        width: 2.5vw;
        margin: 5px;   
    }
`;
const Footer = styled.footer`
    display: flex;
    display: 100%;
    height: 30vh;
    justify-content: space-around;
    align-items: center;
    p{
        width: 100%;
        height: 4vh;
        background-color: #446061;
    }
`;
export default function FooterComponent (){
    return(
        <Footer>
            <SocialMedia>
               <a href=""> <img src={Facebook} alt="logo do facebook" /></a>
               <a href=""> <img src={Twitter} alt="logo do twitter" /></a>
               <a href=""> <img src={Instagram} alt="logo do instagram" /></a>
               <a href=""> <img src={Pinterest} alt="logo do pinterest" /></a>
            </SocialMedia>
            <div>
                {Menu()}
            </div>
        </Footer>
    );
}
