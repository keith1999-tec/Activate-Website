import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, Phone, Check, ArrowRight } from "lucide-react";
import neuroImg from "@/assets/neuro.jpg";
import rehabImg from "@/assets/rehab.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const conditions = [
  "Chronic back and neck pain",
  "Repetitive strain injuries",
  "Tension headaches and migraines",
  "Sciatica and nerve compression",
  "Postural imbalances",
  "Fibromyalgia",
  "Sports-related muscle dysfunction",
  "Work-related musculoskeletal disorders",
];

const benefits = [
  {
    title: "Trigger Point Release",
    desc: "Targets and releases hyperirritable muscle knots that cause referred pain and restricted movement throughout the body.",
  },
  {
    title: "Improved Blood Circulation",
    desc: "Stimulates blood flow to affected tissues, accelerating healing and reducing inflammation in chronically tight muscles.",
  },
  {
    title: "Nerve Compression Relief",
    desc: "Addresses muscular tension that compresses nerves, relieving radiating pain, numbness, and tingling sensations.",
  },
  {
    title: "Postural Correction",
    desc: "Identifies and corrects dysfunctional movement patterns and postural imbalances that contribute to chronic pain.",
  },
  {
    title: "Repetitive Strain Treatment",
    desc: "Effective for treating injuries caused by repetitive movements at work or in sport, restoring function and preventing recurrence.",
  },
  {
    title: "Holistic Pain Management",
    desc: "Addresses the root cause of pain rather than masking symptoms, providing lasting relief without pharmaceutical dependency.",
  },
];

const faqs = [
  {
    q: "What is neuromuscular therapy?",
    a: "Neuromuscular therapy (NMT) is a specialised form of manual therapy that addresses chronic muscular and nervous system conditions by targeting dysfunctional muscle patterns, trigger points, and nerve compression. It is one of the most effective non-pharmaceutical approaches to chronic pain management.",
  },
  {
    q: "Is neuromuscular therapy painful?",
    a: "Some pressure is applied to trigger points during treatment, which may cause brief discomfort — often described as a 'good pain' that releases tension. Your therapist will always work within your comfort level and adjust pressure as needed.",
  },
  {
    q: "How many sessions will I need?",
    a: "This depends on the severity and duration of your condition. Many clients notice significant improvement after 3–6 sessions. Your therapist will assess your progress and adjust the treatment plan accordingly.",
  },
  {
    q: "How is neuromuscular therapy different from regular massage?",
    a: "Unlike relaxation massage, neuromuscular therapy is clinically targeted. It focuses on specific dysfunctional muscle patterns, trigger points, and nerve pathways — making it significantly more effective for chronic pain and musculoskeletal dysfunction.",
  },
  {
    q: "Where can I get neuromuscular therapy in Kampala?",
    a: "Activate Body Therapy offers neuromuscular therapy at our clinics in Nakasero, Naguru, and Entebbe. We are currently the leading provider of neuromuscular therapy in Kampala.",
  },
];

const NeuromuscularTherapy = () => {
  return (
    <Layout>
      <Helmet>
        <title>Neuromuscular Therapy in Kampala | Pain Management | Activate Body Therapy</title>
        <meta
          name="description"
          content="Kampala's leading neuromuscular therapy and pain management clinic. Expert treatment for chronic pain, trigger points, nerve compression and postural imbalances at Activate Body Therapy."
        />
        <meta
          name="keywords"
          content="neuromuscular therapy Kampala, pain management Kampala, trigger point therapy Kampala, chronic pain treatment Kampala, neuromuscular pain Kampala, muscle therapy Kampala"
        />
        <link
          rel="canonical"
          href="https://www.activatebodytherapy.com/neuromuscular-therapy"
        />
        <meta
          property="og:title"
          content="Neuromuscular Therapy in Kampala | Activate Body Therapy"
        />
        <meta
          property="og:description"
          content="Kampala's leading neuromuscular therapy clinic. Chronic pain, trigger points, nerve compression and postural correction."
        />
        <meta
          property="og:url"
          content="https://www.activatebodytherapy.com/neuromuscular-therapy"
        />
      </Helmet>

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${neuroImg})` }}
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
              #1 Neuromuscular Therapy Clinic in Kampala
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
              Neuromuscular Therapy{" "}
              <span className="text-white/90">&amp; Pain Management in Kampala</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto drop-shadow-lg">
              Targeted treatment for chronic pain, trigger points, and nerve
              compression — addressing the root cause of your pain, not just the
              symptoms.
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

      {/* Intro */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-usawa-green mb-6">
              What is Neuromuscular Therapy?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Neuromuscular therapy (NMT) is a specialised form of manual
              therapy that targets the relationship between the nervous system
              and the muscles. It addresses chronic muscular conditions by
              identifying and treating dysfunctional muscle patterns, trigger
              points, and nerve compression that cause persistent pain.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              At Activate Body Therapy — Kampala's leading neuromuscular therapy
              clinic — our specialists use NMT as a cornerstone of our pain
              management approach, providing lasting relief without reliance on
              medication.
            </p>
          </motion.div>
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
              Neuromuscular therapy is effective for a wide range of chronic
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
              How Neuromuscular Therapy Helps
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our neuromuscular therapy approach targets multiple aspects of
              chronic pain and dysfunction simultaneously.
            </p>
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

      {/* Image + text */}
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
                  alt="Neuromuscular therapy treatment at ABT Kampala"
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
                Why Choose ABT for Neuromuscular Therapy in Kampala?
              </h2>
              <ul className="space-y-4">
                {[
                  "Ranked #1 for neuromuscular therapy in Kampala",
                  "Experienced clinical therapists with specialised NMT training",
                  "Personalised treatment plans based on thorough assessment",
                  "Non-pharmaceutical approach to chronic pain management",
                  "Three conveniently located clinics across Kampala",
                  "Integrated with physiotherapy and rehabilitation services",
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
              Get Relief from Chronic Pain in Kampala
            </h2>
            <p className="text-muted-foreground mb-8">
              Book a neuromuscular therapy consultation at our Nakasero, Naguru,
              or Entebbe clinic and take the first step toward lasting pain
              relief.
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

export default NeuromuscularTherapy;