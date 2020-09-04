import React from "react";

export function makeIcon(img, alt, url, height = 25, className = "") {
  return (
    <a className={className} href={url}>
      <img src={img} alt={alt} height={height + "px"} />
    </a>
  );
}

export default function AboutSlide(props) {
  const warwick = makeIcon(
    "warwick.png",
    "University of Warwick",
    "https://www.warwick.ac.uk",
    30
  );
  const python = makeIcon("python.png", "Python", "https://www.python.org");
  const kotlin = makeIcon("kotlin.png", "Kotlin", "https://kotlinlang.org");
  

  return (
    <section id="about" className="about slide">
      <div className="slide-title" style={{ color: "white" }}>
        About
      </div>

      <div className="about-inner">
        {/* <div className="about-statement">
        {/* 
          <Typical
          className="h2 about-statement"
          steps={['STUDENT.', 3000, 'DEVELOPER.', 3000, 'CREATOR.', 3000]}
          loop={Infinity}
        /> */}
        {/* <h2>STUDENT.</h2>
          <h2>DEVELOPER.</h2>
          <h2>CREATOR.</h2>  */}
        {/* </div>  */}
        <div className="about-container">
          <div className="about-card">
            {/* <img className="about-img" src="dg.png" alt="David Golding" />
            <img
              className="about-img-arrow"
              src="curved-arrow-2.svg"
              alt="Curved Arrow"
            /> */}
            {/* <div className="d-flex flex-row about-title">
              <div className="p-2 about-title-item">
                <h3>ME</h3>
              </div>
            </div> */}

            <div className="about-content">
              <p>
                Hi{" "}
                <span role="img" aria-label="hand wave">
                  👋
                </span>
                , I’m a final year Computer Science student at the University of
                Warwick {warwick}.
              </p>
              <p>
                I love building things which help people and ensuring they’re
                secure{" "}
                <span role="img" aria-label="secure">
                  🔒
                </span>
                . You’ll normally find me playing with Python {python} or Kotlin{" "}
                {kotlin}.{" "}
              </p>
              <p>
                Aside from coding, I'm an extremely competitive table-tennis{" "}
                <span role="img" aria-label="table tennis">
                  🏓
                </span>{" "}
                and badminton{" "}
                <span role="img" aria-label="badminton">
                  🏸
                </span>{" "}
                player, however, for more relaxing entertainment I often play
                the piano{" "}
                <span role="img" aria-label="piano">
                  🎹
                </span>
                .
              </p>
              <p style={{marginBottom: 0}}>
                I’m always open to new opportunities so please reach out{" "}
                <span role="img" aria-label="grin">
                  😁
                </span>
                .
              </p>
              
            </div>
          </div>
        </div>
      </div>
            {/* <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul> */}
    </section>
  );
}
