import React, { useEffect } from "react";
import bounce from "../script/bounce";

export default function About() {
  useEffect(() => {
    document.title = "Mothercode | About Mothercode ";

    bounce();
  }, []);

  return (
    <>
      <div className="container home-page">
       
        <div className="text-zone">
          <h1
            aria-label=" This is Mothercode, your friend throughout the course"
            className="blast-root"
          >
            <span className="blast" style={{ color: "#23ffde" }}>
              A
            </span>
            <span className="blast" style={{ color: "#23ffde" }}>
              b
            </span>
            <span className="blast" style={{ color: "#23ffde" }}>
              o
            </span>
            <span className="blast" style={{ color: "#23ffde" }}>
              u
            </span>
            <span className="blast" style={{ color: "#23ffde" }}>
              t&nbsp;
            </span>
            <span className="blast" style={{ color: "#23ffde" }}>
              M
            </span>
            <span className="blast" style={{ color: "#23ffde" }}>
              o
            </span>
            <span className="blast" style={{ color: "#23ffde" }}>
              t
            </span>
            <span className="blast" style={{ color: "#23ffde" }}>
              h
            </span>
            <span className="blast" style={{ color: "#23ffde" }}>
              e
            </span>
            <span className="blast" style={{ color: "#23ffde" }}>
              r
            </span>
            <span className="blast" style={{ color: "#23ffde" }}>
              c
            </span>
            <span className="blast" style={{ color: "#23ffde" }}>
              o
            </span>
            <span className="blast" style={{ color: "#23ffde" }}>
              d
            </span>
            <span className="blast" style={{ color: "#23ffde" }}>
              e
            </span>
          </h1>
          <p align="LEFT">
          Mothercode is a web developers training management software. It is an all-in-one solution to all your course management needs, 
          right from begining to end, and completion. This online course management tool also lets you 
          collaborate with your teacher, your team on the go to keep everyone on the same page. Easily share task feedback,
           generate insightful reports, <strong>run codes</strong> and take your next action from a single dashboard to drive your projects to success.
  
          </p>
          <img
          alt="collaborate" 
          src={`https://www.proprofsproject.com/home-assests/images/Collaborate.svg`}
        />

<p align="Center">
Easily bridge the 
communication gap and collaborate with students to teachers to share ideas, 
files, and discuss projects to avoid unnecessary delays.
  
          </p>

        </div>


       
      </div>
      <div id="mysvg">
        <img
          alt="hacker"
          src={`https://raw.githubusercontent.com/asifmoh/asifmoh/main/assets/user.svg`}
        />
      </div>
    </>
  );
}
