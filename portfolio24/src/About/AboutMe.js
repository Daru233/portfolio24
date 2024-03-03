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
          <p>Duvet - Bôa</p>
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
          <p>🎸 I {"(try)"} play the guitar</p>
          <p>🌍 Travelling</p>
          <p>✨ Good Vibes Only</p>
        </div>
      </div>
      <div className="box quote bento-box-item">
        <div className="bento-content">
          <h3>Fave Quote by Charles Bukowski </h3>
          <blockquote>
            “If you're going to try, go all the way. Otherwise, don't even start. This could mean losing girlfriends, wives, relatives and maybe even your mind. It could mean not eating for three or four days. It could mean freezing on a park bench. It could mean jail. It could mean derision. It could mean mockery--isolation. Isolation is the gift. All the others are a test of your endurance, of how much you really want to do it. And, you'll do it, despite rejection and the worst odds. And it will be better than anything else you can imagine. If you're going to try, go all the way. There is no other feeling like that. You will be alone with the gods, and the nights will flame with fire. You will ride life straight to perfect laughter. It's the only good fight there is.”
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
  const link = "https://open.spotify.com/user/oomichaeoo?si=049b1b9b7f56461d";
  window.open(link, "_blank", "noreferrer");
}
