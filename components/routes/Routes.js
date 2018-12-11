// DO NOT include '/checkout' (must only be rendered client side: that is locally in the browser)
export const routes = [ 
    {
        path: "/",
        navText: "Home",
        show: true
    },
    {
        path: "/explore",
        navText: "Explore",
        show: true
    },
    {
        path: "/guide",
        navText: "Your Guide",
        show: true
    },
    {
        path: "/sanctuary",
        navText: "Your Sanctuary",
        show: true
    },
    {
        path: "/about",
        navText: "Chittawela",
        show: true
    },
    {
        path: "/contact",
        navText: "Contact Us",
        show: true
    },
    {
        path: "/checkout",
        navText: "Checkout",
        show: false
    },
    {
        path: "/package",
        navText: "Package",
        show: false
    }
];

const noOfRoutes = routes.length;

export const nextPage = (currentPath) => {
    const matchPath = (ele) => (
        ele.path === currentPath 
    );

    var index = routes.findIndex(matchPath);
   
    var offset = -index; // if at the end then go back to home 
    if (index < noOfRoutes - 1) {
        offset = 1
    }
        
    return routes[index + offset].path;
}

