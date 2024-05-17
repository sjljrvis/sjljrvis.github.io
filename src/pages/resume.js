import React from "react";
import { useScramble } from "use-scramble";

const Resume = () => {
  const { ref } = useScramble({
    text: "Please find attached PDF below",
    speed: 0.8,
    overflow: true,
    scramble: 20,
  });

  return (
    <div className="skills">
      <div className="banner">
        <h1> >_ &nbsp; </h1>
        <h1 style={{ width: "75%" }} ref={ref}></h1>
      </div>

      <object
        data="https://sjljrvis.github.io/resume/sde-3-resume.pdf"
        type="application/pdf"
        width="100%"
        height={800}
        style={{ marginTop: 50 }}
      >
        <p>
          <i>It appears you don't have a PDF plugin for this browser.</i>
          <a href="https://sjljrvis.github.io/resume/sde-3-resume.pdf">
            click here to download the PDF file.
          </a>
        </p>
      </object>
    </div>
  );
};

export default Resume;
