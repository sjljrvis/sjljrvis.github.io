import React, { useState, useEffect } from "react";
import { useScramble } from "use-scramble";

const _dict = [
  "I am an Engineer...",
  "expert Fullstack...",
  "ask me about Javascript",
  "everything about web",
  "let's build something",
  "I can code in *.js, *.go, *.rb",
  "lets's connect ?",
];
const Home = () => {
  const [currentHeadingIndex, setCurrentHeadingIndex] = useState(0);

  const { ref } = useScramble({
    text: _dict[currentHeadingIndex],
    speed: 0.6,
    overflow: true,
    scramble: 20,
  });

  useEffect(() => {
    let intervalId = setInterval(() => {
      setCurrentHeadingIndex((prevIndex) => (prevIndex + 1) % _dict.length);
    }, 5000);
    return () => clearInterval(intervalId);
  });

  return (
    <div className="home">
      <div className="banner">
        <h1> >_ &nbsp; </h1>
        <h1 style={{ width: "75%" }} ref={ref}></h1>
      </div>
      <h3 style={{ fontWeight: 600 }}>Hi 👋🏼</h3>
      <p>
        I'm Sejal. This site showcases a selection of my hobby projects,
        published software, and various app and web experiments I tinker with in
        my free time. I enjoy building scalable software for both mobile and web
        platforms and love experimenting and implementing new ideas from
        scratch.
      </p>
      <p>
        With over 7+ years of experience as a &nbsp;
        <span className="highlight">Fullstack Engineer</span>, I have strong
        expertise in Node.js, Golang, React, and Ruby. I strive to keep things
        minimal and focus on delivering great products.
      </p>

      <div className="work-experience">
        <h2 style={{ fontWeight: 600 }}> Work Experience </h2>

        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-content">
              <div style={{ fontWeight: "bold", fontSize: 20 }}>
                supervity.ai
              </div>
              <h4 className="work-exp-text">
                Senior Solution Engineer-T2 (Core Team), October 2021-Present{" "}
              </h4>
              <ul>
                <li>
                  <p>
                    Implemented SaaS Plans and pricing along with stripe payment
                    integration.
                  </p>
                </li>
                <li>
                  <p>
                    Revamped automation job scheduling and queuing mechanism for
                    better performance and enhanced error handling
                  </p>
                </li>

                <li>
                  <p>
                    Revamped/Re-structured webapp to make it scalable for better
                    automation flow creation and optimized performance.
                  </p>
                </li>

                <li>
                  <p>
                    Improvised NLP training service to support parallel model
                    training and along with log/error collection for better
                    model- retraining resulting in improved nlp prediction
                    results.
                  </p>
                </li>
              </ul>
              <hr></hr>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-content">
              <div style={{ fontWeight: "bold", fontSize: 20 }}>
                Browserstack
              </div>
              <h4 className="work-exp-text">
                Fullstack Engineer (Growth Team), June 2019 - September 2021
              </h4>
              <ul>
                <li>
                  <p>
                    Carried out major rails and ruby version upgrade from 4.1.15
                    to 6.0.3.6 in core repository. Resulting in enhaced security
                    and better API performance.
                  </p>
                </li>
                <li>
                  <p>
                    Revamped Unit / Functional Testing process & architecture
                    ,which in turn helped reduce unit test execution time from
                    ~21 mins to ~4 mins.
                  </p>
                </li>

                <li>
                  <p>
                    I have been working with growth & monetization team ,
                    implemented various A/B experiments to ensure growth for
                    Live & Automate Product.
                  </p>
                </li>
              </ul>
              <hr></hr>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-content">
              <div style={{ fontWeight: "bold", fontSize: 20 }}>
                techforce.ai
              </div>
              <h4 className="work-exp-text">
                Product Engineer (Core Team), March 2018 - June 2019
              </h4>
              <ul>
                <li>
                  <p>
                    Created Platform to train NLP intent classification data ,
                    which helped team & customers manage & monitor NLP data
                    under one hood.
                  </p>
                </li>
                <li>
                  <p>
                    Designed & implemented architecture to train NLP engine in
                    dockerized and distributed manner.
                  </p>
                </li>

                <li>
                  <p>
                    Built pluggable chat interface for bots , with bunch of
                    custom widgets.
                  </p>
                </li>
              </ul>
              <hr></hr>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-content">
              <div style={{ fontWeight: "bold", fontSize: 20 }}>
                binarynumbers.io
              </div>
              <h4 className="work-exp-text">
                Fullstack Developer, May 2017 - Feb 2018
              </h4>
              <ul>
                <li>
                  <p>Leads Managment System for Damac</p>
                </li>
                <li>
                  <p>
                    CMS/Website builder for Damac Properties-Dubai created
                    backend to dynamically create landing pages/accelerated-
                    mobile-pages and created REST api for dynamic content
                    mapping based on business-rules.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
