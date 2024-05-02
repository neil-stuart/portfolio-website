"use client";

import "./index.css";
import "./output.css";
import portrait from "../pics/portrait.JPG"
import { useEffect, useState } from "react";
import "@theme-toggles/react/css/Simple.css";
import { Simple } from "@theme-toggles/react";
import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import {
  SiGithub,
  SiLinkedin,
  SiGmail,
} from "@icons-pack/react-simple-icons";


const Header = ({ darkMode, setDarkMode }) => {
  return (
    <div className="flex fixed m-6 z-30 max-w-[45rem] w-[95%]  flex-row  justify-between items-center">
      <div />
      <div className="dark:text-stone-50 text-stone-900 bg-stone-200 flex items-center dark:bg-opacity-20 bg-opacity-20 backdrop-blur-sm justify-center border border-stone-700 px-3 py-3 rounded-xl dark:bg-stone-950">
      <Simple
        className="text-[1.6rem] "
        toggled={darkMode}
        toggle={setDarkMode}
      />
      </div>
    </div>
  );
};


const Project = ({ title, slug, darkMode }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
    drag="x"
    dragConstraints={{left:0,right:0}}
    whileHover={{scale:1.02,rotate:-2}}
      className="relative duration-200 rounded-2xl hover:bg-blue-200 dark:hover:bg-blue-900 cursor-pointer"
      onClick={
        () => {
          window.location.href = "/project/" + slug;
        }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex flex-col w-full z-10 relative  min-h-[10rem]  justify-between p-8 border border-2 border-stone-950 dark:border-yellow-100 dark:border-opacity-45 rounded-2xl">
        <div className="font-semibold">{title}</div>
        <div className="flex flex-row justify-between">
          <h1 className="text-base text-stone-800 dark:text-stone-400">~5 min.</h1>
          <motion.div
            className="relative"
            style={{
              transition: "top 0.3s ease-in-out",
              top: hovered ? "-0.2rem" : "0",
            }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 25 25"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Arrow">
                <title>Arrow</title>
                <line
                  stroke-width="1.4"
                  stroke-linecap="undefined"
                  stroke-linejoin="undefined"
                  id="svg_1"
                  y2="1.4928"
                  x2="23.6322"
                  y1="23.43749"
                  x1="1.68751"
                  stroke={darkMode ? "rgb(254 249 195)" : "rgb(2 6 23)"}
                  fill="none"
                />
                <line
                  stroke-width="1.4"
                  stroke={darkMode ? "rgb(254 249 195)" : "rgb(2 6 23)"}
                  stroke-linecap="undefined"
                  stroke-linejoin="undefined"
                  id="svg_3"
                  y2="13.96491"
                  x2="23.53772"
                  y1="0.8036"
                  x1="23.53772"
                  fill="none"
                />
                <line
                  stroke={darkMode ? "rgb(254 249 195)" : "rgb(2 6 23)"}
                  stroke-width="1.4"
                  stroke-linecap="undefined"
                  stroke-linejoin="undefined"
                  id="svg_4"
                  y2="1.5033"
                  x2="10.44675"
                  y1="1.5033"
                  x1="23.97871"
                  fill="none"
                />
              </g>
            </svg>
          </motion.div>
        </div>
      </div>

    </motion.div>
  );
};

const FaceBanner = () => {
  return (
    <div className="w-full max-w-[45rem] p-6 pb-8 flex flex-col sm:items-center sm:flex-row  gap-4">
    <div className="rounded-2xl w-fit h-fit border dark:border-stone-700 border-stone-800">
    <Image
      src={portrait}
      width={140}
      height={140}
      className="rounded-2xl"
      alt="Picture of the author"
    />
    </div>
    <div className="flex flex-col gap-1">
    <div className="text-2xl">Neil Stuart 👋</div>
      <div className="font-semibold text-lg mb-2">21.</div>
      <div className="text-sm">I am working on:</div>
      <div className="text-base text-stone-900 dark:text-stone-200">
        <b>Start100</b> <i>University of Galway</i><br/>
        <b>CMOS Amplifier Design for Sensor Interfaces</b> <i>Tyndall Institute</i>
      
      </div>
    </div>
    </div>
  )
}


const Info = () => {

  return (
    <div className="flex fixed bottom-0 flex-col z-20 items-center mb-4">
    <div className="h-fit max-w-fit w-fit flex flex-col items-center gap-4 mb-3  p-6 rounded-xl bg-opacity-20 backdrop-blur-sm border border-stone-700 font-semibold text-xl text-amber-50  bg-stone-50 dark:bg-stone-950 dark:bg-opacity-20">
      <div className="flex flex-row gap-3 text-yellow-200 items-center justify-items-center">
        <motion.div
        whileHover={{rotate:-10,scale:1.05}}
        onClick={()=>window.location.href = "CV2023.pdf"} 
        className="border border-yellow-600 dark:border-yellow-200 duration-[0.3s] dark:hover:bg-yellow-900 hover:bg-yellow-200 dark:text-yellow-200 text-yellow-600 hover:cursor-pointer p-3 w-12 h-13 text-base rounded-lg">
          CV
        </motion.div>

        <motion.div
        whileHover={{rotate:10,scale:1.05}}
        onClick={()=>window.location.href = "mailto:neil.stuart11@gmail.com"} 
        className="border duration-[0.3s] hover:bg-purple-900 hover:cursor-pointer dark:border-purple-400 border-purple-900 p-3 w-12 h-13 text-base text-purple-400 rounded-lg">
          <SiGmail/>
        </motion.div>

        <motion.div 
        whileHover={{rotate:-10,scale:1.05}}
        onClick={()=>window.location.href = "https://neilstu.art/"} 
        
        className="border duration-[0.3s] hover:bg-blue-900 hover:cursor-pointer p-3  w-12 h-13 text-base  border-blue-400 rounded-lg">
        
          <div className="w-6 h-6 rounded-full bg-blue-400"/>
        </motion.div>

        <motion.div 
        whileHover={{rotate:10,scale:1.05}}
        onClick={()=>window.location.href = "https://www.linkedin.com/in/neil-stuart-44705525b/"} 
        
        className="border duration-[0.3s] dark:hover:bg-cyan-900 hover:bg-cyan-200  hover:cursor-pointer dark:text-cyan-300 text-cyan-500 dark:border-cyan-300 border-cyan-500 p-3 w-12 h-13 text-base rounded-lg">
        
        
          <SiLinkedin/>
        </motion.div>
      
        <motion.div  
        whileHover={{rotate:-10,scale:1.05}}
        onClick={()=>window.location.href = "https://github.com/neil-stuart"} 
        
        className="border duration-[0.3s] hover:bg-emerald-900 hover:cursor-pointer  text-emerald-400 border-emerald-400 p-3 w-12 h-13 text-base rounded-lg">
          <SiGithub/>
        </motion.div>
      </div>

      
    </div>

    </div>
  );
};

export default function Index() {
  const x = useMotionValue(0)
  const opacity = useTransform(x, [-100, 0, 100], [0.5, 1, 0.5])
  
  const [darkMode, setDarkMode] = useState(true);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/api/projects",{method:"POST"})
      .then((response) => response.json())
      .then((data) => {
        setProjects(data.body);
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
      });
  }, []);


  return (
    <div className={darkMode ? "dark" : ""}>
      <div
        className={
          "flex max-w-screen w-screen min-h-screen select-none "
        }
      >
        <div className="flex flex-col grow">
          <div
            className={
              "flex grow items-center text-slate-950 dark:text-slate-50  flex-col bg-stone-100 dark:bg-stone-900"
            }
          >
            <Header darkMode={darkMode} setDarkMode={setDarkMode} />
            <FaceBanner/>
            
            <div className="flex flex-col max-w-[45rem] w-full grow pb-8 px-6">
            <div className="text-xl mb-2 font-semibold ">
              Posts 🗞️
            </div>
            <div className="grid grid-flow-row items-start grid-cols-1 sm:grid-cols-2  scrollbar-hide   gap-5 w-full ">
              {projects.length === 0 ? (<div className="text-base opacity-95 w-fit dark:bg-yellow-900 bg-yellow-300 rounded-lg p-3 align-center ">Nothing posted yet.</div>)
              :projects.map((project) => (
                <Project darkMode={darkMode} slug={project.slug} key={project.id} title={project.title} />
              ))}
              {/* <Project darkMode={darkMode} slug={"Dev"} title={"Test Project for development purposes"}/> */}
            </div>
            </div>

            <div className="flex flex-col max-w-[45rem] w-full grow pb-8 px-6">
            <div className="text-xl mb-2 font-semibold ">
              Repositories 
            </div>
            <div className="flex flex-col gap-5 w-full ">
              <div className="text-base opacity-95 w-fit dark:bg-green-900 bg-green-300 rounded-lg p-3 align-center ">No repositories to show!</div>
            </div>
            </div>


            <Info/>
            <div className="min-h-[6rem]"/>
          </div>
          <div className="h-fit dark:bg-stone-900 bg-stone-50 flex justify-center ">
          <motion.div animate={{}} 
          drag="x"
          style={{ x, opacity }}
          dragConstraints={{ left: -10, right: 10 }}
          className="text-base text-stone-800 dark:bg-stone-900 justify-center flex dark:text-stone-500">
         © Neil Stuart 2024
         
        </motion.div>
        </div>
        </div>

      </div>
    </div>
  );
}
