"use client";

import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import FeatureCardEight from '@/components/sections/feature/FeatureCardEight';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import ContactFaq from '@/components/sections/contact/ContactFaq';
import FooterBase from '@/components/sections/footer/FooterBase';
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import { UtensilsCrossed, ChefHat, Calendar } from 'lucide-react';

export default function DiningExperiencesPage() {
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
        <NavbarStyleApple brandName="MoMo Café" navItems={navItems} />
      </div>

      <div id="dining-experiences-detail" data-section="dining-experiences-detail" className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <ProductCardThree
            title="Breakfast, Lunch & Dinner Buffets"
            description="Discover our three distinctive dining experiences, each crafted to offer unique culinary adventures throughout the day."
            tag="Three Distinct Experiences"
            tagIcon={UtensilsCrossed}
            tagAnimation="slide-up"
            products={[
              {
                id: "breakfast",
                name: "Breakfast Buffet",
                price: "₹699 per person",
                imageSrc: "http://img.b2bpic.net/free-photo/top-view-tasty-fried-cutlets-with-cooked-rice-dark-surface-meal-photo-dish-meat_140725-82661.jpg?_wi=2",
                imageAlt: "breakfast buffet morning spread fresh juice",
              },
              {
                id: "lunch",
                name: "Lunch Buffet",
                price: "₹899 per person",
                imageSrc: "http://img.b2bpic.net/free-photo/smoked-fish-salad-side-view_140725-11343.jpg?_wi=2",
                imageAlt: "lunch buffet international cuisine salad bar",
              },
              {
                id: "dinner",
                name: "Dinner Experience",
                price: "₹1,199 per person",
                imageSrc: "http://img.b2bpic.net/free-photo/there-are-glasses-wine-water-table-with-white-cloth-are-ready-dining_613910-3426.jpg?_wi=2",
                imageAlt: "elegant dinner ambiance upscale restaurant",
              },
            ]}
            gridVariant="three-columns-all-equal-width"
            animationType="slide-up"
            textboxLayout="default"
            useInvertedBackground={false}
          />
        </div>
      </div>

      <div id="culinary-features" data-section="culinary-features" className="bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <FeatureCardEight
            title="Every Buffet Features"
            description="All our buffets showcase premium ingredients, live cooking stations, and culinary artistry."
            tag="Culinary Excellence"
            tagIcon={ChefHat}
            tagAnimation="slide-up"
            features={[
              {
                id: 1,
                title: "International Cuisine Station",
                description: "Continental, Asian, Italian, and Mediterranean dishes prepared with premium ingredients and authentic techniques.",
                imageSrc: "http://img.b2bpic.net/free-photo/waiter-with-meal-catering-service_624325-1794.jpg?_wi=3",
                imageAlt: "luxury buffet spread fine dining restaurant",
              },
              {
                id: 2,
                title: "Live Cooking Theatre",
                description: "Watch our expert chefs prepare dosas, omelettes, waffles, parathas, and grilled specialties right before your eyes.",
                imageSrc: "http://img.b2bpic.net/free-photo/view-delicious-appetizing-street-food_23-2151516861.jpg?_wi=2",
                imageAlt: "live cooking station chef preparing food",
              },
              {
                id: 3,
                title: "Indulgent Dessert Bar",
                description: "An array of pastries, cakes, traditional sweets, chocolate creations, and seasonal specialties.",
                imageSrc: "http://img.b2bpic.net/free-photo/chocolate-cake-with-cacao-powder-table_140725-4565.jpg?_wi=2",
                imageAlt: "luxury dessert display pastry buffet",
              },
              {
                id: 4,
                title: "Premium Beverage Selection",
                description: "Artisanal coffee, fresh-pressed juices, premium teas, cocktails, wines, and specialty beverages.",
                imageSrc: "http://img.b2bpic.net/free-photo/close-up-woman-pouring-milk-into-metal-container_1153-1561.jpg?_wi=2",
                imageAlt: "premium coffee espresso service luxury",
              },
            ]}
            textboxLayout="default"
            useInvertedBackground={false}
          />
        </div>
      </div>

      <div id="dining-faq" data-section="dining-faq" className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <ContactFaq
            ctaTitle="Ready to Experience Our Buffets?"
            ctaDescription="Choose your preferred dining time and join us for an unforgettable culinary journey."
            ctaButton={{
              text: "Book Your Table Now",
              href: "/reservations",
            }}
            ctaIcon={Calendar}
            useInvertedBackground={false}
            animationType="slide-up"
            faqs={[
              {
                id: "1",
                title: "What's included in the breakfast buffet?",
                content: "Our breakfast buffet features fresh juices, pastries, breads, cereals, eggs, dosa, idli, pancakes, waffles, fresh fruits, and artisanal coffee.",
              },
              {
                id: "2",
                title: "Are there vegetarian options in all buffets?",
                content: "Yes! Each buffet includes a dedicated vegetarian section with Indian, Continental, and Asian options. We accommodate all dietary preferences.",
              },
              {
                id: "3",
                title: "Can I make advance reservations?",
                content: "Absolutely. We recommend reservations for groups of 4 or more. Book online, call us at 08071 203 040, or visit in person.",
              },
              {
                id: "4",
                title: "Do you offer corporate lunch packages?",
                content: "Yes, we provide customized corporate packages with flexible pricing and dedicated service for business groups.",
              },
              {
                id: "5",
                title: "What is the seating time limit?",
                content: "Typically, there is no strict time limit. However, during peak hours, we request guests to plan for a 2-3 hour dining experience.",
              },
              {
                id: "6",
                title: "Do you provide home delivery or takeaway?",
                content: "Yes, we offer catering services and takeaway options for all our buffet offerings. Contact us for pricing and details.",
              },
            ]}
          />
        </div>
      </div>

      <div id="footer-dining" data-section="footer-dining" className="bg-stone-900 text-stone-50">
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