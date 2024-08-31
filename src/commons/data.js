export const units = [
    {
        id: 1,
        carrier: {
            id: 1,
            name: 'Transportes Flores',
            email: 'transportesflores@gmail.com',
            phone: '3141986645'
        },
        unit: {
            ton: '3.5',
            service: ''
        }
    },
    {
        id: 2,
        carrier: {
            id: 2,
            name: 'Transportes Manzanillo',
            email: 'transportesmanzanillo@gmail.com',
            phone: '3148765544'
        },
        unit: {
            ton: '4.0',
            service: ''
        }
    }
    ,
    {
        id: 3,
        carrier: {
            id: 3,
            name: 'Juan Ramos',
            email: 'juanramos@gmail.com',
            phone: '3148765544'
        },
        unit: {
            ton: '5.0',
            service: ''
        }
    }

]



export const carriers = [
    {
        id: 1,
        name: 'Transportes Flores',
        email: 'transportesflores@gmail.com',
        phone: '3141986645',
        services: [
            'Fletes directos',
            'Servicio de carga consolidada (LCL)',
            'Manejo de materiales peligrosos'
        ]
    },
    {
        id: 2,
        name: 'Transportes Manzanillo',
        email: 'transportesmanzanillo@gmail.com',
        phone: '3148765544',
        services: [
            'Fletes directos',
            'Manejo de materiales peligrosos'
        ]
    },
    {
        id: 3,
        name: 'Juan Ramos',
        email: 'juanramos@gmail.com',
        phone: '3148765544',
        services: [
            'Seguro de carga',
            'Fletes directos',
            'Servicio de carga consolidada (LCL)',
            'Manejo de materiales peligrosos'
        ]
    },
]