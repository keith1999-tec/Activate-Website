import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, Phone, Check, ArrowRight } from "lucide-react";
import sportsImg from "@/assets/sport.jpg";
import rehabImg from "@/assets/rehab.jpg";
import fitnessImg from "@/assets/fitness.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const injuries = [
  "Muscle strains and tears",
  "Ligament sprains and tears",
  "Knee injuries (ACL, meniscus)",
  "Shoulder injuries and rotator cuff",
  "Ankle sprains and instability",
  "Tennis and golfer's elbow",
  "Shin splints and stress fractures",
  "Hamstring and groin injuries",
];

const services = [
  {
    title: "Sports Injury Assessment",
    desc: "Comprehensive evaluation of your injury, movement patterns, and biomechanics to develop an accurate diagnosis and targeted treatment plan.",
  },
  {
    title: "Manual Therapy",
    desc: "Hands-on techniques including joint mobilisation, soft tissue manipulation, and trigger point therapy to reduce pain and restore function.",
  },
  {
    title: "Rehabilitation Exercise",
    desc: "Progressive exercise programmes to rebuild strength, stability, and movement quality — tailored to your sport and position.",
  },
  {
    title: "Performance Enhancement",
    desc: "Beyond injury recovery — optimise your athletic performance through movement screening, strength conditioning, and sport-specific training.",
  },
  {
    title: "Injury Prevention",
    desc: "Identify and address movement dysfunctions before they become injuries, keeping you performing at your best year-round.",
  },
  {
    title: "Return to Sport Planning",
    desc: "Structured progression back to full training and competition, with clear milestones to ensure you return safely and confidently.",
  },
];

const faqs = [
  {
    q: "What is sports therapy?",
    a: "Sports therapy focuses on injury prevention, performance enhancement, and rehabilitation for athletes and active individuals of all levels. It combines manual therapy, exercise rehabilitation, and sport-specific training to return you to optimal performance safely.",
  },
  {
    q: "Do I need to be a professional athlete to use sports therapy?",
    a: "Not at all. Our sports therapy services are available to anyone who is physically active — whether you play weekend football, run marathons, or simply want to stay injury-free while exercising.",
  },
  {
    q: "How soon after an injury should I seek sports therapy?",
    a: "As soon as possible. Early intervention significantly improves recovery outcomes. We recommend booking a consultation within 48–72 hours of a sports injury, once initial swelling has begun to settle.",
  },
  {
    q: "How long does sports injury rehab take?",
    a: "Recovery time depends on the type and severity of injury. Minor strains may resolve in 2–4 weeks, while more complex injuries like ACL tears can take 6–12 months. Your therapist will give you a realistic timeline after assessment.",
  },
  {
    q: "Where can I get sports injury rehab in Kampala?",
    a: "Activate Body Therapy offers sports injury rehabilitation at our clinics in Nakasero, Naguru, and Entebbe. Our therapists have extensive experience treating athletes across all sports in Uganda.",
  },
];

const SportsTherapy = () => {
  return (
    <Layout>
      <Helmet>
        <title>Sports Injury Rehab in Kampala | Sports Therapy | Activate Body Therapy</title>
        <meta
          name="description"
          content="Expert sports injury rehabilitation in Kampala at Activate Body Therapy. Treatment for muscle strains, ligament injuries, knee pain and more. Return to sport faster with our specialist team."
        />
        <meta
          name="keywords"
          content="sports injury rehab Kampala, sports therapy Kampala, sports injury treatment Kampala, athlete rehabilitation Kampala, knee injury treatment Kampala, ACL rehab Kampala, sports physiotherapy Kampala"
        />
        <link
          rel="canonical"
          href="https://www.activatebodytherapy.com/sports-therapy"
        />
        <meta
          property="og:title"
          content="Sports Injury Rehab in Kampala | Activate Body Therapy"
        />
        <meta
          property="og:description"
          content="Expert sports injury rehabilitation in Kampala. Muscle strains, ligament injuries, knee pain and return to sport programmes."
        />
        <meta
          property="og:url"
          content="https://www.activatebodytherapy.com/sports-therapy"
        />
      </Helmet>

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${sportsImg})` }}
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
              Sports Injury Rehabilitation · Kampala
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
              Sports Injury Rehab{" "}
              <span className="text-white/90">in Kampala</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto drop-shadow-lg">
              Specialist sports therapy and injury rehabilitation to get you
              back to training and competition faster — with expert care at
              every step of your recovery.
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
              Kampala's Sports Injury Specialists
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              At Activate Body Therapy, our sports therapy team combines clinical
              expertise with a deep understanding of athletic performance. Whether
              you have suffered an acute injury or are dealing with a chronic
              condition, we provide evidence-based treatment to restore function
              and return you to the sport you love.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Our approach goes beyond injury management — we identify the
              underlying movement dysfunctions that caused the injury and address
              them, reducing your risk of re-injury and enhancing your long-term
              performance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Injuries */}
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
              Sports Injuries We Treat
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our sports therapy team treats a wide range of acute and chronic
              sports injuries across all disciplines.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {injuries.map((injury) => (
              <motion.div
                key={injury}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-background rounded-xl p-4 flex items-center gap-3"
              >
                <div className="w-5 h-5 rounded-full bg-usawa-green/10 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-usawa-green" />
                </div>
                <span className="text-sm text-foreground">{injury}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
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
              Our Sports Therapy Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive range of services to take you from injury through
              to full performance.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ delay: index * 0.1 }}
                className="bg-muted/30 rounded-2xl p-6"
              >
                <h3 className="font-serif text-lg font-bold text-usawa-green mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.desc}
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
                  alt="Sports injury rehabilitation at ABT Kampala"
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
                Our Rehabilitation Approach
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Every sports injury is different. Our therapists conduct a
                thorough assessment before designing a rehabilitation programme
                that matches your injury, fitness level, sport, and timeline
                for return to play.
              </p>
              <ul className="space-y-4">
                {[
                  "Thorough injury assessment and diagnosis",
                  "Personalised rehab programme design",
                  "Progressive loading and exercise progression",
                  "Sport-specific movement training",
                  "Clear return-to-sport milestones",
                  "Ongoing performance monitoring",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-usawa-green/10 flex items-center justify-center flex-shrink-0 mt-0.5">
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
              Sports Therapy Clinics in Kampala
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
              Recover Faster. Perform Better.
            </h2>
            <p className="text-muted-foreground mb-8">
              Book a sports injury consultation at our Nakasero, Naguru, or
              Entebbe clinic and get back to the sport you love.
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

export default SportsTherapy;