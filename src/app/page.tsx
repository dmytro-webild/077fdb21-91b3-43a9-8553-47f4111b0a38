"use client";

import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroSplitTestimonial from '@/components/sections/hero/HeroSplitTestimonial';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardEight from '@/components/sections/feature/FeatureCardEight';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import ContactFaq from '@/components/sections/contact/ContactFaq';
import FooterBase from '@/components/sections/footer/FooterBase';
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import { Star, Sparkles, UtensilsCrossed, Heart, Award, Calendar } from 'lucide-react';

export default function HomePage() {
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

      <div id="hero-home" data-section="hero-home" className="bg-gradient-to-br from-stone-50 to-stone-100">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <HeroSplitTestimonial
            title="Bengaluru's Most Loved Luxury Buffet Experience"
            description="Global flavors, live culinary stations, artisanal coffee, and warm hospitality — all under one roof at Courtyard by Marriott."
            background={{ variant: "radial-gradient" }}
            tag="4.0★ Rating | 1,545 Reviews"
            tagIcon={Star}
            tagAnimation="slide-up"
            buttons={[
              { text: "Reserve Your Table", href: "/reservations" },
              { text: "View Menu", href: "/menu" },
            ]}
            buttonAnimation="slide-up"
            testimonials={[
              {
                name: "Michelle P",
                handle: "@michellep",
                testimonial: "Bright, airy, classy atmosphere that makes you want to sit and stay.",
                rating: 5,
                imageSrc: "http://img.b2bpic.net/free-photo/close-up-smiley-people-together_23-2149152898.jpg",
                imageAlt: "satisfied guest smiling restaurant experience",
              },
              {
                name: "Ajit Kumar",
                handle: "@ajitkumar",
                testimonial: "A delightful lunch buffet with huge variety and live singing creating a lively atmosphere.",
                rating: 5,
                imageSrc: "http://img.b2bpic.net/free-photo/side-view-friends-restaurant_23-2148395398.jpg",
                imageAlt: "guest enjoying food at table restaurant",
              },
              {
                name: "Prabhakar Thota",
                handle: "@prabhakarth",
                testimonial: "Live cooking stations and incredible desserts. A wonderful dining experience.",
                rating: 5,
                imageSrc: "http://img.b2bpic.net/free-photo/young-man-women-having-dinner-together_23-2148454093.jpg",
                imageAlt: "guest taking picture food restaurant",
              },
              {
                name: "V Raja",
                handle: "@vrajaofficial",
                testimonial: "Amazing lunch buffet with family. The magician and live singer made it unforgettable.",
                rating: 5,
                imageSrc: "http://img.b2bpic.net/free-photo/couples-celebrating-birthday_23-2149891035.jpg",
                imageAlt: "group of guests dining together buffet",
              },
            ]}
            testimonialRotationInterval={5000}
            imageSrc="http://img.b2bpic.net/free-photo/waiter-with-meal-catering-service_624325-1794.jpg"
            imageAlt="Luxury buffet spread at MoMo Café"
            mediaAnimation="blur-reveal"
            imagePosition="right"
          />
        </div>
      </div>

      <div id="experience-about" data-section="experience-about" className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <TextSplitAbout
            title="A Dining Experience Designed to Delight"
            description={[
              "MoMo Café blends sophisticated contemporary design with warm, welcoming hospitality. Our space is bright, airy, and perfect for every occasion — from romantic dinners to family celebrations.",
              "Every detail is curated to create moments that matter. Our commitment to excellence, paired with our diverse global buffet, makes us Bengaluru's premier all-day dining destination.",
            ]}
            useInvertedBackground={false}
            buttons={[
              { text: "Explore Dining Options", href: "/dining-experiences" },
            ]}
            buttonAnimation="slide-up"
          />
        </div>
      </div>

      <div id="features-highlights" data-section="features-highlights" className="bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <FeatureCardEight
            title="What Makes MoMo Café Special"
            description="Experience luxury dining with live stations, curated menus, and impeccable service."
            tag="Premium Hospitality"
            tagIcon={Sparkles}
            tagAnimation="slide-up"
            features={[
              {
                id: 1,
                title: "Lavish Global Buffet",
                description: "International cuisine, Mughlai classics, South Indian specialties, and vegetarian excellence — explore flavors from around the world.",
                imageSrc: "http://img.b2bpic.net/free-photo/waiter-with-meal-catering-service_624325-1794.jpg",
                imageAlt: "luxury buffet spread fine dining restaurant",
              },
              {
                id: 2,
                title: "Live Cooking Stations",
                description: "Fresh dosas, omelettes, waffles, parathas, and grills prepared right before your eyes, creating a vibrant culinary theatre.",
                imageSrc: "http://img.b2bpic.net/free-photo/view-delicious-appetizing-street-food_23-2151516861.jpg",
                imageAlt: "live cooking station chef preparing food",
              },
              {
                id: 3,
                title: "Dessert Paradise",
                description: "Cakes, pastries, traditional Indian sweets, puddings, and bakery items that guests rave about.",
                imageSrc: "http://img.b2bpic.net/free-photo/chocolate-cake-with-cacao-powder-table_140725-4565.jpg",
                imageAlt: "luxury dessert display pastry buffet",
              },
              {
                id: 4,
                title: "Premium Coffee & Beverages",
                description: "Artisanal coffee, fresh juices, premium tea selections, cocktails, and curated wines.",
                imageSrc: "http://img.b2bpic.net/free-photo/close-up-woman-pouring-milk-into-metal-container_1153-1561.jpg",
                imageAlt: "premium coffee espresso service luxury",
              },
            ]}
            textboxLayout="default"
            useInvertedBackground={false}
          />
        </div>
      </div>

      <div id="dining-experiences" data-section="dining-experiences" className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <ProductCardThree
            title="Our Dining Experiences"
            description="Each time of day offers a unique culinary journey tailored to your preferences."
            tag="Choose Your Experience"
            tagIcon={UtensilsCrossed}
            tagAnimation="slide-up"
            products={[
              {
                id: "breakfast",
                name: "Breakfast Buffet",
                price: "₹699",
                imageSrc: "http://img.b2bpic.net/free-photo/top-view-tasty-fried-cutlets-with-cooked-rice-dark-surface-meal-photo-dish-meat_140725-82661.jpg",
                imageAlt: "breakfast buffet morning spread fresh juice",
              },
              {
                id: "lunch",
                name: "Lunch Buffet",
                price: "₹899",
                imageSrc: "http://img.b2bpic.net/free-photo/smoked-fish-salad-side-view_140725-11343.jpg",
                imageAlt: "lunch buffet international cuisine salad bar",
              },
              {
                id: "dinner",
                name: "Dinner Experience",
                price: "₹1,199",
                imageSrc: "http://img.b2bpic.net/free-photo/there-are-glasses-wine-water-table-with-white-cloth-are-ready-dining_613910-3426.jpg",
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

      <div id="testimonials-section" data-section="testimonials-section" className="bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <TestimonialCardFive
            title="What Our Guests Adore"
            description="Real experiences from diners who've discovered the magic of MoMo Café."
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
                quote: "Bright, airy, classy atmosphere that makes you want to sit and stay. Perfect for a relaxed lunch.",
                tag: "Atmosphere",
                avatarSrc: "http://img.b2bpic.net/free-photo/close-up-smiley-people-together_23-2149152898.jpg",
                avatarAlt: "satisfied guest smiling restaurant experience",
              },
              {
                id: "2",
                name: "Ajit Kumar",
                date: "2 weeks ago",
                title: "Live Entertainment Magic",
                quote: "A delightful lunch buffet with huge variety and live singing creating a lively atmosphere. My family loved it!",
                tag: "Entertainment",
                avatarSrc: "http://img.b2bpic.net/free-photo/side-view-friends-restaurant_23-2148395398.jpg",
                avatarAlt: "guest enjoying food at table restaurant",
              },
              {
                id: "3",
                name: "Prabhakar Thota",
                date: "1 week ago",
                title: "Culinary Excellence",
                quote: "Live cooking stations and incredible desserts. A wonderful dining experience that exceeds expectations.",
                tag: "Food Quality",
                avatarSrc: "http://img.b2bpic.net/free-photo/young-man-women-having-dinner-together_23-2148454093.jpg",
                avatarAlt: "guest taking picture food restaurant",
              },
              {
                id: "4",
                name: "V Raja",
                date: "5 days ago",
                title: "Unforgettable Celebration",
                quote: "Amazing lunch buffet with family. The magician and live singer made it unforgettable. Booking again soon!",
                tag: "Events",
                avatarSrc: "http://img.b2bpic.net/free-photo/couples-celebrating-birthday_23-2149891035.jpg",
                avatarAlt: "group of guests dining together buffet",
              },
              {
                id: "5",
                name: "Deepak Holla",
                date: "3 days ago",
                title: "Warm Hospitality",
                quote: "Staff were incredibly welcoming and attentive. Every detail of service was perfect.",
                tag: "Service",
                avatarSrc: "http://img.b2bpic.net/free-photo/young-woman-shaking-hand-with-businessman_23-2148252143.jpg",
                avatarAlt: "guest with staff interaction warmth service",
              },
              {
                id: "6",
                name: "Ramesh Nair",
                date: "Yesterday",
                title: "Value for Money",
                quote: "Premium buffet experience at reasonable prices. The variety and quality are unmatched in this area.",
                tag: "Value",
                avatarSrc: "http://img.b2bpic.net/free-photo/close-up-smiley-people-together_23-2149152898.jpg",
                avatarAlt: "satisfied guest smiling restaurant experience",
              },
            ]}
          />
        </div>
      </div>

      <div id="social-proof-partners" data-section="social-proof-partners" className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <SocialProofOne
            title="Trusted by Bengaluru"
            description="MoMo Café is the preferred choice for business meetings, family celebrations, and everyday dining."
            tag="Restaurant Partner"
            tagIcon={Award}
            tagAnimation="slide-up"
            names={[
              "Courtyard by Marriott",
              "Global Technology Park",
              "Marathahalli Business District",
              "Top Rated on Google",
              "Michelin Recommended Venue",
              "Premium Dining Network",
              "Award-Winning Hospitality",
              "Family-Friendly Excellence",
            ]}
            textboxLayout="default"
            useInvertedBackground={false}
            speed={40}
            showCard={true}
          />
        </div>
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