import React from "react"
import styled from "styled-components"
import Colher from "../assets/desktop/colher.png"
const Spoon=styled.div`
display: flex;
justify-content: space-around;
width: 100%;
`;
const H2=styled.h2`
margin: 5%;
`;
const P=styled.p`
font-size: 1.1em;
width: 540px;
`;
const ImgPrimary = styled.img`
    width: 50%;
`;
const BoxText = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
export default function AboutComponent (){
    return(
        <>
        <Spoon>
        <ImgPrimary src={Colher} alt="" />
        <BoxText>
            <H2>ABOUT</H2>
            <P>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt, tortor nec rhoncus dictum, lorem massa tempus sem, eu tincidunt libero velit sit amet velit. Nunc in euismod urna. Duis dapibus, elit eu eleifend tincidunt, nulla ipsum consectetur lorem, quis tempor lorem justo quis nisi. Nam interdum, nisi nec mollis sagittis, enim risus euismod nisi, quis rutrum quam augue id mauris. Pellentesque mattis hendrerit semper. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut vestibulum nisl ante, et ultricies sapien facilisis aliquam.
            </P>
        </BoxText>
    </Spoon> 
        </>
    );
}