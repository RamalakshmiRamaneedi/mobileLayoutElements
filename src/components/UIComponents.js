import React, { Component } from "react";
import styled , { css } from "styled-components";
import useWindowWidth from './WindowWidth.js';

const PFontFactor = (width) =>{
    let factor = width > 500 ? Math.trunc(0.005*(width - 500)) : 0
    return factor
}

//Parent Paragraph
 export const Para = styled.p.attrs(props => {
    let width = useWindowWidth(window.innerWidth)
    return {
        pageWidth: width
    }
})`
    font-size: ${({ pageWidth }) => pageWidth < 480 ? "1rem" : `calc(1rem + ${2 * PFontFactor(pageWidth)}px)`};
    font-family:  ${({ ffamily }) => ffamily || "Open Sans"}/*Roboto*/;
    text-align: center;
    font-style: normal;
    padding:1vh 1vw;;
    `;

//Main text for block sections
export const SectionText = styled(Para).attrs(props => {
    let width = useWindowWidth(window.innerWidth)
    return {
        pageWidth: width
    }
})`
  color: #000000;
  font-family: Roboto;
  font-style: normal;
  padding: 1vh 1vw;
  `;
   
export const Title = styled.h3`
 font-size: ${({ pageWidth }) => pageWidth < 480 ? "1.25rem" : `calc(1.25rem + ${2 * PFontFactor(pageWidth)}px)`};;
 color: #000000;
 text-align: center;
 text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
 font-style: normal;
 line-height: normal;
 letter-spacing: 1px;
 font-family: "Open Sans";
 font-weight: 700;
  `;

export const SectionTitle = styled.h2.attrs(props => { //changed from p to h2
    let width = useWindowWidth(window.innerWidth)
    return {
        pageWidth: width
    }
})`
font-family: "Open Sans";
  color: #000000;
  font-weight: 600;
  text-align: center;
 font-style: normal;
 line-height: normal;
 letter-spacing: 1px;
 align-items:center;
 text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
 font-size: ${({ pageWidth }) => pageWidth < 480 ? "1.5rem" : `calc(1.5rem + ${2 * PFontFactor(pageWidth)}px)`};;
  `;

 export const SubTitle=styled(Title)`
  font-family:"Open Sans"; 
  font-weight: 700;
  text-underline-offset: 11px;
  text-decoration:underline 2px solid #059950;
  font-size: ${({fontSize}) => fontSize || "1.5rem"};
  font-size: ${({ pageWidth }) => pageWidth < 480 ? "1.5rem" : `calc(1.5rem + ${2 * PFontFactor(pageWidth)}px)`};;
  `;

  //Card Text
   export const CardText =styled(Para)`
  color: ${({fontColor}) => fontColor || "#000000"};
  margin: 1vh 1vw;
`;

//Parent Button Component
  export const Button=styled.button.attrs(props =>{
    let width = useWindowWidth(window.innerWidth)
    return {
            pageWidth: width
    }
  })`
  font-family: ${({ffamily}) => ffamily || "Roboto"};
  font-size:  ${({fontSize}) => fontSize || "20px"};  //"1.25rem"
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  border-radius: 1rem;   
  padding:1vh 3vw; 
  text-align:center;
  `;


//Parent Image Component
export const Img = styled.img.attrs(props =>{
    let width = useWindowWidth(window.innerWidth)
    return {
            pageWidth: width
    }
})`
padding:1vh 1vw;
height: ${({height}) => height || "auto"};
`;

export const CardImage =styled(Img)`

width: ${({width, pageWidth}) => width || (pageWidth < 480 ? "90%" : "20vw") };

margin: 2vh 2vw;
 `;

 export const HeroSectionImage =styled(Img)`
 margin: 2vh 2vw;
 width: ${({width, pageWidth}) => width || (pageWidth < 480 ? "80%" : "35vw") };
 border:2px solid #2B6F50;
 border-radius: 1.875rem;  
  `;

 export const LRImage =styled(Img)`
  margin: 1vh 2vw;
  width:${({width, pageWidth}) => width || (pageWidth < 480 ? "38.625rem" : "38.625rem") };
  height:15.125rem ;
  float:left;

   `;
 export  const RLImage =styled(Img)`
  margin: 1vh 2vw;
  width: ${({width, pageWidth}) => width || (pageWidth < 480 ? "75%" : "25vw") };
  height: ${({height}) => height || "auto"};
  padding:5px;
   margin-left: 30px;
   `;

   
  

  



  