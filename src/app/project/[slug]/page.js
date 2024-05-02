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
import { useData } from "../../components/DataContext";
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
  const { projectsData, setProjectsData } = useData();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Check if data is already present at params.slug
        if (projectsData && params.slug in projectsData) {
          return;
        }
  
        const response = await fetch(`/api/project/slug/${params.slug}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setProjectsData({ ...projectsData, [params.slug]: data.recordMap });
      } catch (error) {
        console.error("Error fetching project: ", error);
      }
    };
  
    fetchData();
  }, [params.slug, projectsData]);
  

  return (

      <div className="w-screen min-h-screen flex flex-col items-center text-stone-900  dark:text-amber-50 dark:bg-stone-900 bg-stone-50">
       
        <div className="mt-10 px-3">
          <AnimatePresence mode="wait">
            {!projectsData || !(params.slug in projectsData) ? (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-xl h-[90vh] flex items-center font-semibold"
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
                  recordMap={projectsData[params.slug]}
                  components={{
                    Code,
                    Collection,
                    Equation,
                    Modal
                  }}
                  fullPage={true}
                  className="text-stone-900  dark:text-amber-50"
                  disableHeader={true}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
  );
}
