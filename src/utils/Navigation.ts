// An array of links for navigation bar Arreglo de links para la navegacion
// Español
const navBarLinks = [
    { name: "Home", url: "/" },
    { name: "Servicios", url: "/services" },
    { name: "Vlog", url: "/blog" },
    { name: "Contactanos", url: "/contact" },
  ];
  // An array of links for footer un arreglo de links para el footer
  const footerLinks = [
    {
      section: "Ecosistema",
      links: [
        { name: "Documentación", url: "/welcome-to-docs/" },
        { name: "Herramientas y Equipo", url: "/products" },
        { name: "Construction Services", url: "/services" },
      ],
    },
    {
      section: "Compañia",
      links: [
        { name: "Sobre nosotros", url: "#" },
        { name: "Blog", url: "#" },
        { name: "Puestos ", url: "#" },
        { name: "Clientes", url: "#" },
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