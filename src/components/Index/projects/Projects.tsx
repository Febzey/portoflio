import { useState } from 'react';
import eusurvival from '../../../images/eusurvival.png';
import boiler from '../../../images/boiler.png';
import sqltool from '../../../images/sqltool.png'
import gotime from "../../../images/gotimeread.png"

const Projects = () => {
    const [projects] = useState([
        {
            img: gotime,
            title: "gotime",
            description: "A minimal parser, formalizer and manipulator for time durations and dates in nodejs.",
            github: "https://github.com/Febzey/gotime"
        },
        {
            img: boiler,
            title: "React Boilerplate",
            description: "An easy to use, beginner friendly react/fastify backend boilerplate.",
            github: "https://github.com/febzey/rf-boiler"
        },{
            img: sqltool,
            title: "MySQL Parser",
            description: "A web based SQL tool to perform database queries via user interface and restful API.",
            github: "https://github.com/febzey/mysql-parser"

        },
        {
            img: eusurvival,
            title: "www.eusurvival.com",
            description: "A React web app made for a European based Minecraft server called eusurvival.com",
            github: "https://github.com/febzey/eusurvival.com"
        },
    ])
    return (
        <div className="px-6 w-full min-h-screen gap-12 pb-28 bg-neutral-50 flex flex-col items-center justify-center font-poppins" id="projects">
            <div className="text-center flex flex-col gap-2">
                <p className="text-zinc-700 font-poppins text-xl lg:text-2xl px-3">Some projects I have worked on in the past.</p>
            </div>

            <div className="grid grid-cols-1 w-full lg:w-[84%] gap-8 lg:grid-cols-3">
                {
                    projects.map(i => (
                        <div className="flex flex-col gap-3 font-poppins text-center shadow-2xl rounded-2xl px-4 py-6">
                            <img src={i.img} className="rounded-lg max-h-60"></img>
                            <div className="flex flex-col text-zinc-600">
                                <h1 className="text-xl font-semibold pb-2">{i.title}</h1>
                                <p className="px-8 text-sm">{i.description}</p>
                                {i.github && <p className="text-sm text-zinc-500 mt-5">Repository: <br></br><a href={i.github} className="text-sky-400">{i.github}</a></p>
                                }
                            </div>
                        </div>
                    ))
                }

            </div>

        </div>
    )
}

export default Projects;