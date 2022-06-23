import React from "react"
import Imagembolo from "../assets/desktop/cake-horizontal.png"
import Pizza from "../assets/desktop/foodiesfeed.com_neapolitan-pizza-margherita.png"
import Smoothie from "../assets/desktop/foodiesfeed.com_peanut-butter-and-banana-smoothie.png"
import styled from "styled-components"
const RecipesArea = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 140vh;
    background: #F2F4F1;
`
const RecipesContainer = styled.div`
    display: flex;
`
const RecipesBox = styled.div`
     display: flex;
    flex-direction: column;
    height: 80vh;
    margin: 30px 20px;
    box-shadow: 0px 7px 6px #00000029;
    background: #fff;
    `
const RecipeTitle = styled.div`
     width: 100%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #373737;
`
const Img = styled.img`
    width: 25vw;
`
export default class RecipesComponent extends React.Component{
    state={
        recipeslist:[
            {
                img: Imagembolo,
                title: "Red Velvet Cake"
            },
            {
                img: Pizza,
                title: "Margherita Pizza"
            },
            {
                img:  Smoothie,
                title:" Penaut Smoothie"
            }
        ]
    }
    render(){
        return(
            <RecipesArea>
              <RecipesContainer>
                {this.state.recipeslist.map((item)=>(
                        <RecipesBox>
                            <Img src={item.img} />
                            <RecipeTitle>
                                <h3>{item.title}</h3>
                            </RecipeTitle>
                        </RecipesBox>
                    ))}
              </RecipesContainer>
                
            </RecipesArea>
        )
    }
}