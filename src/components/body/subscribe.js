import React from "react";
import styled from "styled-components";
const SubscribeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 60vh;
    background-color: #DFE4DE;
        h2{
            font-size: 40px;
        }
        p{
        margin-bottom: 30px;
        font-size: 26px;
        font-weight: lighter;
    }
    input{
        width: 25vw;
        height: 8vh;
    }
`;
const SubmitButton = styled.button`
    width: 10vw;
    height: 6vh;
    border: 2px solid black;
    background: none;
    margin: 15px;
`;
export default function SubscribeComponent(){
    return(
        <SubscribeContainer>
            <h2> SUBSCRIBE </h2>
            <p>Sign up for newsletter</p>
            <input type="email" placeholder="Your Email" />
            <SubmitButton> SUBMIT</SubmitButton>
        </SubscribeContainer>
    );
}