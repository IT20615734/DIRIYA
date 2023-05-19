export const MenuItems = [

    // {
    //     title: " ",
    //     url: " ",  
    //     cname: "nav-links",
    //     icon: " ",
    //     access : [" ",undefined]
    // },

    {
        title: "Home",
        url: "/",  
        cname: "nav-links",
        icon: "fa-solid fa-house-chimney",
        access : ["Donater"]
    },

    {
        title: "What we do ",
        url: "/Contact",  
        cname: "nav-links",
        icon: "fa-solid fa-address-card",
        access : ["Donater"]
    },

    {
        title: "Admin",
        url: "/Admin/User",  
        cname: "nav-links",
        icon: "fa-solid fa-lock",
        access : ["Admin"]
    },
    
    {
        title: "Beneficiaries",
        url: "/Beneficiaries/ManageBeneficiary",  
        cname: "nav-links",
        icon: "fa-solid fa-user",
        access : ["Admin","VillageOfficer"]

    },

    {
        title: "Donations",
        url: "/Donations/ManageDonations",  
        cname: "nav-links",
        icon: "fa-solid fa-hand-holding-heart",
        access : ["Admin","Donater"]
    },

    {
        title: "Food Management",
        url: "/Food/ManageFood",  
        cname: "nav-links",
        icon: "fa-solid fa-bars-progress",
        access : ["Admin","FoodManager"]
    },

    
    
]