import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, Phone, Check, ArrowRight } from "lucide-react";
import needlingImg from "@/assets/needling.jpg";
import rehabImg from "@/assets/rehab.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const conditions = [
  "Chronic and acute pain",
  "Migraines and headaches",
  "Neck and lower back pain",
  "Muscular tightness and inflammation",
  "Sciatica and nerve pain",
  "Sports injuries",
  "Stress and tension",
  "Post-surgical recovery",
];

const differences = [
  {
    title: "Acupuncture",
    desc: "Rooted in traditional medicine, acupuncture uses fine needles inserted at specific points along energy pathways to restore balance, relieve pain, and promote natural healing throughout the body.",
  },
  {
    title: "Dry Needling",
    desc: "A clinically targeted technique that inserts needles directly into trigger points — tight, painful muscle knots — to release tension, improve circulation, and restore normal muscle function.",
  },
];

const benefits = [
  {
    title: "Pain Relief",
    desc: "Both acupuncture and dry needling stimulate the body's natural pain-relief mechanisms, providing effective relief for both acute and chronic pain conditions.",
  },
  {
    title: "Muscle Relaxation",
    desc: "Direct needle stimulation of trigger points releases muscle tension and spasm, restoring normal length and function to overworked or injured muscles.",
  },
  {
    title: "Reduced Inflammation",
    desc: "Needling promotes increased blood flow and lymphatic drainage to affected areas, accelerating the body's natural healing and reducing localised inflammation.",
  },
  {
    title: "Improved Mobility",
    desc: "By releasing tight muscles and reducing pain, needling therapy restores range of motion and movement quality — essential for rehabilitation and performance.",
  },
  {
    title: "Holistic Treatment",
    desc: "Addresses multiple health concerns simultaneously, making it a flexible addition to physiotherapy, neuromuscular therapy, and rehabilitation programmes.",
  },
  {
    title: "Non-Pharmaceutical",
    desc: "An effective drug-free alternative or complement to medication for pain management, suitable for clients who prefer to minimise pharmaceutical interventions.",
  },
];

const faqs = [
  {
    q: "Does acupuncture or dry needling hurt?",
    a: "Most clients experience minimal discomfort. The needles used are very fine — much thinner than injection needles. You may feel a brief dull ache or twitch sensation when a trigger point is released during dry needling, which is normal and indicates the treatment is working.",
  },
  {
    q: "What is the difference between acupuncture and dry needling?",
    a: "Acupuncture is based on traditional medicine principles and targets energy pathways throughout the body. Dry needling is a clinically focused technique that targets specific trigger points in muscles to relieve pain and restore function. At ABT, our therapists are trained in both approaches and will recommend the most appropriate technique for your condition.",
  },
  {
    q: "How many sessions will I need?",
    a: "This depends on your condition. Acute conditions may respond within 2–4 sessions, while chronic conditions typically require 6–8 sessions or more. Your therapist will assess your progress and adjust the treatment plan accordingly.",
  },
  {
    q: "Is dry needling safe?",
    a: "Yes — when performed by trained therapists, dry needling is a safe and effective treatment. At ABT, all needling is performed by qualified clinical therapists using sterile, single-use needles in a clinical environment.",
  },
  {
    q: "Where can I get acupuncture and dry needling in Kampala?",
    a: "Activate Body Therapy offers acupuncture and dry needling at our clinics in Nakasero, Naguru, and Entebbe. Our therapists are experienced in treating a wide range of conditions using both techniques.",
  },
];

const Acupuncture = () => {
  return (
    <Layout>
      <Helmet>
        <title>Acupuncture & Dry Needling in Kampala | Activate Body Therapy</title>
        <meta
          name="description"
          content="Expert acupuncture and dry needling in Kampala at Activate Body Therapy. Effective treatment for chronic pain, headaches, back pain, muscle tension and sports injuries. Book today."
        />
        <meta
          name="keywords"
          content="acupuncture Kampala, dry needling Kampala, acupuncture clinic Kampala, trigger point therapy Kampala, needling therapy Kampala, pain relief Kampala, headache treatment Kampala"
        />
        <link
          rel="canonical"
          href="https://www.activatebodytherapy.com/acupuncture-dry-needling"
        />
        <meta
          property="og:title"
          content="Acupuncture & Dry Needling in Kampala | Activate Body Therapy"
        />
        <meta
          property="og:description"
          content="Expert acupuncture and dry needling in Kampala. Chronic pain, headaches, back pain and sports injuries treated at Activate Body Therapy."
        />
        <meta
          property="og:url"
          content="https://www.activatebodytherapy.com/acupuncture-dry-needling"
        />
      </Helmet>

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${needlingImg})` }}
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
              Clinical Services · Kampala
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
              Acupuncture & Dry Needling{" "}
              <span className="text-white/90">in Kampala</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto drop-shadow-lg">
              Effective needle therapy for pain management, muscle tension, and
              functional restoration — delivered by experienced clinical
              therapists at our Kampala clinics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="gap-2 bg-usawa-green hover:bg-usawa-green/90 text-white"
              >
                <Link to="/contact">
                  <Calendar className="w-5 h-5" />
                  Book a Consultation
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="gap-2 border-white text-white hover:bg-white/10"
              >
                <a href="tel:+256706611166">
                  <Phone className="w-5 h-5" />
                  Call Us Now
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Acupuncture vs Dry Needling */}
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
              Acupuncture vs Dry Needling
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Both therapies use fine needles to relieve pain and restore
              function — but they work in different ways. At ABT, we offer both.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {differences.map((item, index) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ delay: index * 0.1 }}
                className="bg-muted/30 rounded-2xl p-8"
              >
                <h3 className="font-serif text-2xl font-bold text-usawa-green mb-4">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-usawa-green mb-4">
              Conditions We Treat
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Acupuncture and dry needling are effective for a wide range of
              pain and musculoskeletal conditions.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {conditions.map((condition) => (
              <motion.div
                key={condition}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-background rounded-xl p-4 flex items-center gap-3"
              >
                <div className="w-5 h-5 rounded-full bg-usawa-green/10 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-usawa-green" />
                </div>
                <span className="text-sm text-foreground">{condition}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
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
              Benefits of Needling Therapy
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ delay: index * 0.1 }}
                className="bg-muted/30 rounded-2xl p-6"
              >
                <h3 className="font-serif text-lg font-bold text-usawa-green mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {benefit.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image split */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <div className="rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
                <img
                  src={rehabImg}
                  alt="Acupuncture and dry needling treatment at ABT Kampala"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-usawa-green mb-6">
                Why Choose ABT for Needling Therapy in Kampala?
              </h2>
              <ul className="space-y-4">
                {[
                  "Qualified clinical therapists trained in both acupuncture and dry needling",
                  "Sterile, single-use needles in a clean clinical environment",
                  "Personalised treatment plan based on thorough assessment",
                  "Integrated with physiotherapy and rehabilitation programmes",
                  "Non-pharmaceutical approach to pain management",
                  "Three conveniently located clinics across Kampala and Entebbe",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-usawa-green/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-usawa-green" />
                    </div>
                    <span className="text-sm text-foreground">{point}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button
                  asChild
                  className="bg-usawa-green hover:bg-usawa-green/90 text-white gap-2"
                >
                  <Link to="/contact">
                    Book a Session
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Locations */}
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
              Our Clinics in Kampala
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { branch: "Nakasero", address: "Plot 12, Kyadondo Road, Nakasero, Kampala", hours: "Mon–Sun: 8:00am – 8:00pm" },
              { branch: "Naguru", address: "Naguru, Kampala", hours: "Mon–Sun: 8:00am – 8:00pm" },
              { branch: "Entebbe", address: "Hemingway's Hotel, Entebbe", hours: "Mon–Sun: 8:00am – 8:00pm" },
            ].map((loc) => (
              <motion.div
                key={loc.branch}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-muted/30 rounded-2xl p-6 text-center"
              >
                <h3 className="font-serif text-xl font-bold text-usawa-green mb-2">{loc.branch}</h3>
                <p className="text-sm text-muted-foreground mb-2">{loc.address}</p>
                <p className="text-sm text-muted-foreground">{loc.hours}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-muted/30">
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
                className="bg-background rounded-2xl p-6"
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
              Book Acupuncture or Dry Needling in Kampala
            </h2>
            <p className="text-muted-foreground mb-8">
              Book a consultation at our Nakasero, Naguru, or Entebbe clinic
              and take the first step toward effective pain relief.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-usawa-green hover:bg-usawa-green/90 text-white gap-2"
            >
              <Link to="/contact">
                Book Your Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Acupuncture;
