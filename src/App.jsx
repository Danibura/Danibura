import me from "./assets/Rheinpark.jpg";
import linkedin from "./assets/social/linkedin.svg";
import instagram from "./assets/social/instagram.svg";
import gmail from "./assets/social/gmail.svg";
import github from "./assets/social/github.png";
import "./App.css";
import { useEffect, useRef } from "react";
import trip from "./assets/covers/trip.png";
import css from "./assets/languages/css.svg";
import js from "./assets/languages/js.svg";
import node from "./assets/languages/node.svg";
import express from "./assets/languages/express.svg";
import react from "./assets/languages/react.svg";
import html from "./assets/languages/html.svg";
import mongo from "./assets/languages/mongo.svg";
import php from "./assets/languages/php.svg";
import mysql from "./assets/languages/MySQL.svg";
import forum from "./assets/covers/forum.png";

function App() {
  const tiltRef = useRef(null);

  useEffect(() => {
    const el = tiltRef.current;
    if (!el) return;

    const maxTilt = 20;

    const updateTilt = (x, y) => {
      const rect = el.getBoundingClientRect();
      const offsetX = x - rect.left;
      const offsetY = y - rect.top;

      let px = offsetX / rect.width - 0.5;
      let py = offsetY / rect.height - 0.5;

      px *= 2;
      py *= 2;

      const rotateX = Math.max(Math.min(-py * maxTilt, maxTilt), -maxTilt);
      const rotateY = Math.max(Math.min(px * maxTilt, maxTilt), -maxTilt);

      el.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

      const glareX = (px + 1) * 50;
      const glareY = (py + 1) * 50;
      el.querySelector(".glare").style.background =
        `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.1) 0%, transparent 80%)`;
    };

    const handleMouseMove = (e) => updateTilt(e.clientX, e.clientY);
    const handleMouseLeave = () => {
      el.style.transform = `rotateX(0deg) rotateY(0deg)`;
      el.querySelector(".glare").style.background = "none";
    };

    const handleTouchMove = (e) => {
      const touch = e.touches[0];
      updateTilt(touch.clientX, touch.clientY);
    };
    const handleTouchEnd = () => handleMouseLeave();

    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);
    el.addEventListener("touchmove", handleTouchMove);
    el.addEventListener("touchend", handleTouchEnd);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
      el.removeEventListener("touchmove", handleTouchMove);
      el.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  return (
    <div className="">
      <div className="flex flex-wrap justify-center items-center gap-x-30 mt-6 md:mt-20">
        <div
          ref={tiltRef}
          className="w-48 md:w-80 rounded-3xl shadow-lg overflow-hidden select-none touch-none"
        >
          <img src={me} alt="Me" className="w-full h-auto" />
          <div className="glare absolute inset-0 pointer-events-none"></div>
        </div>
        <div className="block mt-8">
          <h1 className="font-bold text-4xl md:text-7xl">
            DANIELE <br /> BURATTI
          </h1>
          <h3 className="font-medium md:text-3xl mt-2 md:mt-4">
            Developer based in Milan
          </h3>
          <div className="flex mt-10 md:mt-14 gap-6 justify-center items-center">
            <a href="https://github.com/Danibura">
              <img
                src={github}
                alt="github"
                height="38"
                width="38"
                className="hover:scale-120 transition-transform duration-150"
              />
            </a>
            <a href="https://www.linkedin.com/in/daniele-buratti-23a0242b0/">
              <img
                src={linkedin}
                alt="linkedin"
                className="hover:scale-120 transition-transform duration-150"
              />
            </a>
            <a href="https://www.instagram.com/dani.buratti24/">
              <img
                src={instagram}
                alt="instagram"
                className="hover:scale-120 transition-transform duration-150"
              />
            </a>
            <a href="mailto:danibura2007@gmail.com">
              <img
                src={gmail}
                alt="gmail"
                className="hover:scale-120 transition-transform duration-150"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="md:mt-20">
        <div className="text-2xl mt-10 md:text-4xl font-extrabold bg-gradient-to-r from-green-700 via-white to-red-700 bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient">
          PROJECTS
        </div>
        <div className="flex flex-wrap gap-x-20 gap-y-5 justify-center">
          <a href="https://trip-planner-rust-gamma.vercel.app">
            <div className="bg-stone-900 rounded-2xl text-left text-stone-100 border border-stone-100 mt-4 md:mt-8 hover:shadow-lg shadow-sky-500/10 w-full pb-2 md:pb-4">
              <img
                src={trip}
                alt="trip"
                className="bg-clip-padding h-50 w-full rounded-2xl"
              />
              <h2 className="text-2xl md:text-3xl mt-2 ml-4">Trip planner</h2>
              <p className="text-md md:text-lg md:mt-1 ml-4 mb-2">
                A web app to organize trips with other people
              </p>
              <div className="flex flex-wrap mx-4 gap-3">
                <img src={html} alt="html" width="30" />
                <img src={css} alt="css" width="30" />
                <img src={js} alt="js" width="30" />
                <img src={react} alt="react" width="30" />
                <img src={node} alt="node" width="30" />
                <img src={express} alt="express" width="30" />
                <img src={mongo} alt="mongo" width="30" />
              </div>
            </div>
          </a>
          <a href="http://forumphp.rf.gd/">
            <div className="bg-stone-900 rounded-2xl text-left text-stone-100 border border-stone-100 mt-4 md:mt-8 hover:shadow-lg shadow-sky-500/10 w-full pb-2 md:pb-4">
              <img
                src={forum}
                alt="forum"
                className="bg-clip-padding h-50 w-full rounded-2xl"
              />
              <h2 className="text-2xl md:text-3xl mt-2 ml-4">Forum</h2>
              <p className="text-md md:text-lg md:mt-1 ml-4 mb-2">
                A forum with user and admin functions
              </p>
              <div className="flex flex-wrap mx-4 gap-3">
                <img src={html} alt="html" width="30" />
                <img src={css} alt="css" width="30" />
                <img src={js} alt="js" width="30" />
                <img src={php} alt="php" width="30" />
                <img src={mysql} alt="mysql" width="30" />
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
