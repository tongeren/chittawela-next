export const routes = [
    {
        path: "/",
        navText: "Home"
    },
    {
        path: "/explore",
        navText: "Explore"
    },
    {
        path: "/guide",
        navText: "Your Guide"
    },
    {
        path: "/sanctuary",
        navText: "Your Sanctuary"
    },
    {
        path: "/about",
        navText: "Chittawela"
    },
    {
        path: "/contact",
        navText: "Contact Us"
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

