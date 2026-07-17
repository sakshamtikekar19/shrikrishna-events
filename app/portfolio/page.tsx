import { Portfolio } from "@/components/sections/Portfolio";
import { FeaturedVideos } from "@/components/sections/FeaturedVideos";

export const metadata = {
  title: "Portfolio | Shree Krishna Event Management",
};

export default function PortfolioPage() {
  return (
    <div className="pt-16 sm:pt-20">
      <Portfolio />
      <FeaturedVideos />
    </div>
  );
}
