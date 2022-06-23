import React from "react"
import styled from "styled-components"
import Colher from "../assets/desktop/colher.png"
const Spoon=styled.div`
display: flex;
width: 20%;
margin-left:-90vw;
margin-top:-100vh;
`
const H2=styled.h2`
margin-left:45vw;
margin-top:-168vh;
`
const P=styled.p`
margin-left:-18.5vw;
margin-top:-130vh;
width: 576px;
`
const ImgPrimary = styled.img`
    width: 30vw;
`
export default function AboutComponent (){
    return(
        <>
        <Spoon>
        <ImgPrimary src={Colher} alt="" />
        <H2>ABOUT</H2>
        <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt, tortor nec rhoncus dictum, lorem massa tempus sem, eu tincidunt libero velit sit amet velit. Nunc in euismod urna. Duis dapibus, elit eu eleifend tincidunt, nulla ipsum consectetur lorem, quis tempor lorem justo quis nisi. Nam interdum, nisi nec mollis sagittis, enim risus euismod nisi, quis rutrum quam augue id mauris. Pellentesque mattis hendrerit semper. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut vestibulum nisl ante, et ultricies sapien facilisis aliquam.</P>

    </Spoon> 
        </>
    )
}