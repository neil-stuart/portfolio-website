"use client";
import { useEffect, useState } from "react";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useData } from "./components/DataContext";


const Project = ({ title, slug }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Link href={"/project/" + slug}>
    <motion.div
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      whileHover={{ scale: 1.02, rotate: -2 }}
      className="relative duration-200 rounded-2xl hover:bg-blue-200 dark:hover:bg-blue-900 cursor-pointer"

      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex flex-col w-full z-10 relative  min-h-[10rem]  justify-between p-8 border border-2 border-stone-950 dark:border-yellow-100 dark:border-opacity-45 rounded-2xl">
        <div className="font-semibold">{title}</div>
        <div className="flex flex-row justify-between">
          <h1 className="text-base text-stone-800 dark:text-stone-400">
            ~5 min.
          </h1>
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
                  className="dark:stroke-stone-50 stroke-stone-900"
                  fill="none"
                />
                <line
                  stroke-width="1.4"
                  stroke-linecap="undefined"
                  stroke-linejoin="undefined"
                  id="svg_3"
                  y2="13.96491"
                  
                  className="dark:stroke-stone-50 stroke-stone-900"
                  x2="23.53772"
                  y1="0.8036"
                  x1="23.53772"
                  fill="none"
                />
                <line
                  stroke-width="1.4"
                  stroke-linecap="undefined"
                  stroke-linejoin="undefined"
                  className="dark:stroke-stone-50 stroke-stone-900"
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
    </Link>
  );
};


export default function Page({}) {


  const { projectsData, setProjectsData } = useData();
  useEffect(() => {
    const fetchData = async () => {
      // Fetch data from the server
      const response = await fetch('/api/projects', { method: "POST"});
      const data = await response.json();
      setProjectsData(data.body);
    };

    // Fetch data only if it's not already fetched
    if (!projectsData) {
      fetchData();
    }
  }, [projectsData, setProjectsData]);
  return (
    <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ ease: "easeOut", duration: 0.15 }}
    className="grow flex flex-col w-full items-center grow ">
      <div className="flex flex-col max-w-[45rem] w-full pb-8 px-6">
        <div className="text-xl mb-2 font-semibold ">Posts 🗞️</div>
        <div className="grid grid-flow-row items-start grid-cols-1 sm:grid-cols-2  scrollbar-hide   gap-5 w-full ">
          {!projectsData ? (
            <div className="text-base opacity-95 w-fit dark:bg-yellow-900 bg-yellow-300 rounded-lg p-3 align-center ">
              Nothing posted yet.
            </div>
          ) : (
            projectsData.map((project) => (
              <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ ease: "easeOut", duration: 0.15 }}
              >
              <Project
                slug={project.slug}
                key={project.id}
                title={project.title}
              />
              </motion.div>
            ))
          )}
        </div>
      </div>

      <div className="flex flex-col max-w-[45rem] w-full pb-8 px-6">
        <div className="text-xl mb-2 font-semibold ">Repositories</div>
        <div className="flex flex-col gap-5 w-full ">
          <div className="text-base opacity-95 w-fit dark:bg-green-900 bg-green-300 rounded-lg p-3 align-center ">
            No repositories to show!
          </div>
        </div>
      </div>

      <div className="min-h-[6rem]" />
    </motion.div>
  );
}
