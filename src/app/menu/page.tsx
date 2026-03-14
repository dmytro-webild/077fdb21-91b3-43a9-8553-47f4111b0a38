"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import FeatureCardEight from '@/components/sections/feature/FeatureCardEight';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import ContactFaq from '@/components/sections/contact/ContactFaq';
import FooterBase from '@/components/sections/footer/FooterBase';
import Link from "next/link";
import { UtensilsCrossed, Calendar, Sparkles } from "lucide-react";

export default function MenuPage() {
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

      {/* Menu & Cuisine Section */}
      <div id="features-highlights" data-section="features-highlights" className="bg-stone-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <FeatureCardEight
            title="Our Menu & Culinary Offerings"
            description="Discover the diverse flavors and expertly prepared dishes that make MoMo Café a culinary destination."
            tag="Premium Hospitality"
            tagIcon={Sparkles}
            tagAnimation="slide-up"
            features={[
              {
                id: 1,
                title: "International Cuisine",
                description: "Explore authentic dishes from around the world, including Continental, Asian, and Mediterranean specialties.",
                imageSrc: "http://img.b2bpic.net/free-photo/waiter-with-meal-catering-service_624325-1794.jpg?_wi=4",
              },
              {
                id: 2,
                title: "Indian Masterpieces",
                description: "Experience North and South Indian classics, from Mughlai masterpieces to crispy dosas and flaky parathas.",
                imageSrc: "http://img.b2bpic.net/free-photo/view-delicious-appetizing-street-food_23-2151516861.jpg?_wi=3",
              },
              {
                id: 3,
                title: "Artisanal Desserts",
                description: "Indulge in our curated selection of pastries, traditional sweets, and signature cakes prepared fresh daily.",
                imageSrc: "http://img.b2bpic.net/free-photo/chocolate-cake-with-cacao-powder-table_140725-4565.jpg?_wi=3",
              },
              {
                id: 4,
                title: "Premium Beverages",
                description: "From artisanal coffee to fresh juices, premium teas, and curated wines for the perfect pairing.",
                imageSrc: "http://img.b2bpic.net/free-photo/close-up-woman-pouring-milk-into-metal-container_1153-1561.jpg?_wi=3",
              },
            ]}
            textboxLayout="default"
            useInvertedBackground={false}
          />
        </div>
      </div>

      {/* Menu Tiers Section */}
      <div id="dining-experiences" data-section="dining-experiences" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <ProductCardThree
            title="Buffet Pricing & Experiences"
            description="Choose the perfect plan for your dining occasion. All buffets include unlimited beverages and desserts."
            tag="Choose Your Experience"
            tagIcon={UtensilsCrossed}
            tagAnimation="slide-up"
            products={[
              {
                id: "breakfast",
                name: "Breakfast Buffet",
                price: "₹699",
                imageSrc: "http://img.b2bpic.net/free-photo/top-view-tasty-fried-cutlets-with-cooked-rice-dark-surface-meal-photo-dish-meat_140725-82661.jpg?_wi=3",
                imageAlt: "Breakfast buffet spread with fresh juice and dosa",
              },
              {
                id: "lunch",
                name: "Lunch Buffet",
                price: "₹899",
                imageSrc: "http://img.b2bpic.net/free-photo/smoked-fish-salad-side-view_140725-11343.jpg?_wi=3",
                imageAlt: "Lunch buffet with international and Indian cuisine",
              },
              {
                id: "dinner",
                name: "Dinner Experience",
                price: "₹1,199",
                imageSrc: "http://img.b2bpic.net/free-photo/there-are-glasses-wine-water-table-with-white-cloth-are-ready-dining_613910-3426.jpg?_wi=3",
                imageAlt: "Elegant dinner ambiance with gourmet buffet",
              },
            ]}
            gridVariant="three-columns-all-equal-width"
            animationType="slide-up"
            textboxLayout="default"
            useInvertedBackground={false}
          />
        </div>
      </div>

      {/* FAQ & Reservations */}
      <div id="contact-faq" data-section="contact-faq" className="bg-stone-100 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <ContactFaq
            ctaTitle="Ready to Experience Our Menu?"
            ctaDescription="Reserve your table now and embark on a culinary journey at MoMo Café."
            ctaButton={{
              text: "Reserve Now",
              href: "#",
            }}
            ctaIcon={Calendar}
            useInvertedBackground={false}
            animationType="slide-up"
            faqs={[
              {
                id: "1",
                title: "Can I customize my buffet selection?",
                content: "Absolutely! While our buffet is all-you-can-eat, our staff can assist you with dietary restrictions and preferences. Just inform us at the table.",
              },
              {
                id: "2",
                title: "Are there any allergen-free options?",
                content: "Yes, we maintain allergen-free preparation areas. Please inform our team about allergies, and we'll guide you to safe options.",
              },
              {
                id: "3",
                title: "Is the buffet available for takeaway?",
                content: "Our buffet is dine-in only to ensure freshness and quality. However, we offer takeaway for select à la carte items.",
              },
              {
                id: "4",
                title: "What's the difference between meal timings?",
                content: "Breakfast focuses on fresh starts with dosas, omelets, and healthy options. Lunch features maximum variety. Dinner is elevated with live entertainment and premium selections.",
              },
              {
                id: "5",
                title: "Do you offer group discounts for large parties?",
                content: "Yes! Groups of 15+ receive special pricing. Contact us directly at 08071 203 040 for custom packages.",
              },
              {
                id: "6",
                title: "Is wine and alcoholic beverages included?",
                content: "Beverages are included up to premium soft drinks and fresh juices. Premium wines and cocktails are available at additional cost.",
              },
            ]}
          />
        </div>
      </div>

      {/* Footer */}
      <div id="footer-menu" data-section="footer-menu" className="bg-stone-900 text-stone-50 py-16">
        <FooterBase
          logoText="MoMo Café"
          copyrightText="© 2025 MoMo Café at Courtyard by Marriott Bengaluru. All rights reserved."
          columns={footerColumns}
        />
      </div>
    </ThemeProvider>
  );
}