import NavBar from "../components/common/NavBar.tsx";
import { type nav_array, Nav_Array } from "../utils/data.ts";
import CarServiceForm from "../components/Form/CarServiceForm.tsx";
import backgroundImage from "../assets/peakpx.jpg";

const Home = () => {
  return (
    <div 
      className="relative min-h-[800px] bg-cover bg-center bg-no-repeat py-5"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* Content Wrapper */}
      <div
        className="
          relative z-10
          px-4
          sm:px-6
          md:px-10
          lg:px-16
          xl:px-20
        "
      >
        <NavBar />

        {/* Top Navigation Pills (XL only) */}
        <nav
          className="
            items-center gap-4 justify-center
            bg-gray-200/80
            absolute -top-5
            left-1/2 -translate-x-1/2
            lg:left-auto lg:translate-x-0 lg:right-1/4
            xl:right-1/5
            hidden lg:flex
            md:max-w-xl lg:max-w-lg xl:max-w-2xl
          "
        >
          {Nav_Array.map((item: nav_array) => (
            <div
              key={item.id}
              className="
        bg-gray-600/20
        w-35 h-16 pb-2
        flex items-center justify-center
        px-2 cursor-pointer
        hover:bg-danger/65
        transition-all duration-300
      "
            >
      <span className="text-center font-bold text-sm">
        {item.title}
      </span>
            </div>
          ))}
        </nav>


        <CarServiceForm />
      </div>
    </div>
  );
};

export default Home;
