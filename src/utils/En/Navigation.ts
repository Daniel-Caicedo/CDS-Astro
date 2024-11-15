// An array of links for navigation bar Arreglo de links para la navegacion
//English
const navBarLinks = [
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "Vlog", url: "/blog" },
    { name: "Contact us", url: "/contact" },
  ];
  // An array of links for footer un arreglo de links para el footer
  const footerLinks = [
    {
      section: "Ecosystem",
      links: [
        { name: "Documentation", url: "/welcome-to-docs/" },
        { name: "Tools & Equipment", url: "/products" },
        { name: "Guard services", url: "/services" },
      ],
    },
    {
      section: "Company",
      links: [
        { name: "About us", url: "#" },
        { name: "Vlog", url: "#" },
        { name: "Careers", url: "#" },
        { name: "Clients", url: "#" },
      ],
    },
  ];
  // An object with the  links for social icons
  const socialLinks = {
    facebook: "https://www.facebook.com/",
    x: "https://twitter.com/",
    };
  
  export default {
    navBarLinks,
    footerLinks,
    socialLinks,
  };