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
    <footer className="w-full bg-background-secondary pt-32 pb-20 border-t border-royal-gold/10 relative overflow-hidden">
      <div className="premium-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-24 mb-24">
          <div className="space-y-10">
            <Link href="/" className="relative h-14 w-56 flex items-center group">
              <Image
                src={getAssetPath("/logo.png")}
                alt="Shree Krishna Event Management logo"
                title="Shree Krishna Event Management"
                fill
                sizes="224px"
                className="object-contain object-left"
              />
            </Link>
            <p className="text-secondary-text leading-relaxed font-body opacity-60 italic text-[15px]">
              Luxury event management company in Bhubaneswar — crafting divine
              celebrations and royal masterpieces across Odisha.
            </p>
            <div className="flex space-x-6">
              <a
                href={contactInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Shree Krishna Event Management on Instagram"
                className="w-12 h-12 rounded-full border border-royal-gold/15 flex items-center justify-center text-royal-gold/50 hover:bg-royal-gold hover:text-background transition-all duration-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-royal-gold"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          <div className="space-y-8">
            <h4 className="text-lg font-subheading font-bold text-cream-marble tracking-[0.15em] uppercase">
              The Journey
            </h4>
            <ul className="space-y-4 font-body">
              {journeyLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-secondary-text/70 hover:text-royal-gold transition-colors duration-300 text-[15px]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-lg font-subheading font-bold text-cream-marble tracking-[0.15em] uppercase">
              Contact
            </h4>
            <ul className="space-y-4 font-body">
              {contactInfo.phones.map((p) => (
                <li key={p.tel}>
                  <a href={`tel:${p.tel}`} className="text-secondary-text/70 hover:text-royal-gold transition-colors text-[15px]">
                    {p.display}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-secondary-text/70 hover:text-royal-gold transition-colors text-[15px]"
                >
                  {contactInfo.email}
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-lg font-subheading font-bold text-cream-marble tracking-[0.15em] uppercase">
              Visit Us
            </h4>
            <address className="not-italic space-y-4">
              <a
                href={contactInfo.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-text/70 leading-relaxed hover:text-royal-gold transition-colors block text-[15px]"
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

        <div className="pt-12 border-t border-royal-gold/10 flex flex-col md:flex-row items-center justify-between text-secondary-text/40 text-[11px] uppercase font-subheading tracking-[0.4em] gap-8">
          <p>© 2026 Shree Krishna Event Management</p>
          <div className="flex space-x-12">
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
