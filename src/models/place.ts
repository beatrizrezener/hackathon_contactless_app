export interface Place {
    name: string;
    address: string;
    picture: string;
    isFavorite: boolean;
    price: string;
    otherServices: OtherService[];
}

export interface OtherService {
    icon: string;
    name: string;
    params: {
        catIndex: number;
        placeIndex: number;
    }
}

export interface Category {
    name: string;
    icon: string;
    places: Place[];
}

export const categories: Category[] = [
    {
        name: 'Hospedagem',
        icon: 'assets/imgs/hotel.png',
        places: [
            {
                name: 'Days Inn - London Ontario',
                address: '1100 Wellington Road South, N6E 1M2 London, Canada (6 km from airport)',
                picture: 'assets/imgs/hotel/1.jpg',
                isFavorite: false,
                price: 'R$ 40,00 / hora',
                otherServices: [
                    {
                        icon: 'assets/imgs/gym.png',
                        name: 'Academia',
                        params: {
                            catIndex: 1,
                            placeIndex: 0,
                        }
                    },
                    {
                        icon: 'assets/imgs/swim.png',
                        name: 'Piscina',
                        params: {
                            catIndex: 2,
                            placeIndex: 0,
                        }
                    },
                    {
                        icon: 'assets/imgs/hidro.png',
                        name: 'Hidromassagem',
                        params: {
                            catIndex: 3,
                            placeIndex: 0,
                        }
                    },
                ],
            },
            {
                name: 'Quality Suites London',
                address: '1120 Dearness Drive, N6E 1N9 London, Canada (3 km from airport)',
                picture: 'assets/imgs/hotel/2.jpg',
                isFavorite: false,
                price: 'R$ 37,00 / hora',
                otherServices: [
                    {
                        icon: 'assets/imgs/gym.png',
                        name: 'Academia',
                        params: {
                            catIndex: 1,
                            placeIndex: 0,
                        }
                    },
                    {
                        icon: 'assets/imgs/swim.png',
                        name: 'Piscina',
                        params: {
                            catIndex: 2,
                            placeIndex: 0,
                        }
                    },
                    {
                        icon: 'assets/imgs/hidro.png',
                        name: 'Hidromassagem',
                        params: {
                            catIndex: 3,
                            placeIndex: 0,
                        }
                    },
                ],
            },
            {
                name: 'Doubletree by Hilton London Opens in new window',
                address: '300 King Street, N6B 1S2 London, Canada',
                picture: 'assets/imgs/hotel/3.jpg',
                isFavorite: false,
                price: 'R$ 42,00 / hora',
                otherServices: [
                    {
                        icon: 'assets/imgs/gym.png',
                        name: 'Academia',
                        params: {
                            catIndex: 1,
                            placeIndex: 0,
                        }
                    },
                    {
                        icon: 'assets/imgs/swim.png',
                        name: 'Piscina',
                        params: {
                            catIndex: 2,
                            placeIndex: 0,
                        }
                    },
                    {
                        icon: 'assets/imgs/hidro.png',
                        name: 'Hidromassagem',
                        params: {
                            catIndex: 3,
                            placeIndex: 0,
                        }
                    },
                ],
            },
        ]
    },
    {
        name: 'Academia',
        icon: 'assets/imgs/gym.png',
        places: [
            {
                name: 'Days Inn - London Ontario',
                address: '1100 Wellington Road South, N6E 1M2 London, Canada (6 km from airport)',
                picture: 'assets/imgs/gym/1.jpg',
                isFavorite: false,
                price: 'R$ 12,00 / hora',
                otherServices: [
                    {
                        icon: 'assets/imgs/hotel.png',
                        name: 'Hospedagem',
                        params: {
                            catIndex: 0,
                            placeIndex: 0,
                        }
                    },
                    {
                        icon: 'assets/imgs/swim.png',
                        name: 'Piscina',
                        params: {
                            catIndex: 2,
                            placeIndex: 0,
                        }
                    },
                    {
                        icon: 'assets/imgs/hidro.png',
                        name: 'Hidromassagem',
                        params: {
                            catIndex: 3,
                            placeIndex: 0,
                        }
                    },
                ],
            },
            {
                name: 'Quality Suites London',
                address: '1120 Dearness Drive, N6E 1N9 London, Canada (3 km from airport)',
                picture: 'assets/imgs/gym/2.jpg',
                isFavorite: false,
                price: 'R$ 17,50 / hora',
                otherServices: [
                    {
                        icon: 'assets/imgs/hotel.png',
                        name: 'Hospedagem',
                        params: {
                            catIndex: 0,
                            placeIndex: 0,
                        }
                    },
                    {
                        icon: 'assets/imgs/swim.png',
                        name: 'Piscina',
                        params: {
                            catIndex: 2,
                            placeIndex: 0,
                        }
                    },
                    {
                        icon: 'assets/imgs/hidro.png',
                        name: 'Hidromassagem',
                        params: {
                            catIndex: 3,
                            placeIndex: 0,
                        }
                    },
                ],
            },
            {
                name: 'Doubletree by Hilton London Opens in new window',
                address: '300 King Street, N6B 1S2 London, Canada',
                picture: 'assets/imgs/gym/3.jpg',
                isFavorite: false,
                price: 'R$ 17,35 / hora',
                otherServices: [
                    {
                        icon: 'assets/imgs/hotel.png',
                        name: 'Hospedagem',
                        params: {
                            catIndex: 0,
                            placeIndex: 0,
                        }
                    },
                    {
                        icon: 'assets/imgs/swim.png',
                        name: 'Piscina',
                        params: {
                            catIndex: 2,
                            placeIndex: 0,
                        }
                    },
                    {
                        icon: 'assets/imgs/hidro.png',
                        name: 'Hidromassagem',
                        params: {
                            catIndex: 3,
                            placeIndex: 0,
                        }
                    },
                ],
            },
        ]
    },
    {
        name: 'Piscina',
        icon: 'assets/imgs/swim.png',
        places: [
            {
                name: 'Days Inn - London Ontario',
                address: '1100 Wellington Road South, N6E 1M2 London, Canada (6 km from airport)',
                picture: 'assets/imgs/swim/1.jpg',
                isFavorite: false,
                price: 'R$ 10,30 / hora',
                otherServices: [
                    {
                        icon: 'assets/imgs/gym.png',
                        name: 'Academia',
                        params: {
                            catIndex: 1,
                            placeIndex: 0,
                        }
                    },
                    {
                        icon: 'assets/imgs/hotel.png',
                        name: 'Hospedagem',
                        params: {
                            catIndex: 0,
                            placeIndex: 0,
                        }
                    },
                    {
                        icon: 'assets/imgs/hidro.png',
                        name: 'Hidromassagem',
                        params: {
                            catIndex: 3,
                            placeIndex: 0,
                        }
                    },
                ],
            },
            {
                name: 'Quality Suites London',
                address: '1120 Dearness Drive, N6E 1N9 London, Canada (3 km from airport)',
                picture: 'assets/imgs/swim/2.jpg',
                isFavorite: false,
                price: 'R$ 8,50 / hora',
                otherServices: [
                    {
                        icon: 'assets/imgs/gym.png',
                        name: 'Academia',
                        params: {
                            catIndex: 1,
                            placeIndex: 0,
                        }
                    },
                    {
                        icon: 'assets/imgs/hotel.png',
                        name: 'Hospedagem',
                        params: {
                            catIndex: 0,
                            placeIndex: 0,
                        }
                    },
                    {
                        icon: 'assets/imgs/hidro.png',
                        name: 'Hidromassagem',
                        params: {
                            catIndex: 3,
                            placeIndex: 0,
                        }
                    },
                ],
            },
            {
                name: 'Doubletree by Hilton London Opens in new window',
                address: '300 King Street, N6B 1S2 London, Canada',
                picture: 'assets/imgs/swim/3.jpg',
                isFavorite: false,
                price: 'R$ 12,50 / hora',
                otherServices: [
                    {
                        icon: 'assets/imgs/gym.png',
                        name: 'Academia',
                        params: {
                            catIndex: 1,
                            placeIndex: 0,
                        }
                    },
                    {
                        icon: 'assets/imgs/hotel.png',
                        name: 'Hospedagem',
                        params: {
                            catIndex: 0,
                            placeIndex: 0,
                        }
                    },
                    {
                        icon: 'assets/imgs/hidro.png',
                        name: 'Hidromassagem',
                        params: {
                            catIndex: 3,
                            placeIndex: 0,
                        }
                    },
                ],
            },
        ]
    },
    {
        name: 'Hidromassagem',
        icon: 'assets/imgs/hidro.png',
        places: [
            {
                name: 'Days Inn - London Ontario',
                address: '1100 Wellington Road South, N6E 1M2 London, Canada (6 km from airport)',
                picture: 'assets/imgs/hidro/1.jpg',
                isFavorite: false,
                price: 'R$ 20,00 / hora',
                otherServices: [
                    {
                        icon: 'assets/imgs/gym.png',
                        name: 'Academia',
                        params: {
                            catIndex: 1,
                            placeIndex: 0,
                        }
                    },
                    {
                        icon: 'assets/imgs/swim.png',
                        name: 'Piscina',
                        params: {
                            catIndex: 2,
                            placeIndex: 0,
                        }
                    },
                    {
                        icon: 'assets/imgs/hotel.png',
                        name: 'Hospedagem',
                        params: {
                            catIndex: 0,
                            placeIndex: 0,
                        }
                    },
                ],
            },
            {
                name: 'Quality Suites London',
                address: '1120 Dearness Drive, N6E 1N9 London, Canada (3 km from airport)',
                picture: 'assets/imgs/hidro/2.jpg',
                isFavorite: false,
                price: 'R$ 17,90 / hora',
                otherServices: [
                    {
                        icon: 'assets/imgs/gym.png',
                        name: 'Academia',
                        params: {
                            catIndex: 1,
                            placeIndex: 0,
                        }
                    },
                    {
                        icon: 'assets/imgs/swim.png',
                        name: 'Piscina',
                        params: {
                            catIndex: 2,
                            placeIndex: 0,
                        }
                    },
                    {
                        icon: 'assets/imgs/hotel.png',
                        name: 'Hospedagem',
                        params: {
                            catIndex: 0,
                            placeIndex: 0,
                        }
                    },
                ],
            },
            {
                name: 'Doubletree by Hilton London Opens in new window',
                address: '300 King Street, N6B 1S2 London, Canada',
                picture: 'assets/imgs/hidro/3.jpg',
                isFavorite: false,
                price: 'R$ 18,00 / hora',
                otherServices: [
                    {
                        icon: 'assets/imgs/gym.png',
                        name: 'Academia',
                        params: {
                            catIndex: 1,
                            placeIndex: 0,
                        }
                    },
                    {
                        icon: 'assets/imgs/swim.png',
                        name: 'Piscina',
                        params: {
                            catIndex: 2,
                            placeIndex: 0,
                        }
                    },
                    {
                        icon: 'assets/imgs/hotel.png',
                        name: 'Hospedagem',
                        params: {
                            catIndex: 0,
                            placeIndex: 0,
                        }
                    },
                ],
            },
        ]
    },
    {
        name: 'Spa',
        icon: 'assets/imgs/spa.png',
        places: [
            {
                name: 'Days Inn - London Ontario',
                address: '1100 Wellington Road South, N6E 1M2 London, Canada (6 km from airport)',
                picture: 'assets/imgs/spa/1.jpg',
                isFavorite: false,
                price: 'R$ 60,00 / hora',
                otherServices: [
                    {
                        icon: 'assets/imgs/gym.png',
                        name: 'Academia',
                        params: {
                            catIndex: 1,
                            placeIndex: 0,
                        }
                    },
                    {
                        icon: 'assets/imgs/swim.png',
                        name: 'Piscina',
                        params: {
                            catIndex: 2,
                            placeIndex: 0,
                        }
                    },
                    {
                        icon: 'assets/imgs/hidro.png',
                        name: 'Hidromassagem',
                        params: {
                            catIndex: 3,
                            placeIndex: 0,
                        }
                    },
                ],
            },
            {
                name: 'Quality Suites London',
                address: '1120 Dearness Drive, N6E 1N9 London, Canada (3 km from airport)',
                picture: 'assets/imgs/spa/2.jpg',
                isFavorite: false,
                price: 'R$ 65,00 / hora',
                otherServices: [
                    {
                        icon: 'assets/imgs/gym.png',
                        name: 'Academia',
                        params: {
                            catIndex: 1,
                            placeIndex: 0,
                        }
                    },
                    {
                        icon: 'assets/imgs/swim.png',
                        name: 'Piscina',
                        params: {
                            catIndex: 2,
                            placeIndex: 0,
                        }
                    },
                    {
                        icon: 'assets/imgs/hidro.png',
                        name: 'Hidromassagem',
                        params: {
                            catIndex: 3,
                            placeIndex: 0,
                        }
                    },
                ],
            },
            {
                name: 'Doubletree by Hilton London Opens in new window',
                address: '300 King Street, N6B 1S2 London, Canada',
                picture: 'assets/imgs/spa/3.jpg',
                isFavorite: false,
                price: 'R$ 59,90 / hora',
                otherServices: [
                    {
                        icon: 'assets/imgs/gym.png',
                        name: 'Academia',
                        params: {
                            catIndex: 1,
                            placeIndex: 0,
                        }
                    },
                    {
                        icon: 'assets/imgs/swim.png',
                        name: 'Piscina',
                        params: {
                            catIndex: 2,
                            placeIndex: 0,
                        }
                    },
                    {
                        icon: 'assets/imgs/hidro.png',
                        name: 'Hidromassagem',
                        params: {
                            catIndex: 3,
                            placeIndex: 0,
                        }
                    },
                ],
            },
        ]
    },
    {
        name: 'Guarda Volumes',
        icon: 'assets/icon/253-luggage-4.svg',
        places: [
            {
                name: 'Days Inn - London Ontario',
                address: '1100 Wellington Road South, N6E 1M2 London, Canada (6 km from airport)',
                picture: 'assets/imgs/luggage/1.jpg',
                isFavorite: false,
                price: 'R$ 10,00 / hora',
                otherServices: [
                    {
                        icon: 'assets/imgs/gym.png',
                        name: 'Academia',
                        params: {
                            catIndex: 1,
                            placeIndex: 0,
                        }
                    },
                    {
                        icon: 'assets/imgs/swim.png',
                        name: 'Piscina',
                        params: {
                            catIndex: 2,
                            placeIndex: 0,
                        }
                    },
                    {
                        icon: 'assets/imgs/hidro.png',
                        name: 'Hidromassagem',
                        params: {
                            catIndex: 3,
                            placeIndex: 0,
                        }
                    },
                ],
            },
            {
                name: 'Quality Suites London',
                address: '1120 Dearness Drive, N6E 1N9 London, Canada (3 km from airport)',
                picture: 'assets/imgs/luggage/2.jpg',
                isFavorite: false,
                price: 'R$ 8,90 / hora',
                otherServices: [
                    {
                        icon: 'assets/imgs/gym.png',
                        name: 'Academia',
                        params: {
                            catIndex: 1,
                            placeIndex: 0,
                        }
                    },
                    {
                        icon: 'assets/imgs/swim.png',
                        name: 'Piscina',
                        params: {
                            catIndex: 2,
                            placeIndex: 0,
                        }
                    },
                    {
                        icon: 'assets/imgs/hidro.png',
                        name: 'Hidromassagem',
                        params: {
                            catIndex: 3,
                            placeIndex: 0,
                        }
                    },
                ],
            },
            {
                name: 'Doubletree by Hilton London Opens in new window',
                address: '300 King Street, N6B 1S2 London, Canada',
                picture: 'assets/imgs/luggage/3.jpg',
                isFavorite: false,
                price: 'R$ 7,00 / hora',
                otherServices: [
                    {
                        icon: 'assets/imgs/gym.png',
                        name: 'Academia',
                        params: {
                            catIndex: 1,
                            placeIndex: 0,
                        }
                    },
                    {
                        icon: 'assets/imgs/swim.png',
                        name: 'Piscina',
                        params: {
                            catIndex: 2,
                            placeIndex: 0,
                        }
                    },
                    {
                        icon: 'assets/imgs/hidro.png',
                        name: 'Hidromassagem',
                        params: {
                            catIndex: 3,
                            placeIndex: 0,
                        }
                    },
                ],
            },
        ]
    },
]