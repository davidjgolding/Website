import React from "react";

export function makeIcon(img, alt, url, height = 25, className = "") {
  return (
    <a className={className} href={url}>
      <img src={img} alt={alt} height={height + "px"} />
    </a>
  );
}

export default function AboutSlide(props) {
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
                Hi{" "}
                <span role="img" aria-label="hand wave">
                  👋
                </span>
                , I graduated from the University of Warwick in July 2021 with a
                bachelor's degree in Computer Science.
              </p>
              <p>
                I love building things which help people and ensuring they’re
                secure{" "}
                <span role="img" aria-label="secure">
                  🔒
                </span>
                .
              </p>
              <p>
                I am always open to new opportunities so please reach out{" "}
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
