import { Rentals } from "@/components/sections/Rentals";

export const metadata = {
  title: "Rentals | Shree Krishna Event Management",
};

export default function RentalsPage() {
  return (
    <div className="pt-16 sm:pt-20">
      <Rentals />
    </div>
  );
}
