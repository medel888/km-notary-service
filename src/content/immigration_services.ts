interface ImmigrationService {
    name: string;
    ask: string;
    imgUrl: string;
}


export const immigrationServiceList: ImmigrationService[] = [
    {
        name: "Parole Humanitario",
        ask: "¿Puedo convertirme en un patrocinador de un familiar o un amigo?",
        imgUrl: "/images/inmigracion/paroleHumanitario.png",
    },
    {
        name: "Solicitud de asilo y de suspensión de deportación",
        ask: "¿Qué debo tener en cuenta para saber si mi asilo es afirmativo o Defensivo?",
        imgUrl: "/images/inmigracion/peticionesDeAsilo.png",
    },
    {
        name: "Peticion de un familiar extranjero",
        ask: "¿Cuáles son los requisitos para convertirme en un peticionario de un familiar que vive fuera de los Estados Unidos?",
        imgUrl: "/images/inmigracion/peticonesFamiliares.png",
    },
    {
        name: "Solicitud de Autorización de Empleo",
        ask: "Proceso que se realiza mediante la forma I-765. ¿Desea saber si califica?",
        imgUrl: "/images/inmigracion/permisoDeTrabajo.png",
    },
    {
        name: "Solicitud para registrar la residencia permanente o ajustar el estatus",
        ask: "¿Qué debo tener en cuenta para ajustar mi estatus?",
        imgUrl: "/images/inmigracion/ajusteDeEstatus.png",
    },
    {
        name: "Solicitud para reemplazar la tarjeta de residente permanente (tarjeta verde)",
        ask: "¿Se le extravió la tarjeta verde? Necesito renovar mi trajeta verde? las respuestas a todas sus preguntas están aquí.",
        imgUrl: "/images/inmigracion/perdonesDePago.png",
    },
    {
        name: "Solicitud de Naturalización",
        ask: "Si cumple con ciertos requisitos, puede convertirse en ciudadano estadounidense al nacer o después del nacimiento",
        imgUrl: "/images/inmigracion/naturalizacion.png",
    },
    {
        name: "Visas y sus modalidades. Deseas visitar los Estados Unidos",
        ask: "A continuacion de le relacionamos toda la informacion necesaria para que conozca las caracteristicas",
        imgUrl: "/images/inmigracion/algunosTiposDeVisas.png",
    }
]





