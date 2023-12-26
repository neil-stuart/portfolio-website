import { useEffect, useRef } from "react";
import MDViewer from "../components/MDViewer/MDViewer";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const Project = () => {
  const [project, setProject] = useState({});
  const route = useRef("");
  const location = useLocation();
  
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
    <div className="min-h-screen min-w-screen font-mono flex flex-col  items-center bg-slate-900">
      <div className="flex flex-col max-w-[800px] w-full px-6 pt-40 pb-40 items-center">
        <div className="flex flex-col gap-10 md:gap-0 md:flex-row w-full pb-16 md:items-center justify-between">
          <h1 className="text-base xs:text-xl font-semibold flex flex-row items-center gap-8 text-slate-300"><div onClick={()=>{window.location.href = "/projects"}} className="bg-orange-300 animate-pulse cursor-pointer rounded-full w-3 h-3"/>{project.title}</h1>
          <h2 className="text-sm xs:text-base  text-orange-300">{project.date}</h2>
        </div>
        <MDViewer content={project.content} />
      </div>
    </div>
  );
};

export default Project;
