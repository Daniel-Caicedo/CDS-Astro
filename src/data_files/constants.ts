export const SITE = {
  title: "Cordon de seguridad",
  tagline: "Vigilancia y seguridad de primera",
  description: "Somos una empresa de vigilancia y seguridad privada de la ciudad de Cali , proyectada a brindar servicios a nivel nacional.",
  description_short: "Cordon ofrece servicios de primera con convacion , respeto , resposabilidad , honestidad , huminidad para cumplir su necesidades.",
  url: "https://cordonseguridadltda.com.co",
  author: "Daniel Caicedo",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "es-CO",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "es_CO",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}:  Servicios de seguridad movil , vigilancia escolta.`,
  description: "Protege tu negocio o proyectos con los servicios de primera de Cordon de seguridad . Con la confianza de lideres de la industria, Cordon  ofrece sencillez, asequibilidad, y fiabilidad. Experimente la diferencia con un servicio centrado en el usuario y herramientas de vanguardia. ¡Empieza a explorar ahora!",
};

export const Article_Limit = 4;
export const Article_page = 2;