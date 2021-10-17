import React, { useEffect } from "react";
import bounce from "../script/bounce";

export default function Skills() {
  useEffect(() => {
    document.title = "Mothercode | Course Plan ";

    bounce();
  }, []);

  return (
    <>
      <div className="container home-page">
        <span className="tags top-tags"> &nbsp;&nbsp;&nbsp;&lt;body&gt;</span>
        <div className="text-zone">
          <h1
            aria-label=" Full Stack Web Developer Course plan"
            className="blast-root"
          >
            <span className="blast" style={{ color: "#23ffde" }}>
              Course&nbsp;
            </span>
            <span className="blast" style={{ color: "#23ffde" }}>
              &nbsp;
            </span>
            <span className="blast" style={{ color: "#23ffde" }}>
              Plan
            </span>
          </h1>
          <p align="LEFT">
          Want to become a Freelancer, Digital Nomad, or work in your dream tech company? 
          Become a Web Developer, a dynamic and vital field in today's society. As a Web Developer, 
          you can show your creativity, become part of the Tech Disruption, build Websites, Web Apps, and more.

            <br />
            <br />
           
            <br />
            &nbsp;&nbsp; • &nbsp;&nbsp; Basic Digital Literacy<br />
            &nbsp;&nbsp; • &nbsp;&nbsp; User Interface Basics<br />
            &nbsp;&nbsp; • &nbsp;&nbsp; Programming Basics<br />
            &nbsp;&nbsp; • &nbsp;&nbsp; SPA - Single Page Applications<br />
            &nbsp;&nbsp; • &nbsp;&nbsp; Backend Development<br />
            &nbsp;&nbsp; • &nbsp;&nbsp; Final Project<br />
           
            <br />
            </p>
        </div>

        <span className="tags bottom-tags" style={{ bottom: "10px" }}>
          &nbsp;&nbsp;&nbsp;&lt;/body&gt;
          <br />
          &lt;/html&gt;
        </span>
      </div>
      <div id="mysvg">
        <img
          alt="hacker"
          src={`https://raw.githubusercontent.com/asifmoh/asifmoh/main/assets/skills.svg`}
        />
      </div>
    </>
  );
}
