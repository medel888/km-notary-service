interface ServicioInmigracion {
    id: number;
    name: string;
    description: string;
    imgUrl: string;
}

export const ServicioInmigracionList: ServicioInmigracion[] = [
    {
        id: 1,
        name: 'Permiso de trabajo',
        description: '¿Desea obtener un permiso de trabajo en los Estados Unidos? ¡Infórmese aquí!',
        imgUrl: '/images/inmigracion/001.webp'
    },
    {
        id: 2,
        name: 'Ajuste de Estatus (Residencia Permanente)',
        description: 'Todo lo que debe saber para optar por su Ajuste de Status Migratorio.',
        imgUrl: '/images/inmigracion/001.webp'
    },
    {
        id: 3,
        name: 'Naturalización (Ciudadanía)',
        description: 'Requisitos generales para su trámite de Naturalización en los Estados Unidos.',
        imgUrl: '/images/inmigracion/001.webp'
    },
    {
        id: 4,
        name: 'Peticiones de Asilo',
        description: 'En sus dos Modalidades (Afirmativo y Defensivo)',
        imgUrl: '/images/inmigracion/001.webp'
    },
    {
        id: 5,
        name: 'Peticiones Familiares',
        description: 'Conozca los detalles y requerimientos para realizar una petición familiar.',
        imgUrl: '/images/inmigracion/001.webp'
    },
    {
        id: 6,
        name: 'Parole Humanitario',
        description: '¿Qué debe tener para optar por el Parole Humanitario?',
        imgUrl: '/images/inmigracion/001.webp'
    },
    {
        id: 7,
        name: 'Perdones de Pago (Fee Waiver)',
        description: 'Información necesaria para la solicitud del perdón de pago.',
        imgUrl: '/images/inmigracion/001.webp'
    },
    {
        id: 8,
        name: 'Algunos Tipos de Visas',
        description: '¿Qué debe tener para obtener una Visa?',
        imgUrl: '/images/inmigracion/001.webp'
    }
];
