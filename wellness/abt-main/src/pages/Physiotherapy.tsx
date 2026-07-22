import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, Phone, Check, ArrowRight } from "lucide-react";
import physiotherapyImg from "@/assets/physiotherapy.jpg";
import rehabImg from "@/assets/rehab.jpg";
import clinicHeroImg from "@/assets/clinic-hero.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const conditions = [
  "Back and neck pain",
  "Sports injuries and muscle strains",
  "Post-surgical rehabilitation",
  "Joint pain and arthritis",
  "Sciatica and nerve pain",
  "Postural imbalances",
  "Work-related repetitive strain injuries",
  "Neurological conditions affecting movement",
];

const phases = [
  {
    phase: "Phase 1",
    title: "Acute Pain Management",
    duration: "4 Weeks · 3 sessions/week",
    focus: "Pain relief, inflammation reduction, and muscle alignment",
    points: [
      "Soft tissue manipulation to reduce inflammation",
      "Isometric exercises to prevent muscle atrophy",
      "Manual therapy and machine-assisted therapy",
    ],
  },
  {
    phase: "Phase 2",
    title: "Foundation & Strengthening",
    duration: "4 Weeks · 3 sessions/week",
    focus: "Muscle activation and functional strengthening",
    points: [
      "Strength training targeting core and lower back",
      "Proprioception and stability exercises",
      "12 physiotherapy + 12 rehabilitation sessions",
    ],
  },
  {
    phase: "Phase 3",
    title: "Transformation & Performance",
    duration: "12 Weeks · 3 sessions/week",
    focus: "Strength, mobility, balance, and functional performance",
    points: [
      "Strength training for core and supporting muscles",
      "Balance, coordination and proprioception exercises",
      "Cardio conditioning for agility and endurance",
    ],
  },
];

const faqs = [
  {
    q: "What conditions does physiotherapy treat?",
    a: "Physiotherapy at ABT treats a wide range of conditions including back pain, neck pain, sports injuries, post-surgical recovery, joint pain, sciatica, postural problems, and neurological conditions affecting movement.",
  },
  {
    q: "How many sessions will I need?",
    a: "The number of sessions depends on your condition and goals. After an initial consultation, your therapist will outline a personalised treatment plan. Most clients begin to see significant improvement within 4–8 weeks.",
  },
  {
    q: "Is physiotherapy in Kampala expensive?",
    a: "At ABT, physiotherapy is priced on a consultation basis to ensure you only pay for what your condition requires. Contact us for current pricing or book a consultation to find out what your treatment plan would involve.",
  },
  {
    q: "Where are your physiotherapy clinics in Kampala?",
    a: "We have physiotherapy clinics in Nakasero, Naguru, and Entebbe (at Hemingway's Hotel). All three branches offer the full range of physiotherapy services.",
  },
  {
    q: "Do I need a referral to see a physiotherapist?",
    a: "No referral is needed. You can book directly with us by calling or filling in our contact form.",
  },
];

const Physiotherapy = () => {
  return (
    <Layout>
      <Helmet>
        <title>Physiotherapy in Kampala | Activate Body Therapy</title>
        <meta
          name="description"
          content="Expert physiotherapy in Kampala at Activate Body Therapy. Treatment for back pain, sports injuries, post-surgical rehab and more. Clinics in Nakasero, Naguru and Entebbe."
        />
        <meta
          name="keywords"
          content="physiotherapy Kampala, physiotherapist Kampala, back pain treatment Kampala, sports injury physiotherapy Kampala, rehabilitation Kampala, physio clinic Kampala, Nakasero physiotherapy"
        />
        <link
          rel="canonical"
          href="https://www.activatebodytherapy.com/physiotherapy"
        />
        <meta
          property="og:title"
          content="Physiotherapy in Kampala | Activate Body Therapy"
        />
        <meta
          property="og:description"
          content="Expert physiotherapy in Kampala. Back pain, sports injuries, post-surgical rehab. Clinics in Nakasero, Naguru and Entebbe."
        />
        <meta
          property="og:url"
          content="https://www.activatebodytherapy.com/physiotherapy"
        />
      </Helmet>

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${clinicHeroImg})` }}
        />
        <div className="absolute inset-0 bg-black/50" />
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
              Physiotherapy in{" "}
              <span className="text-white/90">Kampala</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto drop-shadow-lg">
              Expert physiotherapy treatment for pain relief, injury recovery,
              and restored movement — delivered by experienced therapists at our
              Kampala clinics.
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
              What is Physiotherapy?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Physiotherapy focuses on restoring movement and physical function
              for individuals affected by injury, illness, disability, or
              post-surgical conditions. At Activate Body Therapy in Kampala, our
              physiotherapists use evidence-based techniques to relieve pain,
              improve mobility, and strengthen the body.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Beyond treating the immediate condition, we address the root
              causes of pain and dysfunction — reducing the risk of future
              injuries and supporting long-term physical health.
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
              Our physiotherapy team in Kampala treats a wide range of
              musculoskeletal, neurological, and post-surgical conditions.
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

      {/* Treatment image split */}
      <section className="py-20 bg-background">
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
                  src={physiotherapyImg}
                  alt="Physiotherapy session at Activate Body Therapy Kampala"
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
                Our Approach to Physiotherapy in Kampala
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Every client at ABT begins with a comprehensive assessment.
                Our physiotherapists take time to understand your condition,
                lifestyle, and goals before developing a personalised treatment
                plan.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Treatment combines hands-on manual therapy, targeted exercises,
                and where appropriate, machine-assisted therapy — all tailored
                to your stage of recovery.
              </p>
              <ul className="space-y-3">
                {[
                  "Comprehensive initial assessment",
                  "Personalised treatment plans",
                  "Manual and machine-assisted therapy",
                  "Exercise-based rehabilitation",
                  "Progress tracking and plan adjustment",
                  "Referral to Health Club for maintenance",
                ].map((point) => (
                  <li key={point} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-usawa-green/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-usawa-green" />
                    </div>
                    <span className="text-sm text-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Treatment Phases */}
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
              Treatment Phases
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our structured three-phase approach ensures you progress safely
              from pain relief to full functional recovery.
            </p>
          </motion.div>
          <div className="space-y-8 max-w-4xl mx-auto">
            {phases.map((p, index) => (
              <motion.div
                key={p.phase}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-background rounded-2xl p-6 md:flex md:gap-6"
              >
                <div className="md:w-1/4 mb-4 md:mb-0">
                  <span className="text-xs font-medium text-usawa-green uppercase tracking-wider">
                    {p.phase}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-foreground mt-1">
                    {p.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-2">
                    {p.duration}
                  </p>
                </div>
                <div className="md:w-3/4">
                  <p className="text-sm font-medium text-foreground mb-3">
                    Focus: {p.focus}
                  </p>
                  <ul className="space-y-2">
                    {p.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <Check className="w-3 h-3 text-usawa-green flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
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
              Physiotherapy Clinics in Kampala
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We have three conveniently located physiotherapy clinics across
              Kampala and Entebbe.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                branch: "Nakasero",
                address: "Plot 12, Kyadondo Road, Nakasero, Kampala",
                hours: "Mon–Sun: 8:00am – 8:00pm",
              },
              {
                branch: "Naguru",
                address: "Naguru, Kampala",
                hours: "Mon–Sun: 8:00am – 8:00pm",
              },
              {
                branch: "Entebbe",
                address: "Hemingway's Hotel, Entebbe",
                hours: "Mon–Sun: 8:00am – 8:00pm",
              },
            ].map((loc) => (
              <motion.div
                key={loc.branch}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-muted/30 rounded-2xl p-6 text-center"
              >
                <h3 className="font-serif text-xl font-bold text-usawa-green mb-2">
                  {loc.branch}
                </h3>
                <p className="text-sm text-muted-foreground mb-2">
                  {loc.address}
                </p>
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
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {faq.a}
                </p>
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
              Book a Physiotherapy Session in Kampala
            </h2>
            <p className="text-muted-foreground mb-8">
              Take the first step toward pain-free movement. Book a consultation
              at our Nakasero, Naguru, or Entebbe clinic today.
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

export default Physiotherapy;