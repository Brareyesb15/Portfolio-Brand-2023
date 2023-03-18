import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "Capacitech Kids",
    description:
      "Capacitech Kids es un e-learning enfocado en niños. En este proyecto me encargué de la creación de la base de datos en postgreSQL,  el establecimiento del Backend a través de sequelize y Express y de funcionalidades en el frontend a través de react y redux. ",
    image: "/CapacitechKids.png",
    github: "https://github.com/MemoRodz/CapaciTechKidsBack",
    link: "https://capacitechkids-production-fe31.up.railway.app/",
  },
  {
    name: "Portfolio Brand",
    description: "Portfolio Brand es este proyecto, mi portfolio. Creado utilizando Next.js y un poco de Tailwind.",
    image: "/PortfolioBrand.png",
    github: "",
    link: "",
  },
  {
    name: "Rick And Morty App",
    description:
      "Rick and Morty app es un proyecto que desarrollé en el bootcamp de soy Henry. En el se nota mucho mi vocación hacia el back y es el lugar donde me enamoré de este area. Se trata de una base de datos con todos los personajes de Rick y Morty y sus locaciones y las relaciones de unos con otros. También te permite registrate para guardar tus personajes favoritos de la serie, organizarlos según sus caracteristicas etc.",
    image: "/RickandMorty.png",
    github: "https://github.com/Brareyesb15/Rick-and-Morty-app",
    link: "https://vercel.com/brareyesb15/rym-front",
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Proyectos
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProjectsSection
