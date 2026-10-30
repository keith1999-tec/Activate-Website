import { Helmet } from "react-helmet-async";
import { getLocation, LocationId } from "@/data/locations";

const SITE_URL = "https://www.activatebodytherapy.com";

// schema.org LocalBusiness data so search engines can show the branch's
// address, phone and opening hours in local results.
const LocationSchema = ({ id }: { id: LocationId }) => {
  const loc = getLocation(id);
  if (!loc) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": loc.schemaType,
    name: `Activate Body Therapy ${loc.name}`,
    url: `${SITE_URL}${loc.path}`,
    image: `${SITE_URL}/logo.png`,
    telephone: loc.phone.replace(/\s/g, ""),
    email: loc.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: loc.address,
      addressLocality: loc.city,
      addressCountry: "UG",
    },
    openingHoursSpecification: loc.openingHours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    })),
    parentOrganization: {
      "@type": "Organization",
      name: "Activate Body Therapy",
      url: SITE_URL,
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

export default LocationSchema;
