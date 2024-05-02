"use client";
import { useState } from "react";
// Workaround to allow client directives in layout component.
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { SiGithub, SiLinkedin, SiGmail } from "@icons-pack/react-simple-icons";
import { Router } from "next/router";

import "@theme-toggles/react/css/Simple.css";
import { Simple } from "@theme-toggles/react";

import { SiGooglehome } from "@icons-pack/react-simple-icons";
import portrait from "../pics/portrait.JPG";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Header = ({ darkMode, setDarkMode }) => {
  return (
    <motion.div
    key="toggle"
    initial={{ opacity: 0, y:10 }}
    animate={{ opacity: 1 , y:0}}
    exit={{ opacity: 0, y:10 }}
    transition={{ duration: 0.3 }}
    className="flex fixed m-6 z-30 max-w-[45rem] w-[95%]  flex-row  justify-between items-center">
      <div />
      <div className="dark:text-stone-50 text-stone-900 bg-stone-200 flex items-center dark:bg-opacity-20 bg-opacity-20 backdrop-blur-sm justify-center border border-stone-700 px-3 py-3 rounded-xl dark:bg-stone-950">
        <Simple
          className="text-[1.6rem] "
          toggled={darkMode}
          toggle={setDarkMode}
        />
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
          <b>Start100</b> <i>University of Galway</i>
          <br />
          <b>CMOS Amplifier Design for Sensor Interfaces</b>{" "}
          <i>Tyndall Institute</i>
        </div>
      </div>
    </div>
  );
};

const Info = ({ darkMode, setDarkMode }) => {
  const pathname = usePathname();
  return (
    <div className="flex fixed bottom-0 flex-col z-20 items-center mb-4">
        <AnimatePresence mode="wait">
      <motion.div
      key="toolbar"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.2 }}
        className="flex flex-row gap-3 text-yellow-200 items-center justify-items-center"
      >
        <div className="h-fit max-w-fit w-fit flex flex-row items-center gap-4 mb-3  p-6 rounded-xl bg-opacity-20 backdrop-blur-sm border border-stone-700 font-semibold text-xl text-amber-50  bg-stone-50 dark:bg-stone-950 dark:bg-opacity-20">

            {pathname === "/" ? (
              <>
                <motion.div
                    key="CV"
                  whileHover={{ rotate: -10, scale: 1.05 }}
                  onClick={() => (window.location.href = "CV2023.pdf")}
                  className="border border-yellow-600 dark:border-yellow-200 duration-[0.3s] dark:hover:bg-yellow-900 hover:bg-yellow-200 dark:text-yellow-200 text-yellow-600 hover:cursor-pointer p-3 w-12 h-13 text-base rounded-lg"
                >
                  CV
                </motion.div>

                <motion.div
                key="Email"
                  whileHover={{ rotate: 10, scale: 1.05 }}
                  onClick={() =>
                    (window.location.href = "mailto:neil.stuart11@gmail.com")
                  }
                  className="border duration-[0.3s] hover:bg-purple-900 hover:cursor-pointer dark:border-purple-400 border-purple-900 p-3 w-12 h-13 text-base text-purple-400 rounded-lg"
                >
                  <SiGmail title="Email" />
                </motion.div>

                <motion.div
                key="Website"
                  whileHover={{ rotate: -10, scale: 1.05 }}
                  onClick={() =>
                    (window.location.href = "https://neilstu.art/")
                  }
                  className="border duration-[0.3s] hover:bg-blue-900 hover:cursor-pointer p-3  w-12 h-13 text-base  border-blue-400 rounded-lg"
                >
                  <div title="Website" className="w-6 h-6 rounded-full bg-blue-400" />
                </motion.div>

                <motion.div
                key="Linkedin"
                  whileHover={{ rotate: 10, scale: 1.05 }}
                  onClick={() =>
                    (window.location.href =
                      "https://www.linkedin.com/in/neil-stuart-44705525b/")
                  }
                  className="border duration-[0.3s] dark:hover:bg-cyan-900 hover:bg-cyan-200  hover:cursor-pointer dark:text-cyan-300 text-cyan-500 dark:border-cyan-300 border-cyan-500 p-3 w-12 h-13 text-base rounded-lg"
                >
                  <SiLinkedin />
                </motion.div>

                <motion.div
                key="Github"
                  whileHover={{ rotate: -10, scale: 1.05 }}
                  onClick={() =>
                    (window.location.href = "https://github.com/neil-stuart")
                  }
                  className="border duration-[0.3s] hover:bg-emerald-900 hover:cursor-pointer  text-emerald-400 border-emerald-400 p-3 w-12 h-13 text-base rounded-lg"
                >
                  <SiGithub />
                </motion.div>
              </>
            ) :(
              <>
                {" "}
                <motion.div
                key="Home"
                  whileHover={{ rotate: 10, scale: 1.05 }}
                  className="dark:text-blue-200 cursor-pointer text-blue-900 bg-blue-200  duration-[0.1s] dark:hover:bg-blue-700 dark:hover:bg-opacity-20 hover:bg-blue-600 hover:bg-opacity-20 flex items-center dark:bg-opacity-40 bg-opacity-40 backdrop-blur-sm justify-center border border-blue-600 dark:border-stone-500 px-3 py-3 rounded-xl dark:bg-blue-800">
                <Link href="/" >

                  <SiGooglehome
                  title="Home"
                    className="text-[1.6rem] "
                    onClick={() => {
                      window.location.href = "/";
                    }}
                  />

                </Link>
                </motion.div>
                <motion.div
                key="ThemeToggle"
                  whileHover={{ scale: 1.05 }}>
                <div className="dark:text-stone-50 text-stone-900 bg-stone-200 duration-[0.3s] flex items-center dark:bg-opacity-40 bg-opacity-40 backdrop-blur-sm justify-center border border-stone-700 px-3 py-3 rounded-xl dark:bg-stone-800">
                  

                  <Simple
                    className="text-[1.6rem] "
                    toggled={darkMode}
                    toggle={setDarkMode}
                  />

                </div>
                </motion.div>
              </>
            )}

        </div>
      </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default function RootLayoutComponent({ children }) {
  const x = useMotionValue(0);
  const opacity = useTransform(x, [-100, 0, 100], [0.5, 1, 0.5]);
  const pathname = usePathname();
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark flex w-screen" : "flex w-screen"}>
      <div className={"flex max-w-screen w-screen min-h-screen select-none"}>
        <div className="flex flex-col grow bg-stone-100 dark:bg-stone-900">
          <div
            className={
              "flex grow items-center text-slate-950 dark:text-slate-50  flex-col "
            }
          >
            <AnimatePresence mode="wait">
              {pathname === "/" ? (
                <Header darkMode={darkMode} setDarkMode={setDarkMode} />
              ) : (
                <></>
              )}
            </AnimatePresence>
            <FaceBanner />

            {children}

            <Info darkMode={darkMode} setDarkMode={setDarkMode} />
            <div className="h-fit dark:bg-stone-900 bg-stone-50 flex justify-center ">
              <motion.div
                animate={{}}
                drag="x"
                style={{ x, opacity }}
                dragConstraints={{ left: -10, right: 10 }}
                className="text-base text-stone-800 dark:bg-stone-900 justify-center flex dark:text-stone-500"
              >
                © Neil Stuart 2024
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
