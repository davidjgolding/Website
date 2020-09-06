import React from "react";

export function makeIcon(img, alt, url, height = 25, className = "") {
  return (
    <a className={className} href={url}>
      <img src={img} alt={alt} height={height + "px"} />
    </a>
  );
}

export default function AboutSlide(props) {
  const python = makeIcon("python.png", "Python", "https://www.python.org");
  const kotlin = makeIcon("kotlin.png", "Kotlin", "https://kotlinlang.org");

  return (
    <section id="about" className="about slide">
      <div className="about-inner">
        <div className="slide-title" style={{ color: "white" }}>
          About
        </div>
        <div className="about-container">
          <div className="about-card">
            <div className="about-content" style={{ color: "white" }}>
              <p>
                Hi
                <span role="img" aria-label="hand wave">
                  👋
                </span>
                , I’m a final year Computer Science student at the University of
                Warwick.
                {/* {warwick} */}
              </p>
              <p>
                I love building things which help people and ensuring they’re
                secure
                <span role="img" aria-label="secure">
                  🔒
                </span>
                . You’ll normally find me playing with Python {python} or Kotlin{" "}
                {kotlin}.
              </p>
              <p>
                Aside from coding, I'm an extremely competitive table-tennis{" "}
                <span role="img" aria-label="table tennis">
                  🏓
                </span>
                and badminton
                <span role="img" aria-label="badminton">
                  🏸
                </span>
                player, however, for more relaxing entertainment I often play
                the piano
                <span role="img" aria-label="piano">
                  🎹
                </span>
                .
              </p>
              <p>
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
    </section>
  );
}
