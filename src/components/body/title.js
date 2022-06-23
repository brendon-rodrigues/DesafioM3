import React from "react"
import styled from "styled-components"
const RecipesTitle = styled.h2`
    font-size: 2.4em;
    text-align: center;
    margin-top: 10%;
    color: #373737;
`;
const RecipesTitleContainer = styled.div`
    width: 100%;
    background-color:  #F2F4F1;
    display: flex;
    align-items: baseline;
    justify-content: center;
`;
export default function TitleComponent (){
    return(
        <RecipesTitleContainer>
            <RecipesTitle>RECIPES</RecipesTitle>
        </RecipesTitleContainer>
    );
}