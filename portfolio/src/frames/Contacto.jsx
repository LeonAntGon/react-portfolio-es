import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import "./../animation/animation-fadeInLeft.css";
import phone from './../assets/phone.png';
import mail from './../assets/mail.png';




export default function Contacto() {
    const { isDarkTheme } = useContext(ThemeContext);

    const backgroundClass = isDarkTheme ? "bg-black" : "bg-white";
    const textClass = isDarkTheme ? "text-white" : "text-black";
    const backgroundCard = isDarkTheme ? "bg-gray-700" : "bg-gray-50";

    return(
        <main>

            <section id="contact" className={` h-screen flex flex-wrap justify-around
            animate-fadeInLeft [&>div>h2]:text-xl [&>div>h2]:text-center [&>div>h2]:my-3
            [&>div>p]:my-4 [&>div>p>a]:text-blue-500 ${backgroundClass}
            [&>div>p]:text-sm `}>
                <div className={`mt-[70px] ${backgroundCard} h-[200px] w-[300px] align-center p-4 rounded-lg`} >
                    <div className="grid place-items-center">
                       <div className="bg-gray-50 w-[50px] h-[50px] grid place-items-center rounded-md">
                        <img className="w-[30px]" src={mail} />
                    </div>
                </div>
                
                <h2 className={`${textClass}`}>Email</h2>
                <p className={`${textClass}`}>Te comparto mi dirección de correo electrónico para que puedas contactarme: </p>
                <p className={`text-center ${textClass}`} ><a href="mailto:leonarddevweb@gmail.com">leonarddevweb@gmail.com</a></p>
            </div>
            
            
                <div className={`mt-[70px] ${backgroundCard} h-[200px] w-[300px] align-center p-4 rounded-lg`} >
                    <div className="grid place-items-center">
                       <div className="bg-gray-50 w-[50px] h-[50px] grid place-items-center rounded-md">
                        <img className="w-[30px]" src={phone} />
                    </div>
                </div>
                
                <h2 className={`${textClass}`}>Llamame</h2>
                <p className={`${textClass}`}>Comparto mi número de teléfono para que puedas llamarme y así establecer contacto:</p>
                <p className={`text-center ${textClass}`} ><a href="tel:+5493380751">+54 9 3380751</a></p>
            </div>
            </section>
        </main>

        
    )
}