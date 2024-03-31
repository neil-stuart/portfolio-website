"use client"
import "./page.css"
import "./../../index.css"
import "./../../output.css"
import React, { use, useEffect, useRef, useState } from "react";
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
      <div className="min-h-screen font-mono flex flex-col items-center dark:bg-slate-950">
        <div className="flex flex-row pt-20  max-w-[720px] w-full pb-16 px-4 items-left gap-8 justify-between">
          <Within
            className=" text-slate-950 dark:text-amber-50 text-[2.5rem] "
            toggled={darkMode}
            toggle={setDarkMode}
          />

          <h1 className="text-lg xs:text-xl font-semibold flex flex-row items-center gap-8 dark:text-amber-50">

            <div onClick={() => { window.location.href = "/" }} className="bg-slate-950 dark:bg-amber-50 cursor-pointer  rounded-full w-8 h-8" />


          </h1>



        </div>

        {recordMap === null ?
          <div className="text-xl font-semibold dark:text-amber-50">Loading</div>
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
  );
}
