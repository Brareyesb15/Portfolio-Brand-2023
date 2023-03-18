import React from "react"
import Image from "next/image"

const skills = [
    { skill: "/javaScript.png", name: "JavaScript"},
    { skill: "/Postgresql.png" ,name : "PostgreSQL" },
    { skill: "/Node.png", name : "NodeJS" },
    { skill: "/react.png", name : "React" },
    { skill: "/redux.png", name: "Redux" },
    { skill: "/sequelize.png", name: "Sequelize" },
    { skill: "/next.png", name: "Next.js" },
    { skill: "/express-logo.png",name : "Express" },
    { skill: "/github.png", name: "GitHub" },
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          Sobre Mí
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
  <div className="md:w-1/2 ">
    <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
      Conoceme!
            </h1>
            <p>
              Hola, mi nombre es Brandon Reyes y soy desarrollador web
              full stack Colombiano.
              Entre mis caracteristicas se encuentran un muy{" "}
              <span className="font-bold">{"buen análisis y resolución de problemas"}</span>,
              <span className="font-bold">{" aprendizaje ágil"}</span>, y
              <span className="font-bold">{" sociabilidad"}</span>,
              además de una fuerte afinidad y un gusto increíble por el backend y database.
            </p>
            <br />
            <p>
             Graduado del bootcamp de SoyHenry en el año 2022, donde me destaqué como uno de los 4 mejores estudiantes de la cohorte 33B.
             Además soy Abogado de la universidad de Cartagena-Colombia, en el año 2019.
            </p>
            <br />
            <p>
              Decidí dar un roll desde mi carrera como Abogado porque soy un amante de la tecnología y me sedujo el ambiente creativo y de resolución de problemas que permite la programación, aprovechando en mi nueva pasión toda la experiencia que obtuve en un mundo academico y laboral distinto. 
            </p>
            <br />
            <p>
              Creo firmemente en las nuevas oportunidades y en hacer lo que{" "}
              <span className="font-bold text-teal-500">
                en realidad te apasiona
              </span>{" "}
              y eso es lo que intento hacer cada día de mi vida.
              Poder encontrar solución a los problemas que antes solo imaginaba me hace querer levantarme cada mañana.  
            </p>
            </div>
  <div className="text-center md:w-1/2 md:text-left">
    <h1 className="text-2xl font-bold mb-6">My Skills</h1>
    <div className="grid grid-cols-3 gap-4">
      {skills.map((item, idx) => {
        return (
          <div className="text-center" key={idx}>
            <Image
              src={item.skill}
              alt=""
              width={125}
              height={125}
              className="block mx-auto my-4"
              style={{ height: "125px", width: "125px" }}
            />
            <p className="text-2xl">{item.name}</p>
          </div>
        )
      })}
    </div>
  </div>
</div>
</div>
    </section>
  )
}

export default AboutSection
