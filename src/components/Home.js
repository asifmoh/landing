import React, { useEffect } from "react";
import Fade from "react-reveal";
import { Wave } from 'react-animated-text';
import styled from "styled-components";
import bounce from "../script/bounce";


export default function Home() {
  
  useEffect(() => {
    document.title =
      "Mothercode | Digital Career Institute";

    bounce();
    
   
    const s = document.querySelector(".Slast");

    s.style.opacity = 1;
    s.style.transform = "rotate(360deg)";

    return () => {
      s.style.opacity = 0;
      s.style.transform = "rotate(0deg)";
    };
  }, []);
  
  return (
    <>
  
		    
      <div className="container home-page">
       
       

        <div className="text-zone">
       
          <h1>
            <span className="Slast">A</span>
            <span className="blast">s</span>
            <span className="blast">i</span>
            <span className="blast">f</span>
            <span className="blast">&nbsp;</span>
            <span className="blast">M</span>
            <span className="blast">o</span>
            <span className="blast">h</span>
            <span className="blast">i</span>
            <span className="blast">u</span>
            <span className="blast">d</span>
            <span className="blast">d</span>
            <span className="blast">i</span>
            <span className="blast">n</span>
           
            
          </h1>
          <Fade bottom duration={1200}>
             <h3>
              <Wavetext>
              <Wave text="Fachinformatiker | Full-Stack Web Developer" />
              </Wavetext>
              </h3>
            </Fade>
          
<div> <p> Every programmer is an artist </p> </div>

          <div className="icons">
            <a href="https://twitter.com/mothercode" target="_blank" rel="noopener noreferrer" >
              <i className="fab fa-twitter fa-3x"></i>
            </a>
            <a href="https://github.com/Ahmed-Elarosi/mothercode-frontend" target="_blank" rel="noopener noreferrer" >
              <i className="fab fa-github fa-3x"></i>
            </a>
          
            <a href="https://www.mothercode.com/" target="_blank" rel="noopener noreferrer" >
              <i className="fas fa-sign-in-alt fa-3x"></i>
            </a>
           


          </div>
          
        </div>

       
        
      </div>
      <div id="frontsvg">
        <img
          alt="hacker" transform= "rotateY(180deg)"
          src={`https://raw.githubusercontent.com/asifmoh/asifmoh/main/assets/Asif_home_001.svg`}
        />

     
      </div>
      
      
      

    </>
  );
}
const Wavetext = styled.div`
  color: #23ffde;
  width: 75%;
`;

