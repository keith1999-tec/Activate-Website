import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock, Send, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/layout/Layout";
import { services as servicesData } from "@/pages/Services";
import emailjs from '@emailjs/browser';
import { locations, getLocation, entebbeServiceTitles } from "@/data/locations";

const serviceOptions = [
  ...servicesData.map((service) => service.title),
  ...servicesData.flatMap((service) => service.treatments?.map((t) => t.title) ?? []),
  "Other",
];


// Helper: Map service title to location(s)
const getServiceLocations = (serviceTitle) => {
  const service = servicesData.find(s => s.title === serviceTitle);
  if (!service) return [];
  if (!service.section) return [];
  const section = service.section.toLowerCase();
  const result = [];
  if (section.includes("clinical")) result.push("clinic");
  if (section.includes("health")) result.push("health club");
  if (result.length && entebbeServiceTitles.includes(serviceTitle)) result.push("entebbe");
  return result;
};

const Contact = () => {
  const { toast } = useToast();
  const [searchParams] = useSearchParams();
  const initialLocation = getLocation(searchParams.get("location") ?? "")?.id ?? "";
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    location: initialLocation,
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [locationLocked, setLocationLocked] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.location) {
      toast({
        title: "Location Required",
        description: "Please select a location (Nakasero, Naguru or Entebbe).",
        variant: "destructive",
      });
      return;
    }
    setIsSubmitting(true);

    const selectedLocation = getLocation(formData.location);
    const whatsappNumber = selectedLocation?.whatsapp || "256708661166";
    const text = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService: ${formData.service}\nPreferred date: ${formData.date}\nLocation: ${selectedLocation?.name ?? formData.location}\nMessage: ${formData.message}`;
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;

    window.open(whatsappUrl, "_blank");

    // Send email using EmailJS
    const toEmail = selectedLocation?.email || "activatebodytherapy@gmail.com";
    const templateParams = {
      to_email: toEmail,
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      service: formData.service,
      date: formData.date,
      location: selectedLocation?.name ?? formData.location,
      message: formData.message,
    };

    try {
      await emailjs.send(
        'your_service_id', // Replace with your EmailJS service ID
        'your_template_id', // Replace with your EmailJS template ID
        templateParams,
        'your_public_key' // Replace with your EmailJS public key
      );
      toast({
        title: "Booking Request Sent",
        description: "Your request has been sent via WhatsApp and email successfully.",
      });
    } catch (error) {
      console.error('Email send failed:', error);
      toast({
        title: "Email Send Failed",
        description: "WhatsApp sent, but email failed. Please try again or contact us directly.",
        variant: "destructive",
      });
    }

    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      date: "",
      location: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // When service changes, auto-set location if only one location is available
  const handleServiceChange = (value) => {
    setFormData((prev) => ({ ...prev, service: value }));
    const serviceLocations = getServiceLocations(value);
    if (serviceLocations.length === 1) {
      setFormData((prev) => ({ ...prev, location: serviceLocations[0] }));
      setLocationLocked(true);
    } else {
      // Keep the chosen branch if it still offers the new service.
      setFormData((prev) => ({
        ...prev,
        location: !serviceLocations.length || serviceLocations.includes(prev.location) ? prev.location : "",
      }));
      setLocationLocked(false);
    }
  };

  const serviceLocations = getServiceLocations(formData.service);
  const locationOptions = serviceLocations.length
    ? locations.filter((loc) => serviceLocations.includes(loc.id))
    : locations;

  return (
    <Layout>
      <Helmet>
        <title>Activate Body Therapy | Physiotherapy & Wellness Clinic in Kampala</title>
        <meta name="description" content="Kampala's leading physiotherapy and wellness clinic. Expert treatment for back pain, sports injuries, neuromuscular therapy, chiropractic, IV therapy and holistic wellness. Book today." />
        <meta name="keywords" content="physiotherapy Kampala, back pain treatment Kampala, sports injury rehab Kampala, wellness clinic Kampala, neuromuscular therapy Kampala, chiropractic Kampala, IV therapy Kampala" />
        <link rel="canonical" href="https://activatebodytherapy.com" />
        <meta property="og:title" content="Activate Body Therapy | Physiotherapy & Wellness Clinic in Kampala" />
        <meta property="og:description" content="Kampala's leading physiotherapy and wellness clinic. Back pain, sports injuries, rehabilitation and holistic wellness." />
        <meta property="og:url" content="https://activatebodytherapy.com" />
      </Helmet>
      {/* Hero Section */}
      <section className="relative pt-28 pb-32 md:pt-32 md:pb-36 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/contact.jpg"
            alt="Contact Background"
            loading="lazy"
            className="w-full h-full object-cover object-top"
            style={{ objectPosition: '50% 22%' }}
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-slate-100/20 backdrop-blur-sm rounded-full text-sm font-medium text-white mb-6">
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
              Let's Start Your
              <br />
              <span className="text-primary">Wellness Journey</span>
            </h1>
            <p className="text-lg text-white/85 leading-relaxed">
              Ready to feel your best? Get in touch to book an appointment or
              ask any questions. We're here to help you achieve your wellness
              goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-8">
                Get in Touch
              </h2>

              <div className="space-y-8 mb-10">
                <a
                  href="mailto:activatebodytherapy@gmail.com"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <p className="text-sm text-muted-foreground">
                      activatebodytherapy@gmail.com
                    </p>
                  </div>
                </a>

                {locations.map((loc) => (
                  <div key={loc.id}>
                    <h3 className="font-semibold text-usawa-green mb-3">
                      <Link to={loc.path} className="hover:underline">
                        {loc.name}
                      </Link>
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-3">
                        <MapPin className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                        {loc.address}
                      </li>
                      <li className="flex items-start gap-3">
                        <Phone className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                        <a href={loc.phoneHref} className="hover:text-primary">
                          {loc.phone}
                        </a>
                      </li>
                      <li className="flex items-start gap-3">
                        <Clock className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                        {loc.hours}
                      </li>
                    </ul>
                  </div>
                ))}
              </div>

              {/* Maps Section */}
              <div className="space-y-4">
                {locations.map((loc) => (
                  <div key={loc.id}>
                    <h3 className="font-semibold text-usawa-green mb-2">{loc.name}</h3>
                    <div className="rounded-2xl overflow-hidden h-48">
                      <iframe
                        src={loc.mapEmbedUrl}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title={`${loc.name} Location`}
                      />
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">{loc.mapLabel}</p>
                  </div>
                ))}
              </div>
            </div>


            {/* Booking Form */}
            <div className="lg:col-span-3">
              <div className="bg-card rounded-2xl p-8 md:p-10 shadow-medium">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-2">
                  Book an Appointment
                </h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and we'll get back to you within 24
                  hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder=""
                        required
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder=""
                        required
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder=""
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="date">Preferred Date</Label>
                      <Input
                        id="date"
                        name="date"
                        type="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Service of Interest</Label>
                    <Select
                      value={formData.service}
                      onValueChange={handleServiceChange}
                    >
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {serviceOptions.map((service) => (
                          <SelectItem key={service} value={service}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location">Choose Location *</Label>
                    <Select
                      value={formData.location}
                      onValueChange={(value) => setFormData((prev) => ({ ...prev, location: value }))}
                      required
                      disabled={locationLocked}
                    >
                      <SelectTrigger className="h-12" disabled={locationLocked}>
                        <SelectValue placeholder="Select a location" />
                      </SelectTrigger>
                      <SelectContent>
                        {locationOptions.map((loc) => (
                          <SelectItem key={loc.id} value={loc.id}>
                            {loc.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your goals, any specific concerns, or questions you have..."
                      rows={5}
                      className="resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Booking Request
                        <Send size={18} />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-20 md:py-28 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
              Have Questions?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Check out our frequently asked questions or give us a call. We're
              always happy to help!
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
              {locations.map((loc) => (
                <Button key={loc.id} asChild variant="outline" size="lg">
                  <a href={loc.phoneHref}>
                    <Phone size={18} />
                    {loc.shortName}: {loc.phone}
                  </a>
                </Button>
              ))}
              <Button asChild variant="ghost" size="lg">
                <Link to="/services">
                  View Services
                  <ArrowRight size={18} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
