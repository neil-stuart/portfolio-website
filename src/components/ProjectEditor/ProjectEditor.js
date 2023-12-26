
import { useEffect, useContext, useRef, useState } from "react";
import { AuthContext } from "./AuthContext";
import { useLocation } from "react-router-dom";
import MDViewer from "../MDViewer/MDViewer";

export const ProjectEditor = () => {

  const auth = useContext(AuthContext);
  const location = useLocation();
  const route = useRef();

  const [saved, setSaved] = useState(true);

  const [project, setProject] = useState(null);

  useEffect(() => {
    route.current = location.pathname.split("/")[2];
    fetch(`/api/projects/route/${route.current}`
    , {
      headers: {
        Authorization: `${auth}`,
      },
    })
      .then((response) => {
        if (response.status === 404) {
          setProject(
            {
              title: window.location.pathname.split("/")[2],
              date: new Date().toString(),
              content: "Project not found!",
              route: window.location.pathname.split("/")[2],
            }
          );
          throw new Error("Project not found!");
        }else{
          return response.json();
        }
      })
      .then((data) => {
        setProject(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [location.pathname, saved, auth]);

  const deleteProject = () => {

    fetch(`/api/projects/${project.route}`, {
      method: "DELETE",
      headers: {
        Authorization: `${auth}`,
      },
    }).then((response) => {
      if (response.status === 200) {
        window.location.href = "/projects";
      }
    });
  };

  useEffect(() => {
    // Define the delay time in milliseconds
    const delay = 750;

    // Clear any existing timers
    let timerId;

    // Function to save the essay with a delay
    const saveEssayWithDelay = () => {
      if (project.id === "") {
        setSaved(false);
      } else {
        // Clear any existing timer before starting a new one
        if (timerId) {
          clearTimeout(timerId);
        }

        // Set a timer to perform the save operation after the delay
        timerId = setTimeout(() => {
          fetch(`/api/projects/${project.route}`, {

            method: "PUT",

            headers: {
              Authorization: `${auth}`,
              "Content-Type": "application/json",
            },

            body: JSON.stringify({
              title: project.title,
              date: project.date,
              content: project.content,
              route: project.route,
            }),
          });
        }, delay);
      }
    };

    // Call the saveEssayWithDelay function
    if(project){
      saveEssayWithDelay();
    }

    // Cleanup function to clear the timer if the component unmounts
    return () => {
      if (timerId) {
        clearTimeout(timerId);
      }
    };
  }, [project, auth]);

  return (
    <div className="overflow-hidden">
    {project &&
    <div className="h-fit dark overflow-hidden min-w-screen flex flex-row ">
    <div className="max-h-screen min-h-screen min-w-screen font-mono flex flex-col  items-center bg-slate-950">
      <div className="flex flex-col overflow-y-auto min-w-[50vw] max-w-[800px] w-full px-6 pt-40 items-center">
        <div className="flex flex-row w-full pb-16 items-center justify-between">
          <h1 className="text-base xs:text-xl font-semibold flex flex-row items-center gap-8 text-slate-300">
            {/* Delete a project button */}
            <button
              className="text-red-300 border-red-300 p-1 px-2 text-sm bg-transparent border-2 rounded-md hover:text-red-500"
              onClick={deleteProject}>D</button>
            <input className="bg-slate-900 w-64" value={project.title} onChange={(e) => setProject({ ...project, title: e.target.value })}></input></h1>
          <h2 className="text-sm xs:text-base  text-orange-300">{project.date}</h2>
        </div>
        <MDViewer content={project.content} />
      </div>
    </div>
    <div className="flex flex-grow max-h-screen min-h-screen bg-slate-950">
      <textarea className="p-10 flex-grow bg-slate-950 w-full font-mono text-slate-200" value={project.content} onChange={(e) => setProject({ ...project, content: e.target.value })} />
    </div>
    </div>}
    </div>
  );
};
