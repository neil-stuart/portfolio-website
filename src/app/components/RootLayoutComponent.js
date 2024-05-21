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

import "@theme-toggles/react/css/Simple.css";
import { Simple } from "@theme-toggles/react";

import { SiGooglehome } from "@icons-pack/react-simple-icons";
import portrait from "../../pics/portrait.JPG";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Header = ({ darkMode, setDarkMode }) => {
  return (
    <motion.div
      key="toggle"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="flex fixed m-6 z-30 max-w-[45rem] w-[95%]  flex-row  justify-between items-center"
    >
      <div />
      <div className="flex items-center justify-center px-3 py-3 border dark:text-stone-50 text-stone-900 bg-stone-200 dark:bg-opacity-20 bg-opacity-20 backdrop-blur-sm border-stone-700 rounded-xl dark:bg-stone-950">
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
      <div className="border rounded-2xl w-fit h-fit dark:border-stone-700 border-stone-800">
        <Image
          src={portrait}
          width={140}
          height={140}
          className="rounded-2xl"
          alt="Picture of the author"
        />
      </div>
      <div className="flex flex-col gap-1">
        <div className="text-2xl">Neil Stuart</div>
        <div className="mb-2 text-lg font-semibold">21.</div>
        <div className="text-sm">Currently working at:</div>
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
    <>
      <AnimatePresence mode="wait">
        {pathname === "/" && (
          <motion.div
            key="toolbar"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10}}
            transition={{ duration: 0.2 }}
            className="fixed bottom-0 z-20 flex flex-row items-center gap-3 mb-4 text-yellow-200 justify-items-center"
          >
            <div className="flex flex-row items-center gap-4 p-6 mb-3 text-xl font-semibold border bg-opacity-70 h-fit max-w-fit w-fit rounded-xl backdrop-blur-sm border-stone-700 text-amber-50 bg-stone-200 dark:bg-stone-950 dark:bg-opacity-20">
             <Link href="CV2023.pdf">
             <motion.div
                key="CV"
                whileHover={{ rotate: -10, scale: 1.05 }}
                className="border border-orange-600 dark:border-yellow-200  duration-[0.3s] hover:bg-orange-200 dark:hover:bg-yellow-900  text-orange-600 dark:text-yellow-200 hover:cursor-pointer p-3 w-12 h-13 text-base rounded-lg"
              >
                CV
              </motion.div>
              </Link>
              <Link href="mailto:neil.stuart11@gmail.com">
              <motion.div
                key="Email"
                whileHover={{ rotate: 10, scale: 1.05 }}
               
                className="border duration-[0.3s] hover:bg-purple-300 dark:hover:bg-purple-900 hover:cursor-pointer dark:border-purple-400 border-purple-600 p-3 w-12 h-13 text-base text-purple-600 dark:text-purple-400 rounded-lg"
              >
                <SiGmail title="Email" />
              </motion.div>
              </Link>
              <Link href="linkedin">
              <motion.div
                key="Linkedin"
                whileHover={{ rotate: 10, scale: 1.05 }}

                className="border duration-[0.3s] hover:bg-cyan-100 dark:hover:bg-cyan-900  hover:cursor-pointer dark:text-cyan-300 text-cyan-600 border-cyan-600 dark:border-cyan-300  p-3 w-12 h-13 text-base rounded-lg"
              >
                <SiLinkedin />
              </motion.div>
              </Link>

              <Link href="github">
              <motion.div
                key="Github"
                whileHover={{ rotate: -10, scale: 1.05 }}

                className="border duration-[0.3s] hover:bg-emerald-300 dark:hover:bg-emerald-900 hover:cursor-pointer  text-emerald-600 dark:text-emerald-400 border-emerald-600 dark:border-emerald-400 p-3 w-12 h-13 text-base rounded-lg"
              >
                <SiGithub />
              </motion.div>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        {pathname !== "/" && (
          <motion.div
            key="toolbar1"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-0 z-20 flex flex-row items-center gap-3 mb-4 text-yellow-200 justify-items-center"
          >
            <div className="flex flex-row items-center gap-4 p-6 mb-3 border h-fit max-w-fit w-fit rounded-xl bg-opacity-20 backdrop-blur-sm border-stone-700 text-amber-50 bg-stone-50 dark:bg-stone-950 dark:bg-opacity-20">
              <motion.div
                key="Home"
                whileHover={{ rotate: 10, scale: 1.05 }}
                className="dark:text-blue-200 cursor-pointer text-blue-900 bg-blue-200  duration-[0.1s] dark:hover:bg-blue-700 dark:hover:bg-opacity-20 hover:bg-blue-600 hover:bg-opacity-20 flex items-center dark:bg-opacity-40 bg-opacity-40 backdrop-blur-sm justify-center border border-blue-600 dark:border-stone-500 px-3 py-3 rounded-xl dark:bg-blue-800"
              >
                <Link href="/">
                  <SiGooglehome
                    title="Home"
                    className="text-[1.6rem] "
                  />
                </Link>
              </motion.div>
              <motion.div key="ThemeToggle" whileHover={{ scale: 1.05 }}>
                <div className="dark:text-stone-50 text-stone-900 bg-stone-200 duration-[0.3s] flex items-center dark:bg-opacity-40 bg-opacity-40 backdrop-blur-sm justify-center border border-stone-700 px-3 py-3 rounded-xl dark:bg-stone-800">
                  <Simple
                    className="text-[1.6rem] "
                    toggled={darkMode}
                    toggle={setDarkMode}
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default function RootLayoutComponent({ children }) {
  const x = useMotionValue(0);
  const opacity = useTransform(x, [-100, 0, 100], [0.5, 1, 0.5]);
  const pathname = usePathname();
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark flex w-screen" : "flex w-screen"}>
      <div className={"flex max-w-screen w-screen min-h-screen select-none"}>
        <div className="flex flex-col grow bg-stone-200 dark:bg-stone-900">
          <div
            className={
              "flex grow items-center text-slate-950 dark:text-slate-50  flex-col "
            }
          >
            <AnimatePresence mode="wait">
              {pathname === "/" && (
                <Header darkMode={darkMode} setDarkMode={setDarkMode} />
              )}
            </AnimatePresence>
            <FaceBanner />

            {children}

            <Info darkMode={darkMode} setDarkMode={setDarkMode} />
            <div className="min-h-[6rem]" />
            <div className="flex justify-center h-fit ">
              <motion.div
                animate={{}}
                drag="x"
                style={{ x, opacity }}
                dragConstraints={{ left: -10, right: 10 }}
                className="flex justify-center text-base text-stone-800 dark:bg-stone-900 dark:text-stone-500"
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
