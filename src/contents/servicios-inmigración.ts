interface ServicioInmigracion {
    id: number;
    name: string;
    description: string;
    imgUrl: string;
}

export const ServicioInmigracionList: ServicioInmigracion[] = [
    {
        id: 1,
        name: 'PERMISO DE TRABAJO',
        description: '¿Desea obtener un permiso de trabajo en los Estados Unidos? ¡Infórmese aquí!',
        imgUrl: '/images/inmigracion/permisoDeTrabajo.png'
    },
    {
        id: 2,
        name: 'AJUSTE DE ESTATUS (Residencia Permanente)',
        description: 'Todo lo que debe saber para optar por su Ajuste de Estatus Migratorio.',
        imgUrl: '/images/inmigracion/ajusteDeEstatus.png'
    },
    {
        id: 3,
        name: 'NATURALIZACIÓN (Ciudadanía)',
        description: 'Requisitos generales para su trámite de Naturalización en los Estados Unidos.',
        imgUrl: '/images/inmigracion/naturalizacion.png'
    },
    {
        id: 4,
        name: 'PETICIONES DE ASILO',
        description: 'En sus dos Modalidades (Afirmativo y Defensivo)',
        imgUrl: '/images/inmigracion/peticionesDeAsilo.png'
    },
    {
        id: 5,
        name: 'PETICIONES FAMILIARES',
        description: 'Conozca los detalles y requerimientos para realizar una petición familiar.',
        imgUrl: '/images/inmigracion/peticonesFamiliares.png'
    },
    {
        id: 6,
        name: 'PAROLE HUMANITARIO',
        description: '¿Qué debe tener para optar por el Parole Humanitario?',
        imgUrl: '/images/inmigracion/paroleHumanitario.png'
    },
    {
        id: 7,
        name: 'PERDONES DE PAGO (Fee Waiver)',
        description: 'Información necesaria para la solicitud del perdón de pago.',
        imgUrl: '/images/inmigracion/perdonesDePago.png'
    },
    {
        id: 8,
        name: 'ALGUNOS TIPOS DE VISAS',
        description: '¿Qué debe tener para obtener una Visa?',
        imgUrl: '/images/inmigracion/algunosTiposDeVisas.png'
    }
];
