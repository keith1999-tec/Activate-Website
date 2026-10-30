import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import LocationSchema from "@/components/seo/LocationSchema";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, Phone, MapPin, Clock, Download, MessageCircle, ArrowRight } from "lucide-react";
import { getLocation } from "@/data/locations";
import spaImg from "@/assets/spa.jpg";

const entebbe = getLocation("entebbe")!;

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// Prices from public/menus/entebbe-spa-menu.pdf — keep the two in sync.
const menu = [
  {
    category: "Massage & Body Treatments",
    image: "/hotstone.jpg",
    items: [
      { name: "Aromatherapy", price: "210,000" },
      { name: "Aromatherapy with Stretches", price: "250,000" },
      { name: "Therapeutic Treatment", price: "180,000" },
      { name: "Hot Stone Therapy", price: "230,000" },
      { name: "Body Scrub", price: "190,000" },
      { name: "Activate Signature", price: "350,000" },
      { name: "Reflexology", price: "140,000" },
      { name: "Head & Shoulder Massage", price: "90,000" },
    ],
  },
  {
    category: "Facial Services",
    image: "/aroma.jpg",
    items: [
      { name: "ABT Express Facial", price: "110,000" },
      { name: "Enzyme Exfoliating Facial", price: "120,000" },
      { name: "Anti Aging Facial", price: "160,000" },
      { name: "Acne Relief Facial", price: "200,000" },
      { name: "Gentlemen's Facial", price: "130,000" },
      { name: "ABT Calming Facial", price: "350,000" },
      { name: "Hydrating Facial", price: "200,000" },
      { name: "Microneedling Facials", price: "500,000" },
    ],
  },
  {
    category: "Waxing Services",
    image: "/waxing.jpg",
    items: [
      { name: "Underarm", price: "35,000" },
      { name: "Half Arm", price: "35,000" },
      { name: "Full Arm", price: "60,000" },
      { name: "Stomach", price: "60,000" },
      { name: "Back", price: "70,000" },
      { name: "Bikini", price: "55,000" },
      { name: "Brazilian", price: "100,000" },
      { name: "Buttock", price: "80,000" },
      { name: "Half Leg", price: "45,000" },
      { name: "Full Leg", price: "70,000" },
      { name: "V-Facial (+ Waxing)", price: "170,000" },
      { name: "Full Body (Excl. Bikini & Brazilian)", price: "200,000" },
    ],
  },
  {
    category: "Clinic Services",
    image: "/bodyscrub.jpg",
    items: [
      { name: "Consultation", price: "150,000" },
      { name: "Pain Management", price: "380,000" },
      { name: "Sports Therapy", price: "250,000" },
      { name: "Deep Tissue", price: "200,000" },
      { name: "Physiotherapy", price: "150,000" },
      { name: "Exercise Therapy", price: "180,000" },
      { name: "Personal Training", price: "100,000" },
    ],
  },
];

const whatsappLink = (treatment?: string) => {
  const text = treatment
    ? `Hello, I'd like to book ${treatment} at Activate Body Therapy Entebbe.`
    : "Hello, I'd like to book a treatment at Activate Body Therapy Entebbe.";
  return `https://wa.me/${entebbe.whatsapp}?text=${encodeURIComponent(text)}`;
};

const faqs = [
  {
    q: "Where is Activate Body Therapy in Entebbe?",
    a: `Our Entebbe spa and clinic is at ${entebbe.address}. Hotel guests and walk-in clients are both welcome.`,
  },
  {
    q: "What are your opening hours in Entebbe?",
    a: "We are open every day: Monday to Friday 9:00am – 10:00pm, and Saturday to Sunday 10:00am – 9:00pm.",
  },
  {
    q: "Do you offer physiotherapy in Entebbe as well as spa treatments?",
    a: "Yes. Alongside massage, facials and waxing, our Entebbe branch offers consultations, physiotherapy, sports therapy, pain management and exercise therapy.",
  },
  {
    q: "How do I book a treatment in Entebbe?",
    a: `Call or WhatsApp us on ${entebbe.phone}, or use the booking form on our Contact page and choose the Entebbe location.`,
  },
];

const EntebbeSpa = () => {
  return (
    <Layout>
      <Helmet>
        <title>Spa, Massage & Physiotherapy in Entebbe | Activate Body Therapy</title>
        <meta
          name="description"
          content="Activate Body Therapy Entebbe at Hemingway's Hotel. Massage, facials, waxing, physiotherapy and sports therapy. Open daily. Call or WhatsApp +256 731 474 094."
        />
        <meta
          name="keywords"
          content="spa Entebbe, massage Entebbe, facial Entebbe, waxing Entebbe, physiotherapy Entebbe, Hemingway's Hotel spa, beauty spa Entebbe"
        />
        <link rel="canonical" href="https://www.activatebodytherapy.com/entebbe-spa" />
        <meta
          property="og:title"
          content="Spa, Massage & Physiotherapy in Entebbe | Activate Body Therapy"
        />
        <meta
          property="og:description"
          content="Massage, facials, waxing and clinical treatments at Hemingway's Hotel, Entebbe."
        />
        <meta property="og:url" content="https://www.activatebodytherapy.com/entebbe-spa" />
      </Helmet>
      <LocationSchema id="entebbe" />

      {/* Hero */}
      {/* TODO: replace spaImg with a photo of the Entebbe spa at Hemingway's Hotel. */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${spaImg})` }}
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="container mx-auto px-4 py-20 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-2 bg-usawa-green/30 rounded-full text-white text-sm font-medium mb-6">
              Spa & Beauty · Hemingway's Hotel, Entebbe
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
              Spa, Massage & Wellness{" "}
              <span className="text-white/90">in Entebbe</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto drop-shadow-lg">
              Massage, facials, waxing and expert clinical care by the lake —
              open every day at Hemingway's Hotel.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="gap-2 bg-usawa-green hover:bg-usawa-green/90 text-white"
              >
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  Book on WhatsApp
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="gap-2 border-white text-white hover:bg-white/10"
              >
                <a href={entebbe.phoneHref}>
                  <Phone className="w-5 h-5" />
                  {entebbe.phone}
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Visit info */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: MapPin, title: "Find Us", detail: entebbe.address },
              { icon: Clock, title: "Opening Hours", detail: entebbe.hours },
              { icon: Phone, title: "Call or WhatsApp", detail: entebbe.phone },
            ].map((info) => (
              <div key={info.title} className="bg-background rounded-2xl p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-usawa-green/10 flex items-center justify-center shrink-0">
                  <info.icon className="w-5 h-5 text-usawa-green" />
                </div>
                <div>
                  <h2 className="font-semibold text-foreground mb-1">{info.title}</h2>
                  <p className="text-sm text-muted-foreground">{info.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-usawa-green mb-4">
              Spa & Beauty Menu
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              All prices in Ugandan Shillings (UGX). Tap a treatment to book it
              on WhatsApp.
            </p>
            <Button asChild variant="outline" className="gap-2">
              <a href="/menus/entebbe-spa-menu.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="w-4 h-4" />
                Download Menu (PDF)
              </a>
            </Button>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {menu.map((section) => (
              <motion.div
                key={section.category}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-muted/30 rounded-2xl overflow-hidden"
              >
                <div className="h-40 overflow-hidden">
                  <img
                    src={section.image}
                    alt={`${section.category} at Activate Body Therapy Entebbe`}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-2xl font-bold text-usawa-green mb-4">
                    {section.category}
                  </h3>
                  <ul className="divide-y divide-border">
                    {section.items.map((item) => (
                      <li key={item.name}>
                        <a
                          href={whatsappLink(item.name)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between gap-4 py-3 group"
                        >
                          <span className="text-sm text-foreground group-hover:text-usawa-green transition-colors">
                            {item.name}
                          </span>
                          <span className="text-sm font-semibold text-usawa-green whitespace-nowrap">
                            UGX {item.price}
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-usawa-green mb-6">
                Visit Us at Hemingway's Hotel
              </h2>
              <p className="text-muted-foreground mb-4">{entebbe.address}</p>
              <p className="text-muted-foreground mb-8">{entebbe.hours}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  className="bg-usawa-green hover:bg-usawa-green/90 text-white gap-2"
                >
                  <Link to="/contact?location=entebbe">
                    <Calendar className="w-4 h-4" />
                    Book an Appointment
                  </Link>
                </Button>
                <Button asChild variant="outline" className="gap-2">
                  <a href={entebbe.phoneHref}>
                    <Phone className="w-4 h-4" />
                    Call Entebbe
                  </a>
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="rounded-2xl overflow-hidden h-80 shadow-lg"
            >
              <iframe
                src={entebbe.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Activate Body Therapy Entebbe location"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-usawa-green mb-4">
              Frequently Asked Questions
            </h2>
          </motion.div>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <motion.div
                key={faq.q}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-muted/30 rounded-2xl p-6"
              >
                <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-usawa-green/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-usawa-green mb-4">
              Treat Yourself in Entebbe
            </h2>
            <p className="text-muted-foreground mb-8">
              Book a massage, facial or clinical session at our Entebbe branch
              today.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-usawa-green hover:bg-usawa-green/90 text-white gap-2"
            >
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                Book on WhatsApp
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default EntebbeSpa;
