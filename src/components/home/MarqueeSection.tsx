const brands = [
  "Real-time Queue",
  "Instant Booking",
  "Smart Scheduling",
  "Nearby Barbers",
  "Live ETA",
  "Secure Payments",
  "Business Dashboard",
  "Analytics",
  "Notifications",
  "Maps Integration",
];

export default function MarqueeSection() {
  return (
    <div className="py-6 bg-[#E53935] overflow-hidden" aria-hidden="true">
      <div className="flex gap-8 animate-marquee whitespace-nowrap">
        {[...brands, ...brands, ...brands].map((brand, i) => (
          <span
            key={i}
            className="text-white/90 text-sm font-medium flex items-center gap-8 flex-shrink-0"
          >
            {brand}
            <span className="text-white/40">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
