import React, { useState, useEffect } from "react";
import { useScramble } from "use-scramble";

const _dict = [
  "Noteworthy projects I have made",
  "<a href='https://github.com/sjljrvis'>github/sjljrvis</a>",
  "upweb.io, z-worker, gArc",
];

const Projects = () => {
  const [currentHeadingIndex, setCurrentHeadingIndex] = useState(0);
  const { ref } = useScramble({
    text: _dict[currentHeadingIndex],
    speed: 0.8,
    overflow: true,
    scramble: 2,
  });

  useEffect(() => {
    let intervalId = setInterval(() => {
      setCurrentHeadingIndex((prevIndex) => (prevIndex + 1) % _dict.length);
    }, 5000);
    return () => clearInterval(intervalId);
  });

  return (
    <div className="skills">
      <div className="banner">
        <h1> >_ &nbsp; </h1>
        <h1 style={{ width: "75%" }} ref={ref}></h1>
      </div>

      <div>
        <h2 style={{ fontWeight: 600, marginTop: 30 }} className="bold">
          upweb.io
        </h2>
        <p style={{ marginTop: 0 }}>
          <span className="code">https://github.com/sjljrvis/upweb</span>
        </p>
        <div>
          <h4 className="bold"> Summary </h4>
          <p style={{ fontWeight: "lighter" }}>
            upweb is a Platform as a Service for fast application deployment
            using git. Developers can instantly create & deploy static / dynamic
            websites, REST APIs & microservices etc.
            <p>
              App created on upweb will be directly assigned a subdomain with a
              SSL certificate.
            </p>
          </p>
        </div>
        <div>
          <h4 className="bold"> Features </h4>
          <ul>
            <li>Easy deployments with git</li>
            <li>Dashboard to view / monitor logs</li>
            <li>SSL certificates for all the hosted apps</li>
          </ul>
        </div>

        <h4 className="bold">Technology stacks used</h4>
        <div className="flex-row">
          <div className="programming-laguages">express</div>
          <div className="programming-laguages">react</div>
          <div className="programming-laguages">react-native</div>
          <div className="programming-laguages">redux</div>
          <div className="programming-laguages">react-native</div>
        </div>
      </div>

      <hr></hr>

      <div>
        <h2 style={{ fontWeight: 600, marginTop: 30 }} className="bold">
          echo
        </h2>
        <p style={{ marginTop: 0 }}>
          <span className="code">https://github.com/sjljrvis/echo</span>
        </p>
        <div>
          <h4 className="bold"> Summary </h4>
          <p style={{ fontWeight: "lighter" }}>
            Simple syslog drain collection service developed to store & manage
            STDIN STOUT logs generated by containers hosted on upweb.io
          </p>
        </div>
        <div>
          <h4 className="bold"> Features </h4>
          <ul>
            <li>SYSLOG collection</li>
            <li>Realtime logs & monitoring</li>
          </ul>
        </div>

        <h4 className="bold">Technology stacks used</h4>
        <div className="flex-row">
          <div className="programming-laguages">golang</div>
          <div className="programming-laguages">redis</div>
          <div className="programming-laguages">GCP</div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
