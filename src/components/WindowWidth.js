import React, { Component } from "react";
import  {useState, useEffect} from "react";

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
export default useWindowWidth