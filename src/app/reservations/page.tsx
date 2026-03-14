"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ContactFaq from '@/components/sections/contact/ContactFaq';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Calendar } from 'lucide-react';

export default function ReservationsPage() {
  const navItems = [
    { name: "Home", id: "home" },
    { name: "Dining", id: "dining" },
    { name: "Menu", id: "menu" },
    { name: "Events", id: "events" },
    { name: "About", id: "about" },
    { name: "Contact", id: "contact" },
  ];

  const footerColumns = [
    {
      title: "Restaurant",
      items: [
        { label: "Menu", href: "/menu" },
        { label: "Dining Experiences", href: "/dining-experiences" },
        { label: "Events & Celebrations", href: "/about" },
        { label: "Gift Cards", href: "#" },
      ],
    },
    {
      title: "Contact",
      items: [
        { label: "📞 08071 203 040", href: "tel:08071203040" },
        { label: "📍 Courtyard by Marriott", href: "#" },
        { label: "Sarjapur Main Road, Outer Ring Rd", href: "#" },
        { label: "Bengaluru 560103", href: "#" },
      ],
    },
    {
      title: "Company",
      items: [
        { label: "About Us", href: "/about" },
        { label: "Reservations", href: "/reservations" },
        { label: "Careers", href: "#" },
        { label: "Contact", href: "#" },
      ],
    },
    {
      title: "Legal",
      items: [
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
        { label: "Sitemap", href: "#" },
      ],
    },
  ];

  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="background-highlight"
      borderRadius="pill"
      contentWidth="compact"
      sizing="mediumLargeSizeLargeTitles"
      background="noise"
      cardStyle="solid"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="solid"
      headingFontWeight="bold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          brandName="MoMo Café"
          navItems={navItems}
        />
      </div>

      <div id="contact-faq" data-section="contact-faq" className="bg-stone-100">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <ContactFaq
            ctaTitle="Ready to Reserve?"
            ctaDescription="Join us for an unforgettable dining experience. Secure your table today."
            ctaButton={{
              text: "Reserve Now",
              href: "/reservations",
            }}
            ctaIcon={Calendar}
            useInvertedBackground={false}
            animationType="slide-up"
            faqs={[
              {
                id: "1",
                title: "What are your operating hours?",
                content: "MoMo Café is open 24 hours a day, 7 days a week. We're always ready to welcome you for breakfast, lunch, dinner, or late-night cravings.",
              },
              {
                id: "2",
                title: "How do I make a reservation?",
                content: "You can reserve a table online through our website, call us at 08071 203 040, or visit us in person at Courtyard by Marriott Bengaluru Outer Ring Road.",
              },
              {
                id: "3",
                title: "Is MoMo Café vegetarian-friendly?",
                content: "Absolutely! Our buffet features an extensive vegetarian section with Indian, Continental, and Asian options. We cater to all dietary preferences.",
              },
              {
                id: "4",
                title: "Do you offer private events and celebrations?",
                content: "Yes, we specialize in private celebrations, corporate events, and family gatherings. Contact us for customized event packages and pricing.",
              },
              {
                id: "5",
                title: "What payment methods do you accept?",
                content: "We accept all major credit cards, debit cards, digital wallets, and cash. UPI payments are also available for your convenience.",
              },
              {
                id: "6",
                title: "Is parking available?",
                content: "Yes, we offer valet parking, free parking, and paid parking options. Our large parking facility accommodates all guests comfortably.",
              },
            ]}
          />
        </div>
      </div>

      <div id="footer-home" data-section="footer-home" className="bg-stone-900 text-stone-50">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <FooterBase
            logoText="MoMo Café"
            copyrightText="© 2025 MoMo Café at Courtyard by Marriott Bengaluru. All rights reserved."
            columns={footerColumns}
          />
        </div>
      </div>
    </ThemeProvider>
  );
}