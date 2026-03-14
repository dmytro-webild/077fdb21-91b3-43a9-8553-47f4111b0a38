"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FooterBase from '@/components/sections/footer/FooterBase';
import Link from "next/link";
import { Heart, Award } from "lucide-react";

export default function AboutPage() {
  const navItems = [
    { name: "Home", id: "home" },
    { name: "Dining", id: "dining" },
    { name: "Menu", id: "menu" },
    { name: "Events", id: "events" },
    { name: "About", id: "about" },
    { name: "Contact", id: "contact" },
  ];

  const navItemsWithRoutes = [
    { name: "Home", id: "home", route: "/" },
    { name: "Dining", id: "dining", route: "/" },
    { name: "Menu", id: "menu", route: "/menu" },
    { name: "Events", id: "events", route: "/" },
    { name: "About", id: "about", route: "/about" },
    { name: "Contact", id: "contact", route: "/" },
  ];

  const footerColumns = [
    {
      title: "Restaurant",
      items: [
        { label: "Menu", href: "/menu" },
        { label: "Dining Experiences", href: "/" },
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
        { label: "Reservations", href: "#" },
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
      {/* Navbar */}
      <div id="nav" data-section="nav" className="sticky top-0 z-50 bg-white">
        <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
          <Link href="/" className="text-2xl font-bold text-stone-900">
            MoMo Café
          </Link>
          <div className="hidden md:flex gap-8 items-center">
            {navItemsWithRoutes.map((item) => (
              <Link
                key={item.id}
                href={item.route}
                className="text-stone-700 hover:text-stone-900 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </nav>
      </div>

      {/* About Section */}
      <div id="experience-about" data-section="experience-about" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <TextSplitAbout
            title="Our Story & Vision"
            description={[
              "MoMo Café is Bengaluru's premier all-day dining destination, nestled within the prestigious Courtyard by Marriott on Sarjapur Main Road. Since opening, we've become synonymous with luxury, hospitality, and culinary excellence.",
              "Our vision is simple yet profound: to create unforgettable moments through exceptional food, impeccable service, and a warm, welcoming atmosphere. Whether you're here for a business lunch, family celebration, or casual dinner, every guest leaves with memories, not just a satisfied appetite.",
            ]}
            useInvertedBackground={false}
            buttons={[
              {
                text: "Reserve Your Experience",
                href: "#",
              },
            ]}
            buttonAnimation="slide-up"
          />
        </div>
      </div>

      {/* Guest Testimonials */}
      <div id="testimonials-section" data-section="testimonials-section" className="bg-stone-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <TestimonialCardFive
            title="Voices From Our Community"
            description="Hear directly from guests who've experienced the magic of dining at MoMo Café."
            tag="Guest Testimonials"
            tagIcon={Heart}
            tagAnimation="slide-up"
            textboxLayout="default"
            useInvertedBackground={false}
            testimonials={[
              {
                id: "1",
                name: "Michelle P",
                date: "3 weeks ago",
                title: "Elegant Atmosphere",
                quote: "Bright, airy, classy atmosphere that makes you want to sit and stay. Perfect for a relaxed lunch with friends.",
                tag: "Atmosphere",
                avatarSrc: "http://img.b2bpic.net/free-photo/close-up-smiley-people-together_23-2149152898.jpg",
              },
              {
                id: "2",
                name: "Ajit Kumar",
                date: "2 weeks ago",
                title: "Live Entertainment",
                quote: "A delightful lunch buffet with huge variety and live singing creating a lively atmosphere. My family loved it!",
                tag: "Entertainment",
                avatarSrc: "http://img.b2bpic.net/free-photo/side-view-friends-restaurant_23-2148395398.jpg",
              },
              {
                id: "3",
                name: "Prabhakar Thota",
                date: "1 week ago",
                title: "Culinary Excellence",
                quote: "Live cooking stations and incredible desserts. A wonderful dining experience that exceeds expectations.",
                tag: "Food Quality",
                avatarSrc: "http://img.b2bpic.net/free-photo/young-man-women-having-dinner-together_23-2148454093.jpg",
              },
              {
                id: "4",
                name: "V Raja",
                date: "5 days ago",
                title: "Family Celebration",
                quote: "Amazing lunch buffet with family. The magician and live singer made it unforgettable. Booking again soon!",
                tag: "Events",
                avatarSrc: "http://img.b2bpic.net/free-photo/couples-celebrating-birthday_23-2149891035.jpg",
              },
            ]}
          />
        </div>
      </div>

      {/* Social Proof Section */}
      <div id="social-proof-partners" data-section="social-proof-partners" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <SocialProofOne
            title="Trusted & Celebrated"
            description="MoMo Café is recognized as Bengaluru's leading luxury buffet destination by guests, critics, and industry peers."
            tag="Restaurant Partner"
            tagIcon={Award}
            tagAnimation="slide-up"
            names={[
              "Courtyard by Marriott",
              "Marriott Bonvoy Program",
              "Top Rated on Google",
              "Premium Dining Awards",
              "Hospitality Excellence",
              "Family-Friendly Choice",
              "Award-Winning Service",
              "Michelin Recommended",
            ]}
            textboxLayout="default"
            useInvertedBackground={false}
            speed={40}
            showCard={true}
          />
        </div>
      </div>

      {/* Footer */}
      <div id="footer-about" data-section="footer-about" className="bg-stone-900 text-stone-50 py-16">
        <FooterBase
          logoText="MoMo Café"
          copyrightText="© 2025 MoMo Café at Courtyard by Marriott Bengaluru. All rights reserved."
          columns={footerColumns}
        />
      </div>
    </ThemeProvider>
  );
}