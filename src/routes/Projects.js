import { useState, useEffect } from "react"



export default function Projects() {
    const [projects, setProjects] = useState([])
    useEffect(() => {
        fetch("/api/projects/titles")
            .then((response) => response.json())
            .then((data) => {
                setProjects(data)
            })
            .catch((error) => {
                console.error("Error fetching projects:", error)
            })
    }, [])

    return (

        <div className="min-h-screen min-w-screen font-mono flex flex-col  items-center bg-slate-950">

            <div className="flex flex-col max-w-[800px] w-full px-6 pt-40 items-center">

                <div className="flex flex-col  w-full pb-16 items-left gap-8 justify-between">
                    <h1 className="text-lg xs:text-xl font-semibold flex flex-row items-center gap-8 text-amber-200">

                        <div onClick={() => { window.location.href = "/" }} className="bg-amber-400 cursor-pointer rounded-full w-3 h-3" />

                        Home

                    </h1>
                    <h1 className="text-lg xs:text-xl font-semibold flex flex-row items-center gap-8 text-amber-200">

                        <div className="bg-blue-500 animate-pulse rounded-full w-3 h-3" />

                        Projects

                    </h1>

                </div>

                <div className="flex flex-col w-full gap-8 pl-5">

                    {projects.map((project) => {

                        return (

                            <div className="flex flex-col w-full gap-4">

                                <div className="flex flex-row w-full items-center justify-between">

                                    <h1 className="text-base xs:text-xl font-semibold flex flex-row items-center gap-8 text-amber-100">

                                        <div onClick={() => { window.location.href = `/project/${project.route}` }} className="bg-orange-300 cursor-pointer rounded-full w-3 h-3" />

                                        {project.title}

                                    </h1>

                                    <h2 className="text-sm xs:text-base  text-orange-300">{project.date}</h2>

                                </div>

                                <p className="text-sm xs:text-base text-slate-300">{project.description}</p>

                            </div>


                        )
                    })}

                </div>

            </div>

        </div>

    )
}

