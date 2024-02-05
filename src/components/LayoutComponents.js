import React, { Component } from "react";
import styled , { css } from "styled-components";
import useWindowWidth from './WindowWidth.js';


//Block Section 
 export const SectionBlock=styled.div`
display: block;
text-align: center;
`;

export const BlockDiv=styled.div`
 display:block;
 text-align: center;
 padding:1vh 1vw;
 `;

 export const Section =styled(BlockDiv)`
 align-content:center;
 `;

 export const HeroSection=styled(BlockDiv)``;

//FlexBox Section
export const flexSection=styled.div`
display: flex;
flex-wrap: wrap;
text-align: center;
align-item:center;
`;

export const FlexDiv=styled.div.attrs(props =>
{
    let width = useWindowWidth(window.innerWidth)
    return {
             pageWidth: width
    }
})`
display:flex;
align-items:center;
justify-content:space-evenly;
padding:1vh 1vw;
flex-direction: column;
`;

export const SubSection=styled(FlexDiv)`
flex-direction: ${({pageWidth}) => pageWidth < 480 ?  "column" : "row"};
gap:${({pageWidth}) => pageWidth < 480 ?  "10px" : "0"};
margin:1vh 1vw;
`;