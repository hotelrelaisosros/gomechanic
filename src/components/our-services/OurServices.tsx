import carServicesIcon from "../../assets/our_services_icons/car_services.svg";
import clutchIcon from "../../assets/our_services_icons/Clutch.svg";
import acIcon from "../../assets/our_services_icons/AC.svg";
import spaIcon from "../../assets/our_services_icons/SPA.svg";
import mechanicalServicesIcon from "../../assets/our_services_icons/Mechanical_Services.svg";

const services = [
  { label: "Car Services", icon: carServicesIcon },
  { label: "Clutch", icon: clutchIcon },
  { label: "AC", icon: acIcon },
  { label: "SPA", icon: spaIcon },
  { label: "Mechanical Services", icon: mechanicalServicesIcon },
];

const OurServices = () => {
  return (
    <section className="pb-14 bg-white max-w-4xl">
      {/* Header */}
      <div className="mb-10">
        <div className="w-25 h-[2px] bg-red-500 mb-4" />
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Car Services Available
        </h2>
        <p className="text-gray-600">
          Choose from a wide assortment of car services from periodic car
          servicing, car care services, wheel care services, cashless
          insurance claims and much more!
        </p>
      </div>

      {/* Services Grid */}
      <div className="flex gap-2 backdrop-blur-2xl
                flex-nowrap overflow-x-auto
                md:flex-wrap md:overflow-visible scrollbar-hide">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div
              key={index}
              className="flex-shrink-0 flex flex-col items-center cursor-pointer
                   justify-center gap-6 w-40 py-6 px-2
                   border border-[#e0e1e1] bg-[#e0e1e1]
                   shadow-[0px_0px_5px_4px_rgba(0,0,0,0.2)]
                   hover:bg-gray-200 transition backdrop-blur-4xl"
            >
              <img src={Icon} alt={service?.label} width={55} height={55} />
              <span className="text-sm font-medium text-gray-700 text-center">
          {service.label}
        </span>
            </div>
          );
        })}
      </div>

    </section>
  );
};

export default OurServices;
