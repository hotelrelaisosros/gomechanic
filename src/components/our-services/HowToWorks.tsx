import image1 from "../../assets/how_work_icons/image_1.svg";
import image2 from "../../assets/how_work_icons/image_2.svg";
import image3 from "../../assets/how_work_icons/image_3.svg";
import image4 from "../../assets/how_work_icons/image_4.svg";

const steps = [
  {
    step: "1",
    title: "Select The Perfect Car Service",
    desc: "From broad portfolio of services",
    icon: image1,
  },
  {
    step: "2",
    title: "Schedule Free Doorstep Pick-up",
    desc: "We offer free pick up and drop for all services booked",
    icon: image2,
  },
  {
    step: "3",
    title: "Track Your Car Service Real-Time",
    desc: "We will take care of everything from here!",
    icon: image3,
  },
  {
    step: "4",
    title: "Earn While We Service",
    desc: "Spread the word! You get Rs.750. Your friends get Rs.750!",
    icon: image4,
  },
];

const HowToWorks = () => {
  return (
    <section className="bg-white mt-10 md:mb-20">
      {/* Header */}
      <div className="mb-2">
        <div className="w-25 h-[2px] bg-red-500 mb-6 ml-4" />
        <h2 className="text-3xl font-bold text-gray-900">
          How works?
        </h2>
      </div>

      {/* Steps */}
      <div className="px-2 md:px-20">
        {steps.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="flex items-center justify-between gap-10"
            >
              {/* Left Content */}
              <div className="flex max-w-2xl flex-col">
                {/* Step Number */}
                <div className="w-9 h-9 bg-gray-200/60 flex items-center justify-center font-bold text-xl text-gray-900 ml-10">
                  {item.step}
                </div>

                {/* Text */}
                <div>
                  <h3 className="font-bold text-gray-900 mb-3 text-xl">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* Right Icon */}
              <div className="flex items-center justify-center">
                <img
                  src={Icon}
                  alt={item.title}
                  className="object-cover md:h-25 w-[100px] h-[80px]"
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HowToWorks;
