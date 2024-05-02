"use client"
import "./page.css"
import "./../../index.css"
import "./../../output.css"
import React, { useEffect, useRef, useState } from "react";
import { NotionRenderer } from 'react-notion-x';
import { Within } from "@theme-toggles/react";
import "@theme-toggles/react/css/Within.css";

// core styles shared by all of react-notion-x (required)
import 'react-notion-x/src/styles.css'

// used for code syntax highlighting (optional)
import 'prismjs/themes/prism-tomorrow.css'

// used for rendering equations (optional)
import 'katex/dist/katex.min.css'
import dynamic from 'next/dynamic'

import "@theme-toggles/react/css/Simple.css";
import { Simple } from "@theme-toggles/react";
import { SiGooglehome } from "@icons-pack/react-simple-icons";

const Code = dynamic(() =>
  import('react-notion-x/build/third-party/code').then((m) => m.Code)
)
const Collection = dynamic(() =>
  import('react-notion-x/build/third-party/collection').then(
    (m) => m.Collection
  )
)
const Equation = dynamic(() =>
  import('react-notion-x/build/third-party/equation').then((m) => m.Equation)
)

const Modal = dynamic(
  () => import('react-notion-x/build/third-party/modal').then((m) => m.Modal),
  {
    ssr: false
  }
)



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
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen flex flex-col items-center dark:bg-stone-950">

        <div className="flex fixed bottom-0 m-6 z-30 max-w-[45rem] w-[95%]  flex-row  justify-left gap-5 items-center">
          <div className="dark:text-stone-50 cursor-pointer text-stone-900 bg-stone-200 flex items-center dark:bg-opacity-40 bg-opacity-40 backdrop-blur-sm justify-center border border-stone-700 px-3 py-3 rounded-xl dark:bg-stone-950">
            <SiGooglehome
              className="text-[1.6rem] "
              onClick={() => { window.location.href = "/" }}
            />
          </div>
          <div className="dark:text-stone-50 text-stone-900 bg-stone-200 flex items-center dark:bg-opacity-40 bg-opacity-40 backdrop-blur-sm justify-center border border-stone-700 px-3 py-3 rounded-xl dark:bg-stone-950">
            <Simple
              className="text-[1.6rem] "
              toggled={darkMode}
              toggle={setDarkMode}
            />
          </div>
        </div>
        {/* <div className="max-w-[45rem] pt-6 w-[95%] flex-row">
          <div className="flex flex-row w-fit gap-4">
            <div className="border p-2 border-stone-400 rounded-xl text-sm text-stone-50 bg-emerald-800">
                Socials
            </div>
          </div>
        </div> */}
        <div className="mt-10">
        {!recordMap ?
          <div className="text-xl h-[90vh] flex items-center font-semibold dark:text-amber-50">Please wait a moment...</div>
          :
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
            disableHeader={true} />}
            </div>
      </div>
    </div>
  );
}
