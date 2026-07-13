export const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.bizvision.fi/#organization",
      name: "BizVision",
      url: "https://www.bizvision.fi",
      logo: "https://www.bizvision.fi/logo.png",
      email: "info@bizvision.fi",
      telephone: "+358407799859",
      founder: {
        "@type": "Person",
        name: "Pekka Laine",
      },
      sameAs: [],
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://www.bizvision.fi/#localbusiness",
      name: "BizVision",
      image: "https://www.bizvision.fi/logo.png",
      url: "https://www.bizvision.fi",
      telephone: "+358407799859",
      email: "info@bizvision.fi",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Laivurinkatu 9 A 11",
        postalCode: "00150",
        addressLocality: "Helsinki",
        addressCountry: "FI",
      },
      areaServed: "FI",
      description:
        "AI systems, agentic workflows, and full-stack web and mobile development for Finnish SMEs and public-sector organisations.",
    },
  ],
};
