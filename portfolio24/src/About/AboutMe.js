import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimation, delay } from "framer-motion";
import { SiLinkedin, SiGithub, SiSpotify, SiInstagram } from "react-icons/si";
import "./AboutMe.css";

export default function AboutMe() {
  const me = "/myLinkedInPic.png";

  const aboutRef = useRef(null);
  const isAboutInView = useInView(aboutRef, { once: true });
  const aboutAnimationControls = useAnimation();

  useEffect(() => {
    if (isAboutInView) {
      aboutAnimationControls.start("visible");
    }
  }, [isAboutInView]);

  const revealAnimation = {
    hidden: {
      opacity: 0.0,
      y: 120,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const transitionConfig = {
    duration: 0.5, delay: 0.2
  }

  return (
    <motion.div
      variants={revealAnimation}
      initial="hidden"
      animate={aboutAnimationControls}
      transition={transitionConfig}
      className="about-grid-container">
      <h1 className="bento-title">About Me</h1>
      <div className="box education bento-box-item">
        <div className="bento-content">
          <p>Graduated with </p>
          <h1>First Class Honors</h1>
          <p>At Universtiy of Ulster</p>
          <p>2018 - 2022</p>
        </div>
      </div>

      <div ref={aboutRef} className="box about-me-img bento-box-item">
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
          <p>🎧🎵</p>
          <p>golden hour - SB19 Remix</p>
        </div>
      </div>
      <div className="box background-me bento-box-item">
        <div className="bento-content">
          <h3>About Me</h3>
          <p>👶🏻 Born in the Philippines</p>
          <p>📍 Currently based in the UK</p>
          <p>🎵 I can't live without music</p>
        </div>
      </div>
      <div className="box interests bento-box-item">
        <div className="bento-content">
          <h3>Intersts</h3>
          <p>🎸 Love playing the guitar</p>
          <p>🌍 Travelling</p>
          <p>✨ Good Vibes Only</p>
        </div>
      </div>
      <div className="box quote bento-box-item">
        <div className="bento-content">
          <h3>Snippet from my favourite Quote by Charles Bukowski </h3>
          <blockquote>
            "If you're going to try, go all the way."
          </blockquote>
        </div>
      </div>
    </motion.div>
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
  const link = "https://open.spotify.com/track/6ZUSwmLViVASwgHkYWyc3Z?si=12e42b8cf9e6447d";
  window.open(link, "_blank", "noreferrer");
}
