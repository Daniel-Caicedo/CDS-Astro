// An array of links for navigation bar Arreglo de links para la navegacion
const navBarLinks = [
    { name: "Home", url: "/" },
    { name: "Servicios", url: "/services" },
    { name: "Blog", url: "/blog" },
    { name: "Contactanos", url: "/contact" },
  ];
  // An array of links for footer un arreglo de links para el footer
  const footerLinks = [
    {
      section: "Ecosystem",
      links: [
        { name: "Documentation", url: "/welcome-to-docs/" },
        { name: "Tools & Equipment", url: "/products" },
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