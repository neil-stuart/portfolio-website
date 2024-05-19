"use client";
import { useEffect, useState } from "react";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useData } from "./components/DataContext";
import launchcopyimg from "../pics/launchcopy.webp";

import mimicaiimg from "../pics/mimicai.webp";
import Image from "next/image";
const Post = ({ title, slug }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Link href={"/project/" + slug}>
    <motion.div
      whileHover={{ scale: 1.02, rotate: -2 }}
      className="relative duration-200 cursor-pointer rounded-2xl hover:bg-blue-200 dark:hover:bg-blue-900"

      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex flex-col w-full z-10 relative  min-h-[10rem]  justify-between p-8 border border-stone-950 dark:border-yellow-100 dark:border-opacity-45 rounded-2xl">
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
                  strokeWidth="1.4"
                  strokeLinecap="undefined"
                  strokeLinejoin="undefined"
                  id="svg_1"
                  y2="1.4928"
                  x2="23.6322"
                  y1="23.43749"
                  x1="1.68751"
                  className="dark:stroke-stone-50 stroke-stone-900"
                  fill="none"
                />
                <line
                  strokeWidth="1.4"
                  strokeLinecap="undefined"
                  strokeLinejoin="undefined"
                  id="svg_3"
                  y2="13.96491"
                  
                  className="dark:stroke-stone-50 stroke-stone-900"
                  x2="23.53772"
                  y1="0.8036"
                  x1="23.53772"
                  fill="none"
                />
                <line
                  strokeWidth="1.4"
                  strokeLinecap="undefined"
                  strokeLinejoin="undefined"
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

const Project = ({ title, img, description, link, alt }) => {
return(
  <Link href={link}>
  <div className="flex flex-row gap-4 p-3 duration-200 border border-opacity-0 rounded-md border-stone-500 hover:border-opacity-100">
            <Image alt={alt} src={img} className="w-20 h-20" />
            <div>
            <div className="text-lg font-semibold">{title}</div> 
            <div className="text-base text-stone-800 dark:text-stone-400">{description}</div> 
            </div>
          </div>
          </Link>)
}
export default function Page({}) {


  const { projectsData: postData, setProjectsData: setPostData } = useData();
  const [repos, setRepos] = useState();
  useEffect(() => {
    const fetchProjects = async () => {
      // Fetch data from the server
      const response = await fetch('/api/projects', { method: "POST"});
      const data = await response.json();
      setPostData({...postData, meta: data.body});
    };
    const fetchRepos = async () => {
      // Fetch data from the server
      const response = await fetch("https://api.github.com/users/neil-stuart/repos?type=owner&per_page=100");
      const data = await response.json();
      // Extract name, html_url, description, and updated_at from each repo.
      var new_repos = data.map(({name, html_url, description, updated_at, language}) => ({name, html_url, description, updated_at, language}));
      // only show 4 repos
      
      setRepos(new_repos.slice(0, 4));
    }
    // Fetch data only if it's not already fetched
    if (!postData || !("meta" in postData)) {
      fetchProjects();
    }
    if (!repos) {
      fetchRepos();
    }

  }, []);
  


  
  return (
    <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ ease: "easeOut", duration: 0.15 }}
    className="flex justify-center w-full grow">
      <div className="flex flex-col max-w-[45rem] w-full pb-8 gap-5 px-6">
        <div className="mb-2 text-xl font-semibold ">Projects</div>
        <div className="grid items-start w-full grid-flow-row grid-cols-1 gap-5 sm:grid-cols-2 ">
          <Project title="Launchcopy" alt="launchcopy" img={launchcopyimg} link={"https://launchcopy.co/"} description="Simple, effective, and fast copy for startups."/>
          <Project title="MimicAI" alt="mimicai" img={mimicaiimg} link={"https://mimicai-app.vercel.app/"} description="Affordable cybersecurity awareness for SMEs."/>
          
        </div>
        <div className="mt-4 mb-2 text-xl font-semibold ">Posts 🗞️</div>
        <div className="grid items-start w-full grid-flow-row grid-cols-1 gap-5 sm:grid-cols-2 ">
          {!postData || !("meta" in postData) || postData.meta.length == 0 ? (
            <div className="p-3 text-base bg-orange-300 rounded-lg opacity-95 w-fit dark:bg-yellow-900 align-center ">
              Nothing posted yet.
            </div>
          ) : (
            postData.meta.map((project) => (
              <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ ease: "easeOut", duration: 0.15 }}
              >
              <Post
                slug={project.slug}
                
                title={project.title}
              />
              </motion.div>
            ))
          )}
        </div>
        <div className="mt-6 mb-2 text-xl font-semibold ">Repositories ⛵</div>
        <div className="flex flex-col w-full gap-5 ">
          {!repos ?<div className="p-3 text-base bg-green-300 rounded-lg opacity-95 w-fit dark:bg-green-900 align-center ">
            
            
            No repositories to show!
          </div>:
          <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ ease: "easeOut", duration: 0.15 }}
          className="grid items-start w-full grid-flow-row grid-cols-1 gap-5 sm:grid-cols-2 scrollbar-hide">
            {repos.map((repo, i) => (
              <motion.div
              key={i}
              className="pt-1"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{duration: 0.4}}
              whileHover={{ scale: 1.02, rotate: -2 }}
              >
              <Link href={repo.html_url} >
              <div className="flex flex-col w-full gap-2 p-4 duration-200 border rounded-lg hover:bg-amber-300 dark:hover:bg-amber-950 border-blue-950 dark:border-blue-500 dark:border-opacity-25">
                <div className="font-semibold">{repo.name}</div>

                <div className="text-sm text-stone-800 dark:text-stone-400">{repo.description}</div>
                <div className="flex flex-row items-center gap-2 text-sm content text-stone-800 dark:text-stone-400">
                  <div className="w-3 h-3 bg-yellow-600 rounded-full"/>
                  {repo.language}</div>
              
                <div className="text-xs text-stone-800 dark:text-stone-400">{repo.updated_at}</div>
              </div>
              </Link>
              </motion.div>
            ))}
          </motion.div>

          }
        </div>
        
      </div>

      
    </motion.div>
  );
}
