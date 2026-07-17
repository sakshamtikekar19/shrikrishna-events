import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import Image from "next/image";
import { contactInfo } from "@/data/contact";
import { getAssetPath } from "@/lib/seo";

const journeyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "Featured Portfolio", href: "/portfolio" },
  { label: "Premium Rentals", href: "/rentals" },
  { label: "Contact Us", href: "/contact" },
];

export const Footer = () => {
  return (
    <footer className="bg-background-secondary pt-20 pb-10 border-t border-royal-gold/10 relative overflow-hidden">
      <div className="container mx-auto px-5 sm:px-6 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 mb-16">
          <div className="space-y-6">
            <Link href="/" className="relative h-11 w-40 flex items-center group">
              <Image
                src="/logo.png"
                alt="Shree Krishna Event Management logo"
                title="Shree Krishna Event Management"
                fill
                sizes="160px"
                className="object-contain object-left"
              />
            </Link>
            <p className="text-secondary-text text-sm leading-relaxed font-body opacity-70 italic">
              Luxury event management company in Bhubaneswar — crafting divine
              celebrations and royal masterpieces across Odisha.
            </p>
            <div className="flex space-x-4">
              <a
                href={contactInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Shree Krishna Event Management on Instagram"
                className="w-9 h-9 rounded-full border border-royal-gold/15 flex items-center justify-center text-royal-gold/50 hover:bg-royal-gold hover:text-background transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-royal-gold"
              >
                <FaInstagram size={16} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-base font-subheading font-bold text-cream-marble mb-6 tracking-[0.1em] uppercase">
              The Journey
            </h4>
            <ul className="space-y-3 font-body text-sm">
              {journeyLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-secondary-text hover:text-royal-gold transition-colors duration-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-base font-subheading font-bold text-cream-marble mb-6 tracking-[0.1em] uppercase">
              Contact
            </h4>
            <ul className="space-y-3 font-body text-sm text-secondary-text">
              {contactInfo.phones.map((p) => (
                <li key={p.tel}>
                  <a href={`tel:${p.tel}`} className="hover:text-royal-gold transition-colors">
                    {p.display}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="hover:text-royal-gold transition-colors"
                >
                  {contactInfo.email}
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-base font-subheading font-bold text-cream-marble tracking-[0.1em] uppercase">
              Visit Us
            </h4>
            <address className="not-italic">
              <a
                href={contactInfo.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-text text-sm leading-relaxed hover:text-royal-gold transition-colors block"
              >
                {contactInfo.address.line1}
                <br />
                {contactInfo.address.line2}
                <br />
                {contactInfo.address.city}
              </a>
            </address>
          </div>
        </div>

        <div className="pt-8 border-t border-royal-gold/10 flex flex-col md:flex-row items-center justify-between text-secondary-text/50 text-[9px] uppercase font-subheading tracking-[0.3em] gap-4">
          <p>© 2026 Shree Krishna Event Management</p>
          <div className="flex space-x-6">
            <Link href="/contact" className="hover:text-royal-gold transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-royal-gold transition-colors">
              Terms of Heritage
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
