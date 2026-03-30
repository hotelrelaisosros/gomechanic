import {ChevronDown} from "lucide-react";

const CarServiceForm = () => {
  return (
    <div className="flex justify-center items-center absolute right-0 md:right-10 top-20 sm:top-30 flex-col md:px-0 px-5">
      <div className="w-full sm:max-w-xl lg:max-w-3xl bg-white shadow-lg pb-8 py-16 px-10">
        {/* Heading */}
        <h1 className="text-3xl text-gray-800 mb-12 font-bold">
          Car Servicing and <br /> Detailing Site
        </h1>

        {/* Form */}
        <form className="space-y-4 max-w-lg lg:min-w-xl" onClick={(e)=> e.preventDefault()}>
          {/* Owner Select */}
          <p className="text-gray-600 mb-4 font-semibold text-lg">
            Get instant quotes for your car service
          </p>

          <div className="relative">
            <select
              className="cursor-pointer w-full border-1 border-gray-400 font-semibold px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 appearance-none"
            >
              <option>OWNER</option>
              <option>Owner</option>
              <option>Company</option>
            </select>

            <span className="absolute right-2 sm:right-1/2 top-1/2 -translate-y-1/2 text-gray-800 pointer-events-none font-bold">
              <ChevronDown
                size={20}
                strokeWidth={2.5}
              />
            </span>
          </div>

          {/* Car Select */}
          <div className="relative w-full">
            <select
              className="cursor-pointer w-full border-1 border-gray-400 font-semibold px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 appearance-none"
            >
              <option value="">SELECT YOUR CAR</option>
              <option value="swift">Maruti Swift</option>
              <option value="creta">Hyundai Creta</option>
              <option value="city">Honda City</option>
            </select>

            <span className="absolute right-2 sm:right-1/2 top-1/2 -translate-y-1/2 text-gray-800 pointer-events-none font-bold">
              <ChevronDown
                size={20}
                strokeWidth={2.5}
              />
            </span>
          </div>

          {/* Mobile Input */}
          <input
            type="tel"
            placeholder="ENTER MOBILE NUMBER"
            className="w-full border-1 border-gray-400 px-4 py-3 font-semibold text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
          />

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-primary cursor-pointer hover:bg-red-700 text-white font-semibold py-3 transition text-center sm:text-start sm:pl-15"
          >
            CHECK PRICES FOR FREE
          </button>
        </form>
      </div>

      <div className={'bg-[#989999] h-25 w-full'}>
      </div>
    </div>
  );
};

export default CarServiceForm;
