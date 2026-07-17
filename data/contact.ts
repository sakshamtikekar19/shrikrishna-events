/**
 * Business contact — update here to change site-wide.
 */
export const contactInfo = {
  phones: [
    { display: "+91 86589 88831", tel: "+918658988831", raw: "8658988831" },
    { display: "+91 93373 00540", tel: "+919337300540", raw: "9337300540" },
  ],
  /** Primary WhatsApp number (no + or spaces) */
  whatsapp: "918658988831",
  whatsappMessage:
    "Hello Shree Krishna Event Management, I would like to enquire about an event.",
  email: "info@shreekrishnaevents.com",
  address: {
    line1: "Kesura Mangrajpoint, Chwaka",
    line2: "Near Indira Basanti Complex",
    city: "Bhubaneswar, India 751002",
    full: "Kesura Mangrajpoint Chwaka, near Indira Basanti Complex, Bhubaneswar, India 751002",
  },
  mapEmbedUrl:
    "https://maps.google.com/maps?q=Kesura%20Mangrajpoint%20Chwaka%2C%20near%20Indira%20Basanti%20Complex%2C%20Bhubaneswar%2C%20Odisha%20751002&z=16&output=embed",
  mapLink:
    "https://www.google.com/maps/search/?api=1&query=Kesura+Mangrajpoint+Chwaka+near+Indira+Basanti+Complex+Bhubaneswar+751002",
  social: {
    instagram: "https://www.instagram.com/shreekrishnaevent_management/",
  },
} as const;

export const whatsappHref = `https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent(contactInfo.whatsappMessage)}`;
