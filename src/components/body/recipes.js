import React from "react"
import styled from "styled-components"
import Imagembolo from "../assets/desktop/cake-horizontal.png"
import Pizza from "../assets/desktop/foodiesfeed.com_neapolitan-pizza-margherita.png"
import Smoothie from "../assets/desktop/foodiesfeed.com_peanut-butter-and-banana-smoothie.png"
import Colher from "../assets/desktop/pexels-karolina-grabowska-4199094@2x.png"

const Spoon=styled.div`
display: flex;
width: 20%;
margin-left:-90vw;
margin-top:-100vh;
`
const H3=styled.h3`
font-style: normal normal normal 32px/32px Hurme Geometric Sans 1;
font-size: 1.1em;
color: #373737
`
const Img=styled.img`
width: 25vw;
`
const ImgPrimary=styled.img`
width: 40vw;
`
const Section=styled.section`
height: 77vh;
margin-left:5.5vw;
margin-top:-275vh;
display: flex;
box-shadow: 6px 7px 6px #00000029;
  background: #fff;
`
const Div=styled.div`
display: inline-flexbox;
display: flex;
align-items: center;
`
const Title=styled.title`
display: inline-flexbox;
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

export default class Recipes extends React.Component{
    

    state={
        recipeslist: [
            {img: Imagembolo, title: "RED VELVET CAKE"},
            {img: Pizza, title:"MARGHERITA PIZZA"},
            {img: Smoothie, title: "PENAUT SMOOTHIE"}
        ]
    }


    render(){
        return(
            <Div>
               {this.state.recipeslist.map(item => (
                <Section>
                    <Img src={item.img}/>
                    <Title><H3>{item.title}</H3></Title>
                    </Section> 
               ))}
               <Spoon><ImgPrimary src={Colher} alt="" /></Spoon> 
               <H2>ABOUT</H2>
               <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt, tortor nec rhoncus dictum, lorem massa tempus sem, eu tincidunt libero velit sit amet velit. Nunc in euismod urna. Duis dapibus, elit eu eleifend tincidunt, nulla ipsum consectetur lorem, quis tempor lorem justo quis nisi. Nam interdum, nisi nec mollis sagittis, enim risus euismod nisi, quis rutrum quam augue id mauris. Pellentesque mattis hendrerit semper. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut vestibulum nisl ante, et ultricies sapien facilisis aliquam.</P>
            </Div>
        )
    }
}