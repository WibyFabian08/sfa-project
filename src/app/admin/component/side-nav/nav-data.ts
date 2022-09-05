export const navbarData = [
    {
        routeLink: 'dashboard',
        icon: 'visibility',
        label: 'Dashboard'
    },
    {
        routeLink: 'products',
        icon: 'visibility',
        label: 'Products'
    },
    {
        routeLink: '',
        icon: 'visibility',
        label: 'Menu with Children',
        submenuLevel1: [
            {
                routeLink: '',
                icon: 'fal fa-cog', // icon if needed
                label: 'Sub menu level 1',
            },
            {
                routeLink: '',
                icon: 'fal fa-cog', // icon if needed
                label: 'Sub menu level 1',
            },
            {
                routeLink: '',
                icon: 'fal fa-cog', // icon if needed
                label: 'Sub menu level 1',
            },
            
        ]
    },

];