import { useEffect, useRef } from "react";
import MDViewer from "../components/MDViewer/MDViewer";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { Within } from "@theme-toggles/react";

const Project = () => {
  const [project, setProject] = useState({});
  const route = useRef("");
  const location = useLocation();
  const [darkMode, setDarkMode] = useState(true);
  useEffect(() => {
    
    route.current = location.pathname.split("/")[2];
    fetch(`/api/projects/route/${route.current}`)
      .then((response) => response.json())
      .then((data) => {
        setProject(data);
      })
      .catch((error) => {
        console.error("Error fetching essays:", error);
      });

  }, [location.pathname]);

  return (
    <div class={darkMode ? "dark" : ""}>
      <div  className="min-h-screen min-w-screen font-mono flex flex-col  items-center bg-yellow-100  dark:bg-slate-950">

        <div className="flex flex-col max-w-[800px] w-full px-6 pt-40 pb-40 items-center">

          <div className="flex flex-col gap-10 md:gap-0 md:flex-row w-full pb-16 md:items-center justify-between">


            <h1 className="text-base xs:text-xl font-semibold flex flex-row items-center gap-8 text-slate-800 dark:text-amber-200"><div onClick={()=>{window.location.href = "/projects"}} className="bg-slate-900 dark:bg-orange-300 animate-pulse cursor-pointer rounded-full w-3 h-3"/>{project.title}</h1>
            <h2 className="flex flex-row items-center gap-4 text-sm xs:text-base  text-slate-900 dark:text-orange-300">
              <Within
              className="text-xl  text-slate-800 dark:text-orange-300 md:text-[1.5rem] "
              toggled={darkMode}
              toggle={setDarkMode}
              />
              {project.date}
              
            </h2>
          </div>
          <MDViewer content={project.content} />
        </div>
      </div>
    </div>
  );
};

export default Project;
