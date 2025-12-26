import { Menu, X } from "lucide-react";
import { useState } from "react";
import {Nav_Array} from "../../utils/data.ts";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <nav className="flex justify-between items-center w-full relative">
        {/* Logo */}
        <span className="cursor-pointer">
          <img
            src="src/assets/logo/aston-martin.svg"
            alt="logo"
            className="object-cover w-32 h-8 xl:w-40 xl:h-10"
          />
        </span>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-6 xl:gap-8 items-center text-white font-bold">
          <li className="cursor-pointer">Blog</li>
          <li className="cursor-pointer">More</li>
          <button className="bg-primary px-4 py-2 cursor-pointer hover:bg-danger transition-all duration-300">
            Login
          </button>
        </ul>

        {/* Hamburger (MD and below) */}
        <button
          onClick={() => setOpen(true)}
          className="lg:hidden text-white z-50"
        >
          <Menu size={28} />
        </button>
      </nav>

      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/50 z-40"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 right-0 h-full w-72 bg-black z-50
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-700">
          <span className="text-white font-bold text-lg">Menu</span>
          <button onClick={() => setOpen(false)}>
            <X size={24} className="text-white" />
          </button>
        </div>

        {/* Sidebar Links */}
        <ul className="flex flex-col text-white font-semibold">
          <li className="px-6 py-4 hover:bg-gray-800 cursor-pointer">
            Blog
          </li>
          <li className="px-6 py-4 hover:bg-gray-800 cursor-pointer">
            More
          </li>
          {
            Nav_Array.map((item) => (
              <li key={item.id} className={'px-6 py-4 hover:bg-gray-800 cursor-pointer'}>
                {item?.title}
              </li>
            ))
          }
          <li className="px-6 py-4">
            <button className="w-full bg-primary py-2 hover:bg-danger transition">
              Login
            </button>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default NavBar;
