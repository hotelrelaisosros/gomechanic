import { X, Menu } from "lucide-react";
import { useState } from "react";
import { Nav_Array, type nav_array } from "../../utils/data";

const MobileSidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Hamburger Button (MD and below) */}
      <button
        onClick={() => setOpen(true)}
        className="lg:hidden fixed top-6 right-6 z-50 bg-black/60 p-2 rounded-md text-white"
      >
        <Menu size={22} />
      </button>

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
          fixed top-0 right-0 h-full w-72 bg-white z-50
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b">
          <h2 className="font-bold text-lg">Menu</h2>
          <button onClick={() => setOpen(false)}>
            <X size={22} />
          </button>
        </div>

        {/* Nav Items */}
        <div className="flex flex-col gap-2 p-4">
          {Nav_Array.map((item: nav_array) => (
            <button
              key={item.id}
              className="
                text-left
                px-4
                py-3
                rounded-lg
                font-medium
                hover:bg-gray-100
                transition
              "
              onClick={() => setOpen(false)}
            >
              {item.title}
            </button>
          ))}
        </div>
      </aside>
    </>
  );
};

export default MobileSidebar;
