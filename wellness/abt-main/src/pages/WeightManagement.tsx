import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, Phone, Check, ArrowRight } from "lucide-react";
import weightImg from "@/assets/weight.jpg";
import nutritionImg from "@/assets/nutrition.jpg";
import fitnessImg from "@/assets/fitness.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const pillars = [
  {
    title: "Balanced Nutrition",
    description:
      "Our nutrition specialists design personalised meal plans that fuel your body, support fat loss, and sustain energy — without crash dieting or extreme restriction.",
    image: nutritionImg,
    benefits: [
      "Personalised meal planning",
      "Macro and micronutrient guidance",
      "Sustainable eating habits",
      "Support for dietary preferences",
    ],
  },
  {
    title: "Regular Physical Activity",
    description:
      "We combine structured exercise programming with rehabilitation techniques to improve body composition, build lean muscle, and increase metabolic rate safely.",
    image: fitnessImg,
    benefits: [
      "Tailored exercise programs",
      "Strength and cardio conditioning",
      "Movement coaching",
      "Progress tracking",
    ],
  },
  {
    title: "Mindful Lifestyle Choices",
    description:
      "Weight management is more than diet and exercise. We address sleep, stress, and behavioural patterns that affect metabolism and long-term weight control.",
    image: weightImg,
    benefits: [
      "Lifestyle habit coaching",
      "Stress and sleep support",
      "Behavioural change strategies",
      "Long-term accountability",
    ],
  },
];

const faqs = [
  {
    q: "Who is weight management therapy suitable for?",
    a: "Our programme is suitable for adults at any fitness level — whether you want to lose weight, manage a chronic condition, or simply improve your body composition and energy levels.",
  },
  {
    q: "How is this different from a regular gym or diet plan?",
    a: "ABT's approach is clinically guided. Our team combines physiotherapy, nutrition, and lifestyle coaching so that your programme is safe, medically informed, and built around your specific health profile.",
  },
  {
    q: "How long does it take to see results?",
    a: "Most clients notice changes in energy and body composition within 4–6 weeks. Sustainable weight loss typically progresses at 0.5–1 kg per week when following a structured plan.",
  },
  {
    q: "Is it available at all ABT branches?",
    a: "Yes — weight management consultations are available at our Nakasero, Naguru, and Entebbe branches in Kampala.",
  },
];

const WeightManagement = () => {
  return (
    <Layout>
      <Helmet>
        <title>Weight Management in Kampala | Activate Body Therapy</title>
        <meta
          name="description"
          content="Holistic weight management programmes in Kampala at Activate Body Therapy. Personalised nutrition plans, exercise coaching and lifestyle support for sustainable, healthy weight loss."
        />
        <meta
          name="keywords"
          content="weight management Kampala, weight loss Kampala, nutrition programme Kampala, healthy weight Kampala, body composition Kampala, diet plan Kampala, fitness coaching Kampala"
        />
        <link
          rel="canonical"
          href="https://www.activatebodytherapy.com/weight-management"
        />
        <meta
          property="og:title"
          content="Weight Management in Kampala | Activate Body Therapy"
        />
        <meta
          property="og:description"
          content="Holistic weight management in Kampala. Nutrition plans, exercise coaching and lifestyle support at Activate Body Therapy."
        />
        <meta
          property="og:url"
          content="https://www.activatebodytherapy.com/weight-management"
        />
      </Helmet>

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transform scale-105"
          style={{ backgroundImage: `url(${weightImg})` }}
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
              Clinical & Health Club Services
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
              Weight Management in{" "}
              <span className="text-white/90">Kampala</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto drop-shadow-lg">
              A holistic, clinically guided approach to achieving and maintaining
              a healthy weight — through balanced nutrition, structured exercise,
              and sustainable lifestyle habits.
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
              A Sustainable Approach to Healthy Weight
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              At Activate Body Therapy in Kampala, we believe that sustainable
              weight management goes beyond calorie counting. Our programme
              combines clinical expertise in physiotherapy, nutrition science,
              and behavioural coaching to create a personalised plan that works
              for your body, lifestyle, and goals.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Whether you are managing obesity, recovering from injury, or
              simply looking to improve your health and energy, our team is here
              to guide you every step of the way.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-usawa-green mb-4">
              Our Three-Pillar Approach
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Lasting weight management requires addressing nutrition, movement,
              and mindset together — not in isolation.
            </p>
          </motion.div>

          <div className="space-y-20">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
                    <img
                      src={pillar.image}
                      alt={pillar.title}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <span className="text-sm font-medium text-usawa-green uppercase tracking-wider">
                    Pillar {index + 1}
                  </span>
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mt-2 mb-4">
                    {pillar.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                  <ul className="space-y-3">
                    {pillar.benefits.map((b) => (
                      <li key={b} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-usawa-green/10 flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-usawa-green" />
                        </div>
                        <span className="text-sm text-foreground">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-usawa-green mb-4">
              What to Expect
            </h2>
            <p className="text-muted-foreground">
              Your weight management journey at ABT follows a structured,
              personalised process.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Initial Consultation",
                desc: "A comprehensive assessment of your health history, body composition, lifestyle, and goals.",
              },
              {
                step: "02",
                title: "Personalised Plan",
                desc: "A tailored programme combining nutrition guidance, exercise, and lifestyle coaching designed for your needs.",
              },
              {
                step: "03",
                title: "Ongoing Support",
                desc: "Regular check-ins, progress tracking, and plan adjustments to keep you on track toward your goals.",
              },
            ].map((item) => (
              <motion.div
                key={item.step}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-muted/30 rounded-2xl p-8 text-center"
              >
                <div className="text-4xl font-bold text-usawa-green/30 mb-4">
                  {item.step}
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.desc}
                </p>
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
              Start Your Weight Management Journey in Kampala
            </h2>
            <p className="text-muted-foreground mb-8">
              Book a consultation at our Nakasero, Naguru, or Entebbe clinic
              and take the first step toward a healthier, stronger you.
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

export default WeightManagement;