import {Star, Quote} from "lucide-react";

const stats = [
  { value: "3 Million+", label: "Cars Serviced" },
  { value: "25 Lacs+", label: "Happy Customers" },
  { value: "4.0", label: "Average Rating", icon: Star },
  { value: "1000+", label: "Touch Points In India" },
];

const reviews = [
  {
    title: "Friendly Staff",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    name: "Name",
    platform: "Twitter",
    workshop: "Lorem Ipsum Dolor Sit Amet",
    icon: "src/assets/icons/icons8-twitter-circled-48.png",
  },
  {
    title: "Best Among All",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    name: "Name",
    platform: "Facebook",
    workshop: "Lorem Ipsum Dolor Sit Amet",
    icon: "src/assets/icons/icons8-facebook-circled-48.png",
  },
];

const RatingAndReview = () => {
  return (
    <section className="pt-16 pb-4 bg-white">

      <div className="w-25 h-[2px] bg-red-500 mb-4" />

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 md:pl-10">
        {stats.map((item, index) => (
          <div key={index} className="text-start flex justify-between flex-col px-7">
            <div className="flex justify-start items-center gap-1 text-2xl font-bold text-gray-900">
              {item.value}
              {item.icon && <item.icon size={18} className="text-black" />}
            </div>
            <p className="text-xs text-gray-500 mt-1 text-end font-bold font-sans">{item.label}</p>
          </div>
        ))}
      </div>

      {/* Header */}
      <div className="mb-10">
        <div className="w-25 h-[2px] bg-red-500 mb-4" />
        <h2 className="text-3xl font-bold text-gray-900">
          What Car Owners Say
        </h2>
      </div>

      {/* Reviews */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:pr-40">
        {reviews.map((review, index) => {
          const Icon = review.icon;

          return (
            <div
              key={index}
              className="bg-gray-100 p-4 relative"
            >
              {/* Quote */}
              <span className="absolute -top-3 left-6 text-4xl text-red-500 rotate-180">
                <Quote size={25} strokeWidth={1}/>
              </span>

              {/* Title */}
              <h3 className="text-center font-bold text-md text-gray-800 mb-4">
                {review.title}
              </h3>

              {/* Content */}
              <p className="text-sm text-gray-600 leading-relaxed text-center mb-8">
                “{review.text}”
              </p>

              {/* User */}
              <div className="flex items-center gap-4 pt-6">
                <div
                  className={`rounded-full flex items-center justify-center text-white`}
                >
                  <img src={Icon} alt={review?.name} width={50} height={50} />
                </div>

                <div>
                  <p className="font-medium text-gray-900">
                    {review.name}
                  </p>
                  <p className="text-sm text-gray-600 font-semibold">
                    {review.platform}
                  </p>
                </div>
              </div>

              {/* Workshop */}
              <div className="border-t mt-4 pt-4 border-gray-200">
                <p className="text-xs text-gray-500">
                  Workshop Name
                </p>
                <p className="text-sm font-semibold text-gray-900">
                  {review.workshop}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default RatingAndReview;
