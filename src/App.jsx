import { useState } from "react";
import me from "./assets/Rheinpark.jpg";
import linkedin from "./assets/linkedin.svg";
import instagram from "./assets/instagram.svg";
import gmail from "./assets/gmail.svg";
import github from "./assets/github.png";
import "./App.css";

function App() {
  return (
    <div>
      <div className="flex flex-wrap justify-center">
        <img src={me} alt="Me" className="w-48 md:w-80 rounded-3xl m-10" />
        <div className="block">
          <h1 className="font-bold">DANIELE BURATTI</h1>
          <h3 className="font-medium">Developer based in Milan</h3>
          <div className="flex mt-10 gap-6 justify-center items-center">
            <a href="https://github.com/Danibura">
              <img src={github} alt="github" height="38" width="38" />
            </a>
            <a href="https://www.linkedin.com/in/daniele-buratti-23a0242b0/">
              <img src={linkedin} alt="linkedin" />
            </a>
            <a href="https://www.instagram.com/dani.buratti24/">
              <img src={instagram} alt="instagram" />
            </a>
            <a href="mailto:danibura2007@gmail.com">
              <img src={gmail} alt="gmail" />
            </a>
          </div>
        </div>
      </div>
      <div className="">
        <div className="text-2xl mt-10">PROJECTS</div>
        <a href="https://trip-planner-rust-gamma.vercel.app">
          <div className="bg-stone-900 rounded-2xl text-left text-stone-100 p-3 border border-stone-100 mt-4">
            <h2 className="text-2xl">Trip planner</h2>
            <p className="text-md ">
              A web app to organize trips with other people
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}

export default App;
