import React from "react";
import AboutComponent from "./about";
import Recipes from "./recipes";
import SubscribeComponent from "./subscribe";
import TitleComponent from "./title";
export default function BodyComponent (){
    return(
        <>
        {TitleComponent()}
        <Recipes />
        {AboutComponent ()}
        {SubscribeComponent()}
        </>
    );
}