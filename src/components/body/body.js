import React from "react";
import styled from "styled-components";
import "./body.css";
import SubscribeComponent from "./subscribe";
import Imagembolo from "../assets/desktop/cake-horizontal.png"
import Pizza from "../assets/desktop/foodiesfeed.com_neapolitan-pizza-margherita.png"
import Smoothie from "../assets/desktop/foodiesfeed.com_peanut-butter-and-banana-smoothie.png"

export default function BodyComponent (){
    return(
        <body>
          
           
            
        <section>
            <div className="TitleBox">
                <h1>LATEST RECIPES</h1>
            </div>
            <div className="container-receitas">
                    
                <div className="caixa-receita">
                    <img className="Img" src={Imagembolo} alt=""/>
                    <div className="receita-title">
                        <h3>Red Velvet Cake</h3>
                    </div>
                </div>

                <div className="caixa-receita">
                    <img className="Img" src={Pizza} alt=""/>
                    <div className="receita-title">
                        <h3>Margherita Pizza</h3>
                    </div>
                </div>

                <div className="caixa-receita">
                    <img className="Img" src={Smoothie} alt=""/>
                    <div className="receita-title">
                        <h3>Penaut Smoothie</h3>
                    </div>
                </div>
            </div>
        </section>
        {SubscribeComponent()}
        </body>
    )
}