/**
 * Business contact — update here to change site-wide.
 */
export const contactInfo = {
  phones: [
    { display: "+91 93373 00540", tel: "+919337300540", raw: "9337300540" },
    { display: "+91 86589 88831", tel: "+918658988831", raw: "8658988831" },
  ],
  /** Primary WhatsApp number (no + or spaces) */
  whatsapp: "919337300540",
  whatsappMessage:
    "Hello Shree Krishna Event Management, I would like to enquire about an event.",
  email: "Shreekrishnaeventmanagement9@gmail.com",
  address: {
    line1: "Plot No 1970/7731, Third Floor, Kesura",
    line2: "Mangrajpoint, Near Indira Basanti Complex",
    city: "Bhubaneswar, Odisha 751006, India",
    full: "Plot No 1970/7731, Third Floor, Kesura, Mangrajpoint, Near Indira Basanti Complex, Bhubaneswar, Odisha 751006, India",
  },
  mapEmbedUrl:
    "https://maps.google.com/maps?q=Plot%20No%201970%2F7731%2C%20Third%20Floor%2C%20Kesura%2C%20Mangrajpoint%2C%20Near%20Indira%20Basanti%20Complex%2C%20Bhubaneswar%2C%20Odisha%20751006&z=16&output=embed",
  mapLink:
    "https://www.google.com/maps/search/?api=1&query=Plot+No+1970/7731+Third+Floor+Kesura+Mangrajpoint+Near+Indira+Basanti+Complex+Bhubaneswar+Odisha+751006",
  social: {
    instagram: "https://www.instagram.com/shreekrishnaevent_management/",
  },
} as const;

export const whatsappHref = `https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent(contactInfo.whatsappMessage)}`;
