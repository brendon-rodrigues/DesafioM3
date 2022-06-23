import React from "react";
<<<<<<< HEAD
import Imagembolo from "../assets/desktop/cake-horizontal.png"
import Pizza from "../assets/desktop/foodiesfeed.com_neapolitan-pizza-margherita.png"
import Smoothie from "../assets/desktop/foodiesfeed.com_peanut-butter-and-banana-smoothie.png"
import styled from "styled-components";
import "./body.css";
import SubscribeComponent from "./subscribe";

=======
import styled from "styled-components";
import "./body.css";
import SubscribeComponent from "./subscribe";
>>>>>>> 94fbc37807e98291d863a241bfbb5c63ebcaab9a
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