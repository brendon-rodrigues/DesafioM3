import React from "react";
import styled from "styled-components";
import "./body.css";
import SubscribeComponent from "./subscribe";
import Imagembolo from "../assets/desktop/foodiesfeed.com_detail-of-pavlova-strawberry-piece-of-cake.png"
import Pizza from "../assets/desktop/foodiesfeed.com_neapolitan-pizza-margherita.png"
import Smoothie from "../assets/desktop/foodiesfeed.com_peanut-butter-and-banana-smoothie.png"

export default function BodyComponent (){
    return(
        <body>
            {SubscribeComponent()}
            <h1>LATEST RECIPES</h1>

        <div className="caixa-cake">
            <img className="cake" src={Imagembolo} alt=""/>
            </div>

            <div className="caixa-pizza">
            <img className="pizza" src={Pizza} alt=""/>
            </div>

            <div className="caixa-smoothie">
            <img className="smoothie" src={Smoothie} alt=""/>
            </div>

        </body>
    )
}