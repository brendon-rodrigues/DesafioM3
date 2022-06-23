import React from "react";
import styled from "styled-components";
import "./body.css";
import SubscribeComponent from "./subscribe";
export default function BodyComponent (){
    
    return(
        <body>
        <section>
        <div className="TitleBox">
                <h1>LATEST RECIPES</h1>
            </div>
        </section>
        {SubscribeComponent()}
        </body>
    )
}