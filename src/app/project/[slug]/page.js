"use client"
// Import necessary modules and components
import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { NotionRenderer } from 'react-notion-x';
import "@theme-toggles/react/css/Within.css";
import 'react-notion-x/src/styles.css'
import 'prismjs/themes/prism-tomorrow.css'
import 'katex/dist/katex.min.css'
import dynamic from 'next/dynamic'
import "@theme-toggles/react/css/Simple.css";
import "./page.css"
import "./../../index.css"
import "./../../output.css"
import { Simple } from "@theme-toggles/react";
import { SiGooglehome } from "@icons-pack/react-simple-icons";

// Dynamically import components
const Code = dynamic(() =>
  import('react-notion-x/build/third-party/code').then((m) => m.Code)
)
const Collection = dynamic(() =>
  import('react-notion-x/build/third-party/collection').then((m) => m.Collection)
)
const Equation = dynamic(() =>
  import('react-notion-x/build/third-party/equation').then((m) => m.Equation)
)
const Modal = dynamic(
  () => import('react-notion-x/build/third-party/modal').then((m) => m.Modal),
  { ssr: false }
)

// Define the Project component
export default function Project({ params }) {
  const [recordMap, setRecordMap] = useState();
  const projectID = useRef("");
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    fetch(`/api/project/slug/${params.slug}`).then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    }).then((data) => {
      setRecordMap(data.recordMap);
    }).catch((error) => {
      console.error("Error fetching project: ", error);
    })
  }, [params.slug]);

  return (
    <div className={darkMode ? "dark w-screen" : "w-screen"}>
      <div className="min-h-screen flex flex-col items-center dark:bg-stone-900 bg-stone-50">
        <div className="flex fixed bottom-0 flex-col z-20 items-center mb-4">
          <div className="h-fit max-w-fit w-fit flex flex-col items-center gap-4 mb-3  p-6 rounded-xl bg-opacity-20 backdrop-blur-sm border border-stone-700 font-semibold text-xl text-amber-50  bg-stone-50 dark:bg-stone-950 dark:bg-opacity-20">
            <div className="flex flex-row gap-3 text-yellow-200 items-center justify-items-center">
              <div className="dark:text-blue-200 cursor-pointer text-blue-900 bg-blue-200 flex items-center dark:bg-opacity-40 bg-opacity-40 backdrop-blur-sm justify-center border border-blue-600 dark:border-stone-500 px-3 py-3 rounded-xl dark:bg-blue-800">
                <SiGooglehome
                  className="text-[1.6rem] "
                  onClick={() => { window.location.href = "/" }}
                />
              </div>
              <div className="dark:text-stone-50 text-stone-900 bg-stone-200 flex items-center dark:bg-opacity-40 bg-opacity-40 backdrop-blur-sm justify-center border border-stone-700 px-3 py-3 rounded-xl dark:bg-stone-800">
                <Simple
                  className="text-[1.6rem] "
                  toggled={darkMode}
                  toggle={setDarkMode}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 px-3  flex items-center">
          <AnimatePresence>
            {!recordMap ? (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="text-xl h-[90vh] font-semibold dark:text-amber-50"
              >
                Please wait a moment...
              </motion.div>
            ) : (
              <motion.div
                key="loaded"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <NotionRenderer
                  recordMap={recordMap}
                  components={{
                    Code,
                    Collection,
                    Equation,
                    Modal
                  }}
                  fullPage={true}
                  darkMode={darkMode}
                  disableHeader={true}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
