import React from "react";
import { useScramble } from "use-scramble";

const Skills = () => {
  const { ref } = useScramble({
    text: "Programming Languages, Frameworks, Tools & Products that I work with",
    speed: 0.8,
    overflow: true,
    scramble: 20,
  });

  return (
    <div className="skills">
      <div className="banner">
        <h1> >_ &nbsp; </h1>
        <h1 style={{ width: "75%" }} ref={ref}>
          {" "}
        </h1>
      </div>

      <h3 style={{ fontWeight: 600, marginTop: 30 }}>Programming Languages</h3>
      <div className="flex-row">
        <div className="programming-laguages">nodeJS</div>
        <div className="programming-laguages">go</div>
        <div className="programming-laguages">ruby</div>
        <div className="programming-laguages">bash</div>
      </div>

      <h3 style={{ fontWeight: 600, marginTop: 30 }}>Frameworks</h3>
      <div className="flex-row">
        <div className="programming-laguages">express</div>
        <div className="programming-laguages">react</div>
        <div className="programming-laguages">react-native</div>
        <div className="programming-laguages">redux</div>
        <div className="programming-laguages">react-native</div>
      </div>

      <h3 style={{ fontWeight: 600, marginTop: 30 }}>Database & Tools</h3>
      <div className="flex-row">
        <div className="programming-laguages">mongoDB</div>
        <div className="programming-laguages">redis</div>
        <div className="programming-laguages">SQL</div>
        <div className="programming-laguages">amqp</div>
        <div className="programming-laguages">nGINX</div>
        <div className="programming-laguages">docker</div>
        <div className="programming-laguages">aws</div>
        <div className="programming-laguages">gcp</div>
        <div className="programming-laguages">git</div>
      </div>

      <h2 style={{ fontWeight: 900, marginTop: 100 }}> Education </h2>
      <h4>Bachelor in Electronics and Telecommunication Engineering</h4>
      <h5>University of Pune , India ,2012 - 2016</h5>
    </div>
  );
};

export default Skills;
