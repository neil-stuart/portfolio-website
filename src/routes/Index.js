import { useEffect, useState } from "react";
import "@theme-toggles/react/css/Within.css";
import { Within } from "@theme-toggles/react";
import React from "react";
import {
  SiC,
  SiGithub,
  SiFlask,
  SiHeroku,
  SiJavascript,
  SiMongodb,
  SiMui,
  SiMysql,
  SiNextdotjs,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiStyledcomponents,
  SiHtml5,
  SiCss3,
} from "@icons-pack/react-simple-icons";


const Header = ({ darkMode, setDarkMode }) => {
  return (
    <div className="flex pb-4 px-1 flex-row w-full  border-b border-b-[0.12rem] border-slate-950 dark:border-amber-100 justify-between items-center">
      <div className="flex flex-col gap-1 w-full justify-left">
        <div className="text-slate-950 dark:text-amber-100 gap-3 md:items-end flex flex-col md:flex-row">
          <div className="flex flex-row justify-between">
            <div className="text-[1.15rem] font-bold">Neil Stuart</div>{" "}

          </div>
          <div className="bg-slate-950 hidden md:block dark:bg-amber-100 max-w-[0.1rem]">
            &nbsp;
          </div>
          <div className="flex flex-row items-center gap-1 text-[0.6rem] md:text-sm grow font-bold">
            <div className="text-[0.5rem] md:text-xs max-h-5 font-semibold bg-blue-500 text-slate-100 rounded-md p-[0.1rem] px-[0.2rem]">
              BE
            </div>
            <div className="text-[0.5rem] md:text-xs max-h-5 font-semibold bg-red-500 text-slate-100 rounded-md p-[0.1rem] px-1">
              ME
            </div>
            Electrical & Electronic Engineering
          </div>
        </div>
        <div className="flex flex-row gap-2 text-[0.5rem] items-center">
          <div className="w-4 h-4 bg-orange-500 rounded-full animate-pulse" />
          <div className=" text-xs md:text-base font-bold dark:text-amber-100 text-slate-950">
            University of Galway
          </div>
        </div>
      </div>
      <Within
        className="text-xl  md:text-[1.65rem] "
        toggled={darkMode}
        toggle={setDarkMode}
      />
    </div>
  );
};

const UnderlineMoving = ({ selectedNavItem, hoveredNavItem }) => {
  const [overlayHeight, setOverlayHeight] = useState("1rem");
  const pos = hoveredNavItem
    ? hoveredNavItem === "Projects"
      ? "0.5rem"
      : hoveredNavItem === "Skills"
      ? "8.2rem"
      : "14.7rem"
    : selectedNavItem === "Projects"
    ? "0.5rem"
    : selectedNavItem === "Skills"
    ? "8.2rem"
    : "14.7rem";

  const selectedPos =
    selectedNavItem === "Projects"
      ? "0.5rem"
      : selectedNavItem === "Skills"
      ? "8.2rem"
      : "14.7rem";

  const selectedWidth =
    selectedNavItem === "Projects"
      ? "3.8rem"
      : selectedNavItem === "Skills"
      ? "2.5rem"
      : "3rem";

  const width = hoveredNavItem
    ? hoveredNavItem === "Projects"
      ? "3.8rem"
      : hoveredNavItem === "Skills"
      ? "2.5rem"
      : "3rem"
    : selectedNavItem === "Projects"
    ? "3.8rem"
    : selectedNavItem === "Skills"
    ? "2.5rem"
    : "3rem";

  useEffect(() => {
    setOverlayHeight("0.4rem");
    setTimeout(() => {
      setOverlayHeight("0.9rem");
    }, 400);
  }, [selectedNavItem]);

  return (
    <div className="relative top-[-0.7rem] ">
      <div
        style={{
          height: overlayHeight,
          transition:
            "height 0.2s ease-in-out 0s, left 0.4s cubic-bezier(0.37, 0.2, 0.32, 0.99), width 0.2s ease-in-out 0.15s ",
          left: selectedPos,
          width: selectedWidth,
        }}
        className="h-[1.3rem] top-[-1rem] absolute bg-orange-500 opacity-35 dark:opacity-55"
      >
        &nbsp;
      </div>

      <div
        style={{
          transition:
            "left 0.4s cubic-bezier(0.37, 0.2, 0.32, 0.99), width 0.4s cubic-bezier(0.37, 0.2, 0.32, 0.99) 0s",
          left: pos,
          height: "0.15rem",
          width: width,
        }}
        className="relative dark:bg-amber-100 bg-slate-950"
      >
        &nbsp;
      </div>
    </div>
  );
};

const Project = ({ title, route, darkMode }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative cursor-pointer"
      onClick={
        () => {
          window.location.href = "/project/" + route;
        }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex flex-row w-full z-10 relative items-center justify-between px-5 py-2 border-x border-x-2 border-slate-950 dark:border-yellow-100 dark:border-opacity-45 rounded-[0.3rem]">
        <div className="font-bold">{title}</div>
        <div
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
        </div>
      </div>
      <div
        style={{
          height: hovered ? "0.9rem" : "0rem",
          transition: "height 0.2s ease-in-out 0.1s",

          width: title.length.toFixed(2) / 1.98 + "rem",
        }}
        className="h-[1.3rem] top-[0.8rem] left-5 z-0 absolute bg-orange-400 opacity-45"
      >
        &nbsp;
      </div>
    </div>
  );
};

const HoverCard = ({ children, text, width, wrap }) => {
  const [hovered, setHovered] = useState(false);
  const transitions =
    "bottom 0.3s cubic-bezier(0.37, 0.2, 0.32, 0.99), opacity 0.3s cubic-bezier(0.37, 0.2, 0.32, 0.99)";

  const [hidden, setHidden] = useState(false);
  const [visible, setVisible] = useState(false);

  const [animationTimeout, setAnimationTimeout] = useState(null);

  useEffect(() => {
    if (hovered) {
      setHidden(false);
      clearTimeout(animationTimeout); // Cancel previous timeout
      const timeout = setTimeout(() => setVisible(true), 100);
      setAnimationTimeout(timeout); // Save the new timeout reference
    } else {
      setVisible(false);
      clearTimeout(animationTimeout); // Cancel previous timeout
      const timeout = setTimeout(() => setHidden(true), 350);
      setAnimationTimeout(timeout); // Save the new timeout reference
    }
  }, [hovered]);

  return (
    <div className="relative">
      {
        <div
          className=" absolute "
          style={{
            width: width,
            transition: transitions,
            left: "50%",
            whiteSpace: wrap === false ? "nowrap" : "wrap",
            bottom: visible ? "2.2rem" : "1rem",
            opacity: visible ? 1 : 0,
            display: hidden ? "none" : "",
          }}
        >
          <div
            className="bg-slate-950  p-3 text-sm text-amber-200 h-fit  rounded-xl"
            style={{ position: "relative", left: "-50%" }}
          >
            {text}
          </div>
        </div>
      }
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative"
      >
        {children}
      </div>
    </div>
  );
};

const Skills = ({ darkMode }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const transitions = "transform 0.3s ease-in-out";

  const circDist = (index) => {
    let b = hoveredIndex;
    let a = index;
    let n = 14;
    return (
      Math.abs(1 - Math.abs(((b - a) % n) - ((a - b) % n)) / n) + 0.48
    ).toFixed(2);
  };

  const icons = [
    <SiJavascript size={20} />,
    <SiC size={20} />,
    <SiPython size={20} />,
    <SiHtml5 size={20} />,
    <SiCss3 size={20} />,
    <SiMongodb size={20} />,
    <SiMysql size={20} />,
    <SiFlask size={20} />,
    <SiReact size={20} />,
    <SiNextdotjs size={20} />,
    <SiTailwindcss size={20} />,
    <SiMui size={20} />,
    <SiStyledcomponents size={20} />,
    <SiHeroku size={20} />,
    <SiGithub size={20} />,
  ];

  const iconNames = [
    "JavaScript",
    "C",
    "Python",
    "HTML5",
    "CSS3",
    "MongoDB",
    "MySQL",
    "Flask",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Material-UI",
    "Styled Components",
    "Heroku",
    "GitHub",
  ];

  const iconLinks = [
    "https://www.javascript.com",
    "https://www.cprogramming.com",
    "https://www.python.org",
    "https://developer.mozilla.org/en-US/docs/Web/HTML",
    "https://developer.mozilla.org/en-US/docs/Web/CSS",
    "https://www.mongodb.com",
    "https://www.mysql.com",
    "https://flask.palletsprojects.com/en",
    "https://reactjs.org",
    "https://nextjs.org",
    "https://tailwindcss.com",
    "https://mui.com",
    "https://styled-components.com",
    "https://www.heroku.com",
    "https://github.com",
  ];

  const ElectricalandElectronicSkills = [
    {
      name: "LTSpice",
      text: "Worked with LTSpice in 2nd and 3rd year of college. Used to simulate frequency response of filters and amplifiers.",
    },
    {
      name: "PCB (KiCad)",
      text: "Used KiCad to design PCBs for projects in 2nd and 3rd year of college.",
    },
    {
      name: "Analogue Design",
      text: "Learned about analogue design in 2nd year of college. Projects included designing BJT and MOSFET amplifiers. Designed filters in 3rd year of college.",
    },
    {
      name: "Digital Design (VHDL)",
      text: "Created a VHDL implementation of a level 1 RISC-V processor in 3rd year of college, using Vivado.",
    },
  ];

  return (
    <div className="flex flex-col grow items-center  w-full px-2">
      <div className="grid grid-cols-1 md:grid-cols-2  grid-rows-1 flex-grow text-left gap-5 md:gap-1">
        <div className="">
          <h1 className="pb-2 text-lg text-slate-950 dark:text-amber-100 font-bold font-mono">
            Web Dev & Software
          </h1>
          <div className="flex flex-row justify-left w-[80%] flex-wrap gap-5 items-center">
            {icons.map((icon, index) => (
              <a href={iconLinks[index]} key={index}>
                <HoverCard width="fit" wrap={false} text={iconNames[index]}>
                  {React.cloneElement(icon, {
                    color: darkMode
                      ? "rgb(254 243 199 / var(--tw-text-opacity))"
                      : "rgb(2 6 23 / var(--tw-bg-opacity)",
                    onMouseEnter: () => setHoveredIndex(index),
                    onMouseLeave: () => setHoveredIndex(-1),
                    style: {
                      transition: transitions,
                      transform:
                        "scale(" +
                        (hoveredIndex !== -1 ? circDist(index) : "1") +
                        ")",
                    },
                    title: "",
                  })}
                </HoverCard>
              </a>
            ))}
          </div>
        </div>
        <div className="z-10">
          <h1 className="pb-2 text-lg text-slate-950 dark:text-amber-100 font-bold font-mono">
            Electrical & Electronic Skills
          </h1>
          <div className="flex flex-row flex-wrap gap-5">
            {ElectricalandElectronicSkills.map((skill, index) => (
              <HoverCard width="12rem" text={skill.text}>
                <div className="text-sm p-[0.3rem] hover:scale-90 transition-all duration-300  font-semibold border border-emerald-700 rounded-lg">
                  {skill.name}
                </div>
              </HoverCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Info = () => {
  return (
    <div className="h-full w-full md:w-[47%] rounded-2xl md:rounded-l-none px-5 py-3 font-bold text-lg text-yellow-100 dark:border-yellow-100 dark:border-y dark:border-r dark:border-opacity-45 bg-slate-950">
      Info
      <p className="text-xs mt-2 text-yellow-50 text-right"> Here's my CV</p>
      <div className=" text-yellow-200 text-sm text-right pt-2">
        <a href="CV2023.pdf">CV</a>
      </div>
      <p className="text-xs mt-2 text-yellow-50 text-right">
        {" "}
        You can contact me at
      </p>
      <div className="text-orange-100  text-sm text-right pt-2">
        <a href="mailto:neil.stuart11@gmail.com">
          neil.stuart11@gmail.com - email
        </a>
      </div>
      <div className="text-orange-200  text-sm text-right pt-4">
        <a href="https://neilstu.art/">neilstu.art - website</a>
      </div>
      <div className="text-orange-300  text-sm text-right pt-4">
        <a href={"https://www.linkedin.com/in/neil-stuart-44705525b/"}>
          Neil Stuart - linkedin
        </a>
      </div>
      <div className="text-orange-400  text-sm text-right pt-4 ">
        <a href={"https://github.com/neil-stuart"}>neil-stuart - github</a>
      </div>
    </div>
  );
};

const Results = () => {
  useEffect(() => {
    fetch("/api/results")
      .then((res) => res.json())
      .then((data) => setResults(data));
  }, []);
  
  const [results, setResults] = useState([]);
  return (
    <div className="h-full w-full md:w-[53%] rounded-2xl border-b md:border-b-0 md:rounded-tr-none  px-5 py-3 pb-8 font-bold text-md border-t dark:border-yellow-100 dark:border-opacity-45 border-slate-950">
      Results
      <div className="flex flex-col gap-2 h-60 md:h-full overflow-scroll scrollbar-hide mt-2">
        <div className="flex flex-row gap-2 items-center">
          <div className="text-sm font-bold text-slate-900 dark:text-yellow-100">
            2nd Year
          </div>
        </div>
        {results
          .filter((result) => result.year === 2)
          .map((result) => (
            <div className="flex flex-row justify-between border-b border-slate-700 dark:border-yellow-100 dark:border-opacity-45  pb-3 mx-4 items-center">
              <div className="text-sm font-mono font-semibold text-slate-950 dark:text-yellow-100">
                {result.name}
              </div>
              <div className="text-sm font-semibold text-yellow-100 p-1 rounded-lg bg-emerald-500">
                {result.result}
              </div>
            </div>
          ))}
        <div className="flex flex-row gap-2 items-center">
          <div className="text-sm font-bold text-slate-900 dark:text-yellow-100">
            1st Year
          </div>
        </div>
        {results
          .filter((result) => result.year === 1)
          .map((result) => (
            <div className="flex flex-row justify-between border-b border-slate-700 dark:border-yellow-100 dark:border-opacity-45    pb-3 mx-4 items-center">
              <div className="text-sm font-mono font-semibold text-slate-950 dark:text-yellow-100">
                {result.name}
              </div>
              <div className="text-sm font-semibold text-yellow-100 p-1 rounded-lg bg-emerald-500">
                {result.result}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default function Index() {
  const [selectedNavItem, setSelectedNavItem] = useState("Projects");
  const [hoveredNavItem, setHoveredNavItem] = useState(selectedNavItem);

  const [darkMode, setDarkMode] = useState(false);
  const aboutMe =
    " I am a 3rd year Electrical & Electronic Engineering student at University of Galway, currently looking for a summer-internship or co-op placement in 2024/25."
  const aboutMe2 = "I have a strong interest in analogue & digital electronics and I have experience with LTSpice, KiCad, VHDL and Vivado. I am a hard-working, self-motivated and enthusiastic individual who is eager to learn and develop new skills";


  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/api/projects/titles")
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
      });
  }, []);
  return (
    <div class={darkMode ? "dark" : ""}>
      <div
        className={
          "bg-slate-950 dark:text-amber-100  select-none flex overflow-hidden max-w-screen w-screen min-h-screen justify-center "
        }
      >
        <div className="flex flex-col items-center md:max-w-[850px] md:p-10 md:overflow-hidden md:max-h-screen grow align-start ">
          <div
            className={
              "p-8 items-start w-full rounded-2xl flex grow flex-col dark:border border-opacity-30 border-yellow-100  md:max-h-[88vh] bg-amber-100  dark:bg-slate-900"
            }
          >
            <Header darkMode={darkMode} setDarkMode={setDarkMode} />

            <div className="flex  z-10 flex-col">
              <div className="flex font-bold px-2 h-fit py-2 content-start flex-row gap-16">
                <div
                  className="font-underline cursor-pointer"
                  onClick={() => setSelectedNavItem("Projects")}
                  onMouseEnter={() => setHoveredNavItem("Projects")}
                  onMouseLeave={() => setHoveredNavItem(null)}
                >
                  Projects
                </div>
                <div
                  className="font-underline cursor-pointer "
                  onClick={() => setSelectedNavItem("Skills")}
                  onMouseEnter={() => setHoveredNavItem("Skills")}
                  onMouseLeave={() => setHoveredNavItem(null)}
                >
                  Skills
                </div>
                <div
                  className="font-underline cursor-pointer"
                  onClick={() => setSelectedNavItem("About")}
                  onMouseEnter={() => setHoveredNavItem("About")}
                  onMouseLeave={() => setHoveredNavItem(null)}
                >
                  About
                </div>
              </div>
            </div>

            <UnderlineMoving
              hoveredNavItem={hoveredNavItem}
              selectedNavItem={selectedNavItem}
            />
            {selectedNavItem === "Projects" && (
              <div className="grid grid-flow-row items-start grid-cols-1 md:grid-cols-2 grow scrollbar-hide overflow-y-scroll mb-3 gap-5 w-full px-2 pt-3">

                {projects.map((project) => (
                  <Project darkMode={darkMode} route={project.route} key={project.id} title={project.title} />
                ))}
              </div>
            )}

            {selectedNavItem === "Skills" && <Skills darkMode={darkMode} />}

            {selectedNavItem === "About" && (
              <div className="grow font-semibold md:w-1/2 pb-16 md:pb-0 md:pl-8  pt-8 flex flex-row text-sm">
                {aboutMe}
                {/* <br/>
                <br/>
                {aboutMe2} */}
              </div>
            )}
            <div className="flex flex-col md:flex-row pt-4 gap-5 md:gap-0 w-full md:h-72">
              <Results />
              <Info />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
