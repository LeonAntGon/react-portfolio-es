import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import "./../animation/animation-fadeInLeft.css";


const Contact = () => {
    const { isDarkTheme } = useContext(ThemeContext);

    const backgroundClass = isDarkTheme ? "bg-black" : "bg-white";
    const textClass = isDarkTheme ? "text-white" : "text-black";
    const borderBottomClass = isDarkTheme ? "border-b border-white" : "border-b border-black";
    const submitButtonClass = isDarkTheme ? "bg-green-500 text-black" : "bg-blue-500 text-white";
    const submitButtonHoverClass = isDarkTheme ? "hover:bg-green-400" : "hover:bg-blue-400";
    const inputClass = isDarkTheme ? "bg-gray-800 text-white" : "bg-gray-100 text-black";

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        enquiryType: "",
        message: "",
    });

    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });

        // Validar el campo a medida que el usuario escribe
        validateField(name, value);
    };

    const validateField = (fieldName, value) => {
        const newErrors = { ...errors };

        switch (fieldName) {
            case "name":
                if (!value.trim()) {
                    newErrors.name = "Introduce tu nombre completo.";
                } else {
                    delete newErrors.name;
                }
                break;
            case "email":
                if (!value.trim()) {
                    newErrors.email = "Introduce un email.";
                } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                    newErrors.email = "Dirección email no valida.";
                } else {
                    delete newErrors.email;
                }
                break;
            case "enquiryType":
                if (!value.trim()) {
                    newErrors.enquiryType = "Especifica el asunto de tu mensaje.";
                } else {
                    delete newErrors.enquiryType;
                }
                break;
            case "message":
                if (!value.trim()) {
                    newErrors.message = "Introduce un mensaje.";
                } else {
                    delete newErrors.message;
                }
                break;
            default:
                break;
        }

        setErrors(newErrors);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            alert("Se subió el mensaje correctamente!");
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = "Introduce tu nombre completo";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Introduce un email";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Dirección email no valida.";
        } else {
            delete newErrors.email; // Eliminar el error si el correo electrónico es válido
        }

        if (!formData.enquiryType.trim()) {
            newErrors.enquiryType = "Especifica el asunto de tu mensaje.";
        }

        if (!formData.message.trim()) {
            newErrors.message = "Introduce un mensaje.";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    return (
        <div id="contact" className={`min-h-screen ${backgroundClass}  py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center`}>
            <div className={`w-full ${backgroundClass} animate-fadeInLeft`}>
                <div className="flex flex-col items-center justify-center w-full h-full">
                    <h2 className={`${textClass} font-semibold text-5xl mt-10 mb-8 ${borderBottomClass} pb-3`}>
                        Contactame
                    </h2>
                    <div className="w-full max-w-screen-md">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="mb-4">
                                <label
                                    htmlFor="name"
                                    className={`block text-sm font-medium ${textClass} mb-2`}
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className={`border rounded-md px-3 py-2 w-full ${inputClass} ${errors.name ? "border-red-500" : ""
                                        }`}
                                />
                                {errors.name && (
                                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                                )}
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="email"
                                    className={`block text-sm font-medium ${textClass} mb-2`}
                                >
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className={`border rounded-md px-3 py-2 w-full ${inputClass} ${errors.email ? "border-red-500" : ""
                                        }`}
                                />
                                {errors.email && (
                                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                                )}
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="enquiryType"
                                    className={`block text-sm font-medium ${textClass} mb-2`}
                                >
                                    Type of Enquiry
                                </label>
                                <select
                                    id="enquiryType"
                                    name="enquiryType"
                                    value={formData.enquiryType}
                                    onChange={handleInputChange}
                                    className={`border rounded-md px-3 py-2 w-full ${inputClass} ${errors.enquiryType ? "border-red-500" : ""
                                        }`}
                                >
                                    <option value="">Selecciona una opcion</option>
                                    <option value="Support">Soporte</option>
                                    <option value="Sales">Trabajo</option>
                                </select>
                                {errors.enquiryType && (
                                    <p className="text-red-500 text-sm mt-1">{errors.enquiryType}</p>
                                )}
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="message"
                                    className={`block text-sm font-medium ${textClass} mb-2`}
                                >
                                    Mensaje
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    rows="4"
                                    className={`border rounded-md px-3 py-2 w-full ${inputClass} ${errors.message ? "border-red-500" : ""
                                        }`}
                                />
                                {errors.message && (
                                    <p className="text-red-500 text-sm">{errors.message}</p>
                                )}
                            </div>
                            <div className="mb-4">
                                <button
                                    type="submit"
                                    className={`py-2 px-4 rounded-md ${submitButtonClass} w-28 ${submitButtonHoverClass}`}
                                >
                                    Enviar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
