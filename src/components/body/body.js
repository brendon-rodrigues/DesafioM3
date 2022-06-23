import React from "react";
import styled from "styled-components";
import AboutComponent from "./about";
import Recipes from "./recipes";
import SubscribeComponent from "./subscribe";
export default function BodyComponent (){
    
    return(
        <>
        <Recipes />
        {SubscribeComponent()}
        </>
    )
}