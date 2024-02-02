import React, { Component } from "react";
import styled , { css } from "styled-components";
//import iguana from './components/Navbar/iguana.jpg';
import food from './components/Navbar/food.jpg';
import zero from './components/Navbar/zero.jpg';
import  {useState, useEffect} from "react";
import veg from './components/Navbar/veg.jpg';
import logo from './components/Navbar/Greenlogo.svg';
import image72 from './components/Navbar/image 72.svg';
import image74 from './components/Navbar/image 74.svg';
import image75 from './components/Navbar/image 75.svg';
import image73 from './components/Navbar/image 73.svg';
import resuableimage from './components/Navbar/SmartReusables.svg';


 


   



const PFontFactor = (width) =>{
  let factor = width > 500 ? Math.trunc(0.005*(width - 500)) : 0
  return factor
}



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
      
  
const T32V=styled.h1`
color: ${({fontColor}) => fontColor || "black"};
text-align: center;
font-family: Open Sans;
font-size: 2rem;
font-style: normal;
font-weight: 700;
line-height: 3rem;
`;
const T24V=styled.h2`
color: ${({fontColor}) => fontColor || "black"};
text-align: center;
font-family: Open Sans;
font-size: 1.5rem;
font-style: normal;
font-weight: 600;
line-height: normal;
text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

`;
const T20V=styled.h3`
color: ${({fontColor}) => fontColor || "black"};
text-align: center;
font-family: Open Sans;
font-size: 1.25rem;
font-style: normal;
font-weight: 600;
line-height: normal;
text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
const T18V=styled.h4`
color: ${({fontColor}) => fontColor || "black"};
text-align: center;
font-family: Roboto;
font-size: 1.125rem;
font-style: normal;
font-weight: 400;
line-height: normal;
`;
const T16V=styled.h5`
color: ${({fontColor}) => fontColor || "black"};
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



 const CardDiv=styled.div`
 let width = useWindowWidth(window.innerWidth)
  return {
          pageWidth: width
  }
  border-radius: 1.25rem;
background: #FFF;
box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
 
 max-width: 30%;
 float:center;
 
 `;








const SectionBlock=styled.div`

        display: block;
      
        text-align: center;
        background-color=green;
`;
const flexSection=styled.div`
  display: flex;
        flex-wrap: wrap;
        text-align: center;
        align-item:center;
        justify-content: space-between;
`;
 const SectionPara=styled.p.attrs(props =>{
  let width = useWindowWidth(window.innerWidth)
  return {
          pageWidth: width
  }
})`
 
 color: #000;
text-align: center;
font-family: Open Sans;
font-size: ${({pageWidth}) => pageWidth < 480 ? "20px" : `calc(2em + ${2*PFontFactor(pageWidth)}px)`};/*1.25rem*/;
font-style: normal;
font-weight: 400;
line-height: 1.5rem; /* 120% */`;


 const BlockDiv=styled.div.attrs(props =>{
  let width = useWindowWidth(window.innerWidth)
   return {
           pageWidth: width
   }
  })`
 display:block;
 align-items:center;
 justify-content:center;
 padding:1vh 1vw;
 //Margin:1vh 1vw;
 `;

 const HeroSection=styled(BlockDiv)`
 `;
 const Section =styled(BlockDiv)`
 align-content:center;
 `;
  const FlexDiv=styled.div.attrs(props =>{
    let width = useWindowWidth(window.innerWidth)
     return {
             pageWidth: width
     }
    })`
    display:flex;
    align-items:center;
    flex-direction: column;
    justify-content:space-evenly;
    padding:1vh 1vw;
    margin:1vh 1vw;
    `;
 const SubSection=styled(FlexDiv)`
 flex-direction: ${({pageWidth}) => pageWidth < 480 ?  "column" : "row"};
 gap:${({pageWidth}) => pageWidth < 480 ?  "10px" : "0"};
 `;
 const Reusepara= styled(FlexDiv)`
 // padding: 3vh 1vw;
  //margin:3vh 1vw;
 // flex-wrap: ${({wrap}) => wrap ? "wrap" : "nowrap"};
  align-items: center;
  //overflow: hidden;
  background-color: ${({bgColor}) => bgColor || "#059950"};
  justify-content: ${({pageWidth}) => pageWidth < 480 ? "center" : "space-around"};
  flex-direction:column; //${({pageWidth}) => pageWidth < 480 ?  "column" : "row"};

`;

  const Button=styled.button.attrs(props =>{
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
  border-radius:15px;   //1.5rem;
  background-Color: ${({backgroundColor}) => backgroundColor || "#059950"}; 
  padding:1vh 3vw;   //0.625rem 2.25rem;
  text-align:center;
  //float:${({pageWidth}) => pageWidth < 480 ?  "right" : "left"};
  justify-content: ${({pageWidth}) => pageWidth < 480 ? "right" : "left"};
  align-items:center;
  //align-content:center;
  margin:1vh 1vw;
  
  `;

 const WhiteButton=styled(Button)`
 color: ${({fontColor}) => fontColor || "white"};
`;
const GreenButton=styled(WhiteButton)`
background-color:white ;
color: ${({fontColor}) => fontColor || "#059950"};
 `;

const Para = styled.p.attrs(props =>{
let width = useWindowWidth(window.innerWidth)
  return {
          pageWidth: width
  }
})`
color: ${({fontColor}) => fontColor || "#151B1F;"};
font-size:  ${({pageWidth}) => pageWidth < 480 ? "16px" : "18px"}; // ${({fontSize}) => fontSize || "16px"};//1.125rem
font-family:  ${({ffamily}) => ffamily || "Open Sans"}/*Roboto*/;
font-style: normal;
line-height: 1.875;/*1.25rem;*/
font-weight: 400;
padding:1vh 1vw;;
text-align:justify;
`;
const CardText =styled.p.attrs(props =>{
  let width = useWindowWidth(window.innerWidth)
    return {
            pageWidth: width
    }
  })`
  color: ${({fontColor}) => fontColor || "#151B1F;"};
  font-size:  ${({pageWidth}) => pageWidth < 480 ? "18px" : "16px"};// ${({fontSize}) => fontSize || "1.125rem"};
  font-family:  ${({ffamily}) => ffamily || "Roboto"};
  font-style: normal;
  line-height: 1.75rem;
  font-weight: 400;
  padding:1vh 1vw;//10px;
  text-align:center;
  `;
const Description =styled.p.attrs(props =>{
  let width = useWindowWidth(window.innerWidth)
    return {
            pageWidth: width
    }
  })`
color: #000;
text-align: center;
font-family: ${({ffamily}) => ffamily || "Open Sans"};
font-size:${({pageWidth}) => pageWidth < 480 ? "16px" : "17px"};//${({fontSize}) => fontSize || "1rem"}; 
font-style: normal;
font-weight: 400;
line-height:25px; //1.75rem; /* 120% */
margin:1vh 1vw;
padding:1vh 1vw;

`;
 const Text=styled.p.attrs(props =>{
      let width = useWindowWidth(window.innerWidth)
      return {
              pageWidth: width
      }
})`
 color: #FFF;
text-align: center;
font-family:${({ffamily}) => ffamily || "Open Sans"};
font-size: 22px;//${({pageWidth}) => pageWidth < 480 ? "24px" : "31px"};24px; //1.5rem;
font-style: normal;
font-weight: 700;
line-height: 48px; //3rem; /* 150% */
margin:1vh 1vw;
padding:1vh 1vw;
`;
const Img = styled.img.attrs(props =>{
      let width = useWindowWidth(window.innerWidth)
      return {
              pageWidth: width
      }
})`
  
      // max-width: ${({pageWidth}) => pageWidth < 480 ? "80%" : "20vw"};
       padding:1px 1px;
      // margin-left: 30px;
       
       background:  darkgray -65.093px -29.75px / 138.822% 119.444% no-repeat;
            
         `;
         const CardImage =styled(Img)`
         width: ${({width, pageWidth}) => width || (pageWidth < 480 ? "90%" : "25vw") };
         height: ${({height}) => height || "auto"};
         margin: 1vh 2vw;
          `;
          const HeroSectionImage =styled(Img)`
         margin: 1vh 2vw;
         width: ${({width, pageWidth}) => width || (pageWidth < 480 ? "80%" : "40vw") };
         height: ${({height}) => height || "auto"};
         padding:5px;
          margin-left: 30px;
          border:2px solid #2B6F50;
         border-radius: 1.875rem;  
          `;
          const TechnologySecImage =styled(Img)`
         margin: 1VH 2VW;
         width: ${({width, pageWidth}) => width || (pageWidth < 480 ? "85%" : "35vw") };
         height: ${({height}) => height || "auto"};
          `;
          const AvatharImage =styled(Img)`
         margin: 1vh 2vw;
         width:${({width, pageWidth}) => width || (pageWidth < 480 ? "5.5rem" : "9.5rem") };
         height:${({width, pageWidth}) => width || (pageWidth < 480 ? "5.5rem" : "9.5rem") };
         border-radius: 10.5rem;
        
          `;
          const LRImage =styled(Img)`
         margin: 1vh 2vw;
         width:${({width, pageWidth}) => width || (pageWidth < 480 ? "38.625rem" : "38.625rem") };
         height:15.125rem ;
         float:left;

          `;
          const RLImage =styled(Img)`
         margin: 1vh 2vw;
         width: ${({width, pageWidth}) => width || (pageWidth < 480 ? "75%" : "25vw") };
         height: ${({height}) => height || "auto"};
         padding:5px;
          margin-left: 30px;
          `;
         
 const Title=styled.h3`
 color: #000;
text-align: center;
text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
font-style: normal;
line-height: normal;
letter-spacing: 1px;
font-family:${({ffamily}) => ffamily || "Open Sans"} ;
font-size: ${({fontSize}) => fontSize || "1.25rem"};
font-weight: 700;

 `;
 const SectionTitle=styled.p.attrs(props =>{
  let width = useWindowWidth(window.innerWidth)
  return {
          pageWidth: width
  }
})`
 font-family:${({ffamily}) => ffamily || "Open Sans"} ;
 font-size: ${({fontSize}) => fontSize || "1.5rem"}; /*1.25rem*/
 font-weight: 600;
color: #000;
text-align: center;
text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
font-style: normal;
line-height: normal;
letter-spacing: 1px;
align-items:center;
 `;
 const SubTitle=styled(Title)`
 text-decoration:underline 2px solid #059950;
 font-family:${({ffamily}) => ffamily || "Open Sans"} ;
 font-size: ${({fontSize}) => fontSize || "1.5rem"}; 
 font-weight: 700;
 text-underline-offset: 11px;
            
 `;
 
const Card=styled.div.attrs(props =>{
 let width = useWindowWidth(window.innerWidth)
  return {
          pageWidth: width
  }
 })`
display: block;
//width: 18.75rem;
padding:1vh 1vw;
/*column-gap:1px; *//* 0.625rem;*/
Column-gap: 5px;
border-radius: 1.25rem;
background: #FFF;
box-shadow: 4px 4px 8px 8px rgba(0, 0, 0, 0.25);
margin:1vh 1vw;
row-gap:1px;
`;
const Footer=styled.div`
display: flex;
/*width: ${({width, pageWidth}) => width || (pageWidth < 480 ? "75%" : "25vw") }; *//* var(--ScreenWidth, 24.375rem);*/
height: 4.75rem;
padding: 0.625rem;
align-items: center;
gap: 0.625rem;
background: #059950;
`;


const App = () => {
 
  return (

        <>
         <HeroSection>
                 <SectionTitle >Eliminating wast and decarbonizing facilities</SectionTitle>
           <SubSection>           
              <HeroSectionImage src={image75} alt="image75" /> 
              <FlexDiv>
               <Para>Solutions to eliminate non-recyclable waste from commercial facilities to households</Para>
              <WhiteButton>Learn More</WhiteButton>
              </FlexDiv>
           </SubSection>     
              
        </HeroSection>

          
        <Section>
                    <SubTitle >Future of takeout</SubTitle>
           <SubSection>
             
                 <Description> Now there is an an for that!</Description> 
                 <TechnologySecImage src={resuableimage} alt="reusableImage" />  
                
      </SubSection>
          <Description>An app to use and return smart reusable containers for food and drinks</Description>  
                
                 
          </Section>       

              
           
        <Section>
             <SubTitle>How it Works</SubTitle>
            <SubSection>
           <Card>
              <Title>Tap</Title>
              <CardImage src={resuableimage} alt="reusableImage" />
               <Description>Open the app, tap during checkout</Description>
               </Card>
          

           
            <Card>
              <Title>Enjoy</Title> 
              <CardImage src={resuableimage} alt="reusableImage" />
               <Description>Enjoy your food without microplastics</Description>
               </Card>
           

          
            <Card>
              <Title>Return</Title> 
              <CardImage src={resuableimage} alt="reusableImage" />
               <Description>We will pick up the containers for free</Description>
               </Card>
           </SubSection>

        </Section>
          
         <Reusepara>
           <Text>A reuse paradigm to eliminate waste that recycling never will</Text>
           <GreenButton>Learn More</GreenButton>
         </Reusepara>
         
        <Section>
          <SubTitle>A sustainable world</SubTitle>
          <SubSection>
          <Card>
              <Title>Title</Title>
              <CardImage src={resuableimage} alt="reusableImage" />
               <CardText>EAT AND DRINK HEALTHY IN REUSABLE PACKAGING</CardText>
          </Card>

          <Card>
              <Title>Title</Title>
              <CardImage src={resuableimage} alt="reusableImage" />
               <CardText>EAT AND DRINK HEALTHY IN REUSABLE PACKAGING</CardText>
          </Card>

          <Card>
              <Title>Title</Title>
              <CardImage src={resuableimage} alt="reusableImage" />
               <CardText>EAT AND DRINK HEALTHY IN REUSABLE PACKAGING</CardText>
          </Card>
          </SubSection>
        </Section>



        <Section>
        <SubTitle>Our Impact</SubTitle>
        
          <SubSection> 
          <Card>
              <Title>Title</Title>
              <CardImage src={resuableimage} alt="reusableImage" />
               <CardText>EAT AND DRINK HEALTHY IN REUSABLE PACKAGING</CardText>
          </Card>

          <Card>
              <Title>Title</Title>
              <CardImage src={resuableimage} alt="reusableImage" />
               <CardText>EAT AND DRINK HEALTHY IN REUSABLE PACKAGING</CardText>
          </Card>

          <Card>
              <Title>Title</Title>
              <CardImage src={resuableimage} alt="reusableImage" />
               <CardText>EAT AND DRINK HEALTHY IN REUSABLE PACKAGING</CardText>
          </Card>
          </SubSection>

        </Section>


        <Section>
        <SubTitle>Our Partners</SubTitle>
        
          <SubSection>
          <Card>
              <Title>Title</Title>
              <CardImage src={resuableimage} alt="reusableImage" />
               <CardText>EAT AND DRINK HEALTHY IN REUSABLE PACKAGING</CardText>
          </Card>

          <Card>
              <Title>Title</Title>
              <CardImage src={resuableimage} alt="reusableImage" />
               <CardText>EAT AND DRINK HEALTHY IN REUSABLE PACKAGING</CardText>
          </Card>

          <Card>
              <Title>Title</Title>
              <CardImage src={resuableimage} alt="reusableImage" />
               <CardText>EAT AND DRINK HEALTHY IN REUSABLE PACKAGING</CardText>
          </Card>
          </SubSection>

        </Section>

            <Footer></Footer>
    

     <Img src={logo} alt="logo" />
     <Img src={logo} alt="logo"  width="134" height="128" />
     <Img src={logo} alt="logo"  width="66" height="64" />
 
    
    


 </>

  );
}



export default App;
















