import React, { useState } from "react";

import Start from './Start'
import Quizbox from './Quizbox'

function Quiz() {

    const [start, setStart] = useState(false);
  
    return (

<div className="container home-page">

<div className="text-zone">
      <div className="quiz">
        { start ? <Quizbox /> : <Start props={setStart} />} 
      </div>
      </div>
      <div id="mysvg">
        <img
          alt="hacker"
          src={`https://raw.githubusercontent.com/asifmoh/asifmoh/main/assets/web_developer.svg`}
        />

     
      </div>
      </div>
    );
  }
  
  export default Quiz;