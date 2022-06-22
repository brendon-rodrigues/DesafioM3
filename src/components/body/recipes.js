import React from "react"
import Imagembolo from "../assets/desktop/cake-horizontal.png"
import Pizza from "../assets/desktop/foodiesfeed.com_neapolitan-pizza-margherita.png"
import Smoothie from "../assets/desktop/foodiesfeed.com_peanut-butter-and-banana-smoothie.png"
export default class Recipes extends React.Component{
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
            <>
                {this.state.recipeslist.map((item)=>(
                    <>
                        <img src={item.img} />
                    </>
                ))}
            </>
        )
    }
}