import React, { useRef, useEffect } from "react";

import { motion, useInView, useAnimation, delay } from "framer-motion";
import { SiLinkedin, SiGithub, SiSpotify, SiInstagram } from "react-icons/si";
import "./AboutMe.css";

export default function AboutMe() {
    const me = "/myLinkedInPic.png";

  return (
    <div className="about-grid-container">
      <h1 className="bento-title">About Me</h1>
      <div className="box education bento-box-item">
        <div className="bento-content">
          <p>Graduated with </p>
          <h1>First Class Honors</h1>
          <p>At Universtiy of Ulster</p>
        </div>
      </div>

      <div className="box about-me-img bento-box-item">
        <img src={process.env.PUBLIC_URL + me} /> 
      </div>
      <div
        className="box linkedIn bento-box-item socials"
        onClick={() => {
          LinkedInLink();
        }}
      >
        <SiLinkedin />
      </div>
      <div className="box github bento-box-item socials">
        <SiGithub
          onClick={() => {
            GithubLink();
          }}
        />
      </div>
      <div
        className="box spotify bento-box-item socials"
        onClick={() => {
          SpotifyLink();
        }}
      >
        <SiSpotify />
      </div>
      <div className="box insta bento-box-item socials">
        <SiInstagram />
      </div>
      <div className="box song bento-box-item">
        <div
          className="bento-content"
          onClick={() => {
            SongLink();
          }}
        >
          <p>Song of the week</p>
          <p>🎵</p>
          <p>Duvet - Bôa</p>
        </div>
      </div>
      <div className="box background-me bento-box-item">
        <div className="bento-content">
          <h3>About Me</h3>
          <p>Based in the UK, yada yap</p>
        </div>
      </div>
      <div className="box interests bento-box-item">
        <div className="bento-content">
          <h3>Intersts</h3>
          <p>Based in the UK, yada yap</p>
        </div>
      </div>
    </div>
  );
}

function LinkedInLink() {
  const link = "https://www.linkedin.com/in/michael-malto233/";
  window.open(link, "_blank", "noreferrer");
}

function GithubLink() {
  const link = "https://github.com/Daru233";
  window.open(link, "_blank", "noreferrer");
}

function SpotifyLink() {
  const link = "https://open.spotify.com/user/oomichaeoo?si=049b1b9b7f56461d";
  window.open(link, "_blank", "noreferrer");
}

function SongLink() {
  const link = "https://open.spotify.com/user/oomichaeoo?si=049b1b9b7f56461d";
  window.open(link, "_blank", "noreferrer");
}
