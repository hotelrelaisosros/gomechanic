import Container from "@mui/material/Container";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import OurServices from "../our-services/OurServices.tsx";
import CuratedCustomerServices from "../our-services/CuratedCustomerServices.tsx";
import Guarantee from "../our-services/Guarantee.tsx";
import HowToWorks from "../our-services/HowToWorks.tsx";
import RatingAndReview from "../our-services/RatingAndReview.tsx";
import BeforeFooter from "./BeforeFooter.tsx";

const tabs = [
  "Our Services",
  "Curated Custom Service",
  "Guarantee",
  "How To Works?",
  "Rating & Reviews",
];

const ServicesTabs = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const tabsWrapperRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const currentIndex = tabs.indexOf(activeTab);

  const handleLeft = () => {
    if (currentIndex > 0) {
      setActiveTab(tabs[currentIndex - 1]);
    }
  };

  const handleRight = () => {
    if (currentIndex < tabs.length - 1) {
      setActiveTab(tabs[currentIndex + 1]);
    }
  };

  // ✅ CENTER ACTIVE TAB
  useEffect(() => {
    const activeTabEl = tabRefs.current[activeTab];
    const wrapper = tabsWrapperRef.current;

    if (activeTabEl && wrapper) {
      activeTabEl.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [activeTab]);

  return (
    <Container className={"flex flex-col gap-22"}>
      <div className="bg-gray-200 mt-3 shadow-[-6px_-6px_20px_rgba(247, 246, 246)]">
        <div
          className="flex items-center gap-8 md:gap-16 overflow-x-auto scrollbar-hide justify-center
          bg-gray-100 absolute pt-4 px-10 md:px-30 shadow-[-5px_-5px_0px_0px_#cbd5e0] [@media(max-width:395px)]:max-w-[280px]
          max-w-[365px] sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-full"
        >
          {/* LEFT ARROW */}
          <button
            onClick={handleLeft}
            className="flex-shrink-0 text-gray-600 hover:text-black pb-4"
          >
            <ChevronLeft size={22} />
          </button>

          {/* TABS */}
          <div
            ref={tabsWrapperRef}
            className="flex gap-10 items-center overflow-x-scroll scrollbar-hide pb-4"
          >
            {tabs.map((tab) => (
              <button
                key={tab}
                ref={(el: any) => (tabRefs.current[tab] = el)}
                onClick={() => setActiveTab(tab)}
                className={`relative whitespace-nowrap font-bold cursor-pointer
                  ${
                  activeTab === tab
                    ? "text-gray-700 text-lg"
                    : "text-gray-500 hover:text-black text-sm"
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <span className="absolute left-0 -bottom-4 h-[3px] w-full bg-black rounded" />
                )}
              </button>
            ))}
          </div>

          {/* RIGHT ARROW */}
          <button
            onClick={handleRight}
            className="ml-auto flex-shrink-0 text-gray-600 hover:text-black pb-4"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      </div>

      <div>
        <OurServices />
        <CuratedCustomerServices />
        <Guarantee />
        <HowToWorks />
        <RatingAndReview />
        <BeforeFooter />
      </div>
    </Container>
  );
};

export default ServicesTabs;
