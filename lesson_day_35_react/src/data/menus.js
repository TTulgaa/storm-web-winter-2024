const menus = [
    {
        parent: "LifeStyle",
        closed: true,
        children: [
            {
                name:"Hobby",
                link:"/hobby"
            },
            {
                name:"Travel",
                link:"/travel"
            },
            {
                name:"Food Beverage",
                link:"/food-beverage"
            },
            {
                name:"Home and Decor",
                link:"/home-decor"
            }
        ]
    },
    {
        parent: "Sport",
        closed: true,
        children: [
            {
                name:"Soccer",
                link:"/soccer"
            },
            {
                name:"Volleball",
                link:"/volleball"
            }
           
        ]
    },
    {
        parent: "Technology",
        closed: false,
        children: [
            {
                name:"Programming",
                link:"/programming"
            },
            {
                name:"Gadget",
                link:"/gadget"
            },
            {
                name:"Internet",
                link:"/internet"
            }
           
        ]
    },
    {
        parent: "Entertainment",
        closed: false,
        children: [
            {
                name:"Movie",
                link:"/movie"
            },
            {
                name:"Music",
                link:"/music"
            },
            {
                name:"Game",
                link:"/game"
            }
           
        ]
    }
]
export default menus