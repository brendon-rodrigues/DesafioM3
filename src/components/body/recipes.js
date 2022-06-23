import React from "react"
import styled from "styled-components"
import Imagembolo from "../assets/desktop/cake-horizontal.png"
import Pizza from "../assets/desktop/foodiesfeed.com_neapolitan-pizza-margherita.png"
import Smoothie from "../assets/desktop/foodiesfeed.com_peanut-butter-and-banana-smoothie.png"

const H3=styled.h3`
font-style: normal normal normal 32px/32px Hurme Geometric Sans 1;
font-size: 1.1em;
color: #373737
`
const Img = styled.img`
width: 25vw;
`
const Section=styled.section`
margin-left:5.5vw;
display: flex;
height: 80vh;
flex-direction: column;
box-shadow: 6px 7px 6px #00000029;
  background: #fff;
`
const Div=styled.div`
display: inline-flexbox;
display: flex;
align-items: center;
height: 100vh;
`
const TextBox = styled.div`
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
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
                        <TextBox>
                            <H3>{item.title}</H3>
                        </TextBox>
              
                    </Section> 
                ))}    
            </Div>
        )
    }
}