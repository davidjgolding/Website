import React from "react";

function makeIcon(img, alt, url, height = 25, className = "") {
  return (
    <a className={className} href={url}>
      <img src={img} alt={alt} height={height + "px"} />
    </a>
  );
}

export default function ContactSlide(props) {
  const warwick = makeIcon(
    "warwick.png",
    "University of Warwick",
    "https://www.warwick.ac.uk",
    30
  );
  const python = makeIcon("python.png", "Python", "https://www.python.org");
  const kotlin = makeIcon("kotlin.png", "Kotlin", "https://kotlinlang.org");
  const docker = makeIcon("docker.png", "Docker", "https://www.docker.com");
  const azure = makeIcon(
    "azure.svg",
    "Microsoft Azure",
    "https://azure.microsoft.com"
  );
  const github = makeIcon(
    "GitHub-Mark-64px.png",
    "GitHub",
    "https://github.com/davidjgolding/",
    40,
    "contact-logos"
  );
  const linkedin = makeIcon(
    "linkedin.svg",
    "LinkedIn",
    "https://www.linkedin.com/in/davidjgolding/",
    40,
    "contact-logos"
  );

  return (
    <section id="welcome" className="welcome slide">
      <div className="welcome-inner">
        <div className="welcome-statement">
          <h2>STUDENT.</h2>
          <h2>DEVELOPER.</h2>
          <h2>CREATOR.</h2>
        </div>
        <div className="welcome-container">
          <div className="welcome-card">
            <img
              className="welcome-img"
              src="dg.png"
              alt="Image of David Golding"
            />
            <img
              className="welcome-img-arrow"
              src="curved-arrow-2.svg"
              alt="Curved Arrow"
            />
            <div className="d-flex flex-row welcome-title">
              <div className="p-2 welcome-title-item">
                <h3>ME</h3>
              </div>
            </div>

            <div className="welcome-content">
              <p>
                Hi 👋, I’m a final year Computer Science student at {warwick}.
              </p>
              <p>
                I ❤️ building things which help people and ensuring they’re 🔒.
                You’ll normally find me playing with {python} or {kotlin}, 
                sometimes with the help of {docker} and {azure}.
              </p>
              <p>
                Aside from 🖥️'s, I'm an extremely competitive 🏓 and 🏸 player. 
                I also find more relaxing entertainment by playing the 🎹.
              </p>
              <p>
                I’m always open to new opportunities so please reach out 😁.
              </p>
              <div className="contact">
                {github}
                {linkedin}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
