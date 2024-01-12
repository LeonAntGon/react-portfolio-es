import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import "./../animation/animation-fadeInLeft.css";
import yas from './../assets/yas.webp';
import tesla from './../assets/tesla.webp';
//*import "react-responsive-carousel/lib/styles/carousel.min.css";

const img = [yas, tesla ]
const titles = ["Yas Lencería", "Tesla"]
const description = [
  "Landing Page para negocio de venta de lencería y ropa interior femenina", 
  "Proyecto a modo de copia de la pagina web de Tesla."]
const technologies = ["HTML - CSS - JavaScript", "Astro - TailwindCss"]
const links = ["https://leonantgon.github.io/Yasmin/index.html","https://leonantgon.github.io/Tesla/"]

const Projects = () => {
  const { isDarkTheme } = useContext(ThemeContext);

  // Clases de estilo para el fondo y el texto
  const backgroundClass = isDarkTheme ? "bg-black" : "bg-white";
  const textClass = isDarkTheme ? "text-white" : "text-black";
  const backgroundProjects = isDarkTheme ? "bg-gray-700" : "bg-gray-50";

  // Clases de estilo para el borde inferior
  const borderBottomClass = isDarkTheme ? "border-b border-white" : "border-b border-black";


  return (
    <div
      id="projects" className={`h-auto ${backgroundClass} py-12 px-4 sm:px-6 lg:px-8`}
    >
      <div className={`max-w-screen-xl flex flex-col ${backgroundClass} animate-fadeInLeft`}>
        <div className="flex flex-col items-center justify-center w-full h-full">
          <h2 className={`${textClass} text-center font-semibold text-4xl mt-5 mb-20 ${borderBottomClass} pb-3`}>
            Proyectos
          </h2>
        </div>

        <section className="flex flex-wrap justify-around mb-10">
        {img.map((img, index) => (
            <div className={`inline-block min-w-13 min-h-13 max-w-[290px] max-h-[540px]
            ${backgroundProjects} rounded-lg my-5`} key={index}>
              <div className="w-[275px] h-[368px] mx-2 mt-3">
                 <img className="w-full h-full rounded-lg" src={img} alt="" />
              </div>
              <div className="mx-2">
                <h2 className={`text-center font-semibold ${textClass}`}>{titles[index]}</h2>
                <p className={`${textClass}`}>{description[index]}</p>
                <p className={` py-2 text-center font-semibold ${textClass}`}>{technologies[index]}</p>
                <p className="text-center "><a className="text-blue-500 underline" href={`${links[index]}`}>Ver projecto</a></p>
              </div>
            </div>
                ))}
        </section>
      </div>
    </div>
  );
};

export default Projects;
