import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import batteriesIcon from "../../assets/our_services_icons/Batteries.svg";
import brakesIcon from "../../assets/our_services_icons/Brakes.svg";
import acPartsIcon from "../../assets/our_services_icons/AC_Parts.svg";
import clutchIcon from "../../assets/our_services_icons/Clutch_2.svg";
import tyresIcon from "../../assets/our_services_icons/Tyres.png";
import steeringIcon from "../../assets/our_services_icons/Steering.svg";
import suspensionIcon from "../../assets/our_services_icons/Suspension.svg";

const services = [
  { label: "Batteries", img: batteriesIcon, badge: "SALE" },
  { label: "Brakes", img: brakesIcon },
  { label: "AC Parts", img: acPartsIcon },
  { label: "Clutch", img: clutchIcon, badge: "NEW" },
  { label: "Tyres", img: tyresIcon, badge: "SALE" },
  { label: "Steering", img: steeringIcon },
  { label: "Suspension", img: suspensionIcon },
];

const CuratedCustomerServices = () => {
  const scrollRef: any = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -200,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 200,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-white mb-20 w-full">
      {/* Header */}
      <div className="mb-6">
        <div className="w-25 h-[2px] bg-red-500 mb-4" />
        <h2 className="text-3xl font-bold text-gray-900">
          Curated Custom Services
        </h2>
      </div>

      <div className="flex w-full items-center justify-between">
        {/* Left Arrow */}
        <button
          onClick={scrollLeft}
          className="p-1 cursor-pointer rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Scrollable Services */}
        <div
          ref={scrollRef}
          className="flex gap-10 overflow-x-auto max-w-5xl scrollbar-hide scroll-smooth pl-2"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-3 relative min-w-[120px] cursor-pointer"
            >
              {/* Image */}
              <div className="rounded-full flex items-center justify-center relative  p-1.5">
                {/* Badge */}
                {service.badge && (
                  <span className="absolute -bottom-1.5  text-xs px-3 py-[2px] rounded text-white bg-green-500">
                  {service.badge}
                </span>
                )}
                <img
                  src={service.img}
                  alt={service.label}
                  className="w-25 h-25 object-contain"
                />
              </div>

              {/* Label */}
              <span className="text-sm font-bold text-gray-900">
                {service.label}
              </span>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={scrollRight}
          className="p-1 cursor-pointer rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default CuratedCustomerServices;
