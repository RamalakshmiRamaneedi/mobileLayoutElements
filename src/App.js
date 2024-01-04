import React, { Component } from "react";
import styled from "styled-components";
//import iguana from './components/Navbar/iguana.jpg';
import food from './components/Navbar/food.jpg';
import zero from './components/Navbar/zero.jpg';
import  {useState, useEffect} from "react";
import veg from './components/Navbar/veg.jpg';
import logo from './components/Navbar/Greenlogo.svg';
import { StyledEngineProvider } from "@mui/styled-engine-sc";
import { green } from "@mui/material/colors";

 const StyledButton = styled.button.attrs(props =>{
  let width = useWindowWidth(window.innerWidth)
  return {
          pageWidth: width
  }
})`
  border-radius: 45px;
  display: block;
  border: 5px solid ${({bgColor}) => bgColor || "var(--black)"};
  font-weight: bold;
  color: ${({bgColor}) => bgColor ? "var(--white)" : "var(--green)"};
  text-align: center;
  min-width: max(60px, 10vw);
  font-size: 1em;
  cursor: pointer;
  left: ${({left})=> left || "auto"};
  margin: ${({pageWidth}) => pageWidth < 480 ? "1vh auto" : "2vh 25%"};
  padding: ${({pageWidth}) => pageWidth < 480 ? "3vw" : "1.5vw"};
  background-color:skyblue;
`;


const SPara = styled.p`
 let width = useWindowWidth(window.innerWidth)
  return {
          pageWidth: width
  }
font-size: "14px";
text-align: center;        
color: black;
font-family: Open-Sans;
`;
   



const PFontFactor = (width) =>{
  let factor = width > 500 ? Math.trunc(0.005*(width - 500)) : 0
  return factor
}

const HeadOne = styled.h1.attrs(props =>{
  let width = useWindowWidth(window.innerWidth)
  return {
          pageWidth: width
  }
})`
  text-align: center;
  margin: ${({margin}) => margin || "2vh auto"};
  font-size: ${({pageWidth}) => pageWidth < 480 ? "24px" : `calc(2em + ${2*PFontFactor(pageWidth)}px)`};
  color: ${({fontColor}) => fontColor || "var(--sblack)"};
  font-family: ${({ffamily}) => ffamily || "var(--font-family-Open-Sans)"};
  background-color: ${({bgColor}) => bgColor || "var(--white)"};
`;



const useWindowWidth = () => {
    const [width, setWidth] = useState(window.innerWidth);
  
    useEffect(() => {
      function handleResize() {
        setWidth(window.innerWidth);
      }
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
    // console.log("The window width is", width);
    return width;
}


 const FlexDiv = styled.div`
        display: flex;
        flex-wrap: wrap;
        text-align: center;
        justify-content: space-evenly;
`;

 const Section = styled(FlexDiv).attrs(props =>{
  let width = useWindowWidth(window.innerWidth)
  return {
          pageWidth: width
  }
})`
  padding: 1vh 1vw;
  flex-wrap: ${({wrap}) => wrap ? "wrap" : "nowrap"};
  align-items: center;
  overflow: hidden;
  background-color: ${({bgColor}) => bgColor || "var(--white)"};
  justify-content: ${({pageWidth}) => pageWidth < 480 ? "center" : "space-around"};
  flex-direction: ${({pageWidth}) => pageWidth < 480 ?  "column" : "row"};
`;


  
     
      const Img = styled.img.attrs(props =>{
      let width = useWindowWidth(window.innerWidth)
      return {
              pageWidth: width
      }
})`
      margin: 1vh 2vw; 
      width: ${({width, pageWidth}) => width || (pageWidth < 480 ? "50%" : "25vw") };
      // max-width: ${({pageWidth}) => pageWidth < 480 ? "80%" : "20vw"};
      height: ${({height}) => height || "auto"};
`;
 

const Title = styled.h1`
color: ${({fontColor}) => fontColor || "Green"};
font-size:  ${({fontSize}) => fontSize || "2rem"};

font-family: Open Sans;
font-style: normal;
line-height: normal;
`;

const SectionTitle = styled.h1`
color: ${({fontColor}) => fontColor || "Green"};
font-size:  ${({fontSize}) => fontSize || "1.5rem"};
font-family: Open Sans;
font-style: normal;
line-height: normal;
`;

const ParaText = styled.p`
color: ${({fontColor}) => fontColor || "#000000"};
font-size:  ${({fontSize}) => fontSize || "1rem"};
font-family: Open Sans;
font-style: normal;
line-height: normal;
`


 

  
const T32V=styled.h1`
color: ${({fontColor}) => fontColor || "Green"};
text-align: center;
font-family: Open Sans;
font-size: 2rem;
font-style: normal;
font-weight: 700;
line-height: normal;
`;
const T24V=styled.h2`
color: ${({fontColor}) => fontColor || "Green"};
text-align: center;
font-family: Open Sans;
font-size: 1.5rem;
font-style: normal;
font-weight: 600;
line-height: normal;
`;
const T20V=styled.h3`
color: ${({fontColor}) => fontColor || "Green"};
text-align: center;
font-family: Open Sans;
font-size: 1.25rem;
font-style: normal;
font-weight: 600;
line-height: normal;
`;
const T18V=styled.h4`
color: ${({fontColor}) => fontColor || "Blue"};
text-align: center;
font-family: Roboto;
font-size: 1.125rem;
font-style: normal;
font-weight: 400;
line-height: normal;
`;
const T16V=styled.h5`
color: ${({fontColor}) => fontColor || "Blue"};
text-align: center;
font-family: Roboto;
font-size: 1rem;
font-style: normal;
font-weight: 400;
line-height: normal;
`;
const T14V=styled.h6`
color: ${({fontColor}) => fontColor || "auto"};
text-align: center;
font-family: Roboto;
font-size: 1rem;
font-style: normal;
font-weight: 400;
line-height: normal;

`;


 

const BtnText=styled.text`
color: ${({fontColor}) => fontColor || "white"};
text-align: center;
font-family: Roboto;
font-size: 1rem;font-style: normal;
font-weight: 700;
line-height: normal;
`;

const Frame= styled.div`
border-radius: 2.5rem;
background: #059950;
width:15%;
text-align:center;
`;
 
const App = () => {

  
  return (
    <>
    
  
      
<T32V fontColor="orange">Checkout Successful</T32V>
<T24V>Checkout Successful</T24V>
<T20V>Checkout Successful</T20V>
 <T18V>Checkout Successful</T18V>   
  <T16V>Checkout Successful</T16V>
  <T14V>Checkout Successful</T14V>
   
    <Frame>
    <BtnText>Button</BtnText>
    </Frame>

    <Frame background="white" >
    <BtnText fontColor="green">Button</BtnText>
    </Frame>

     <Img src={logo} alt="logo" />
     <Img src={logo} alt="logo"  width="134" height="128" />
     <Img src={logo} alt="logo"  width="66" height="64" />



 </>

  );
}


export default App;
















/*import * as React from 'react';

import styled from 'styled-components'
import { ThemeProvider } from 'styled-components';

const Button = styled.button`

color: ${props => props.theme.fg};
border: 2px solid ${props => props.theme.fg};
background: ${props => props.theme.bg};

font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border-radius: 3px;
`;

// Define our `fg` and `bg` on the theme
const theme = {
fg: "#BF4F74",
bg: "white"
};

// This theme swaps `fg` and `bg`
const invertTheme = ({ fg, bg }) => ({
fg: bg,
bg: fg
});


function App(){
  return(
    <ThemeProvider theme={theme}>
    <div>
      <Button>Default Theme</Button>

      <ThemeProvider theme={invertTheme}>
        <Button>Inverted Theme</Button>
      </ThemeProvider>
    </div>
  </ThemeProvider>
  );
  }
export default App;*/









/*import * as React from 'react';

import {Button} from '@mui/material';

function App(){
return(
  <div>
    <Button onClick={()=>console.log('click event')} sx={{margin:2}}size='large' variant='contained'> First</Button>
    <Button  sx={{margin:4}} size='medium' variant='outlined'>Second</Button>
    <Button   sx={{margin:10}} size='small' variant='info'>Third</Button>
  </div>
)

}
 export default App;*/

















/*import React ,{useState} from 'react';
function App(){
  const handlesubmit=event => {
    event.preventDefault();
    alert('This is an Alert message')}
  
 
 
  
 const [submitting ,setsubmitting] =useState(false);
  const handlesubmit=event =>{event.preventDefault();
  setsubmitting(true);
setTimeout(()=>{
  setsubmitting(false);},3000)
}



  return(
    <div>
     {submitting  && <div> Hai this is an Example</div>}

  <form onSubmit={handlesubmit}>
     <div><p> This is a form Page</p>
    <fieldset>
      <label>
        Name
     <input type='text'/>
     </label>
    </fieldset>
    <button type='submit'> Submit</button>
    </div>
  </form>
  </div>

  )
} 
export default App;*/






/*import logo from './logo.svg';
import './App.css';

function App() {
 return (
   <div className="App">
     <header className="App-header">
       <img src={logo} className="App-logo" alt="logo" />
       <p>
         Edit <code>src/App.js</code> and save to reload.
       </p>
       <a
         className="App-link"
         href="https://reactjs.org"
         target="_blank"
         rel="noopener noreferrer"
       >
         Learn React
       </a>
     </header>
   </div>
 );
}

export default App;*/
