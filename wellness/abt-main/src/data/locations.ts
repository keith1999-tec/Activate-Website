// Single source of truth for branch details. Header, footer, home page,
// Contact page, booking form and the service-page location cards all read
// from here.
import clinicImg from "@/assets/clinic-hero.jpg";
import healthClubImg from "@/assets/healthclub-hero.jpg";
import spaImg from "@/assets/spa.jpg";

export type LocationId = "clinic" | "health club" | "entebbe";

const ALL_WEEK = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

export interface OpeningHours {
  days: string[];
  opens: string;
  closes: string;
}

export interface BranchLocation {
  // Also the value the booking form sends, so keep existing ids stable.
  id: LocationId;
  name: string;
  shortName: string;
  address: string;
  city: string;
  phone: string;
  phoneHref: string;
  whatsapp: string;
  email: string;
  hours: string;
  openingHours: OpeningHours[];
  tagline: string;
  image: string;
  // schema.org business type for structured data.
  schemaType: string;
  mapEmbedUrl: string;
  mapLabel: string;
  path: string;
}

export const locations: BranchLocation[] = [
  {
    id: "clinic",
    name: "Nakasero Clinic",
    shortName: "Nakasero",
    address: "Plot 12, Kyadondo Road, Nakasero, Kampala",
    city: "Kampala",
    phone: "+256 708 661 166",
    phoneHref: "tel:+256708661166",
    whatsapp: "256708661166",
    email: "clinicfrontdesk@activatebodytherapy.com",
    hours: "Mon–Sun: 8:00am – 8:00pm",
    openingHours: [{ days: ALL_WEEK, opens: "08:00", closes: "20:00" }],
    tagline: "Physiotherapy, pain management and clinical rehabilitation.",
    image: clinicImg,
    schemaType: "MedicalClinic",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7519282203953!2d32.57928109999999!3d0.33053690000001845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb05b7f20f4b%3A0xaf090250c1f76c53!2sActivate%20Body%20Therapy!5e0!3m2!1sen!2sug!4v1775048618175!5m2!1sen!2sug",
    mapLabel: "8HJH+5PM Kampala",
    path: "/clinic",
  },
  {
    id: "health club",
    name: "Naguru Health Club",
    shortName: "Naguru",
    address: "Plot 5 Naguru Hill East Rd, The Summit Residences, Kampala",
    city: "Kampala",
    phone: "+256 708 421 449",
    phoneHref: "tel:+256708421449",
    whatsapp: "256708421449",
    email: "healthclubfrontdesk@activatebodytherapy.com",
    hours: "Mon–Sun: 6:00am – 10:00pm",
    openingHours: [{ days: ALL_WEEK, opens: "06:00", closes: "22:00" }],
    tagline: "Fitness, spa treatments, IV therapy and wellness memberships.",
    image: healthClubImg,
    schemaType: "HealthClub",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15958.994725172324!2d32.5825837673828!3d0.338522953288393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbbf2e1c64e05%3A0x501ff2d1435381df!2sActivate%20Body%20Therapy%20Health%20Club!5e0!3m2!1sen!2sus!4v1775048754391!5m2!1sen!2sus",
    mapLabel: "8JW4+HJ Kampala",
    path: "/health-club",
  },
  {
    id: "entebbe",
    name: "Entebbe Spa & Clinic",
    shortName: "Entebbe",
    address: "Hemingway's Hotel, 16 Mugwanya Rd, Entebbe",
    city: "Entebbe",
    phone: "+256 731 474 094",
    phoneHref: "tel:+256731474094",
    whatsapp: "256731474094",
    // TODO: replace with the Entebbe front-desk email once confirmed.
    email: "activatebodytherapy@gmail.com",
    hours: "Mon–Fri: 9:00am – 10:00pm · Sat–Sun: 10:00am – 9:00pm",
    openingHours: [
      { days: ALL_WEEK.slice(0, 5), opens: "09:00", closes: "22:00" },
      { days: ALL_WEEK.slice(5), opens: "10:00", closes: "21:00" },
    ],
    tagline: "Massage, facials, waxing and clinical care at Hemingway's Hotel.",
    // TODO: replace with a photo of the Entebbe spa at Hemingway's Hotel.
    image: spaImg,
    schemaType: "DaySpa",
    // TODO: swap for the Google Maps embed of the Entebbe Business Profile.
    mapEmbedUrl:
      "https://www.google.com/maps?q=Hemingway's+Hotel,+16+Mugwanya+Rd,+Entebbe&output=embed",
    mapLabel: "16 Mugwanya Rd, Entebbe",
    path: "/entebbe-spa",
  },
];

export const getLocation = (id: string) =>
  locations.find((location) => location.id === id);

// Plain-text branch list for the chat assistant's knowledge.
export const locationsSummary = locations
  .map((loc) => `- ${loc.name}: ${loc.address} | Phone/WhatsApp: ${loc.phone} | Hours: ${loc.hours}`)
  .join("\n");
