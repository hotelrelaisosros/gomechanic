import { Mail, Phone, Calendar, Clock } from "lucide-react";
import logoImage from "../../assets/logo/aston-martin.svg";

const Footer = () => {
  return (
    <footer className="bg-[#2b2b2b] text-gray-300">
      {/* Main Footer */}
      <div className="px-6 sm:px-10 lg:px-20 py-12">
        <div className="flex flex-col md:flex-row gap-10 md:gap-0 justify-between">

        {/* Left Section */}
          <div className="flex flex-row gap-6 sm:gap-10 lg:gap-20 w-full justify-start">

          {/* Logo & Address */}
            <div className="flex flex-col items-center sm:items-start text-start sm:text-left">
              <img
                src={logoImage}
                alt="logo"
                className="w-28 h-10 mb-3 object-cover"
              />
              <p className="text-sm leading-relaxed">
                Address, Lorem Ipsum Dolor Sit
                <br />
                Amet
              </p>
            </div>

            {/* Quick Links */}
            <ul className="space-y-2 text-sm text-center sm:text-left">
              <li className="hover:text-white cursor-pointer">Home</li>
              <li className="hover:text-white cursor-pointer">My Account</li>
              <li className="hover:text-white cursor-pointer">About Us</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
              <li className="hover:text-white cursor-pointer">FAQ</li>
            </ul>
          </div>

          {/* Right Section */}
          <div className="grid grid-cols-2 gap-6 w-full max-w-md mx-auto lg:mx-0">

          {/* Labels */}
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>Email</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>Phone Number</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>Working Days</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>Working Hours</span>
              </div>
            </div>

            {/* Values */}
            <div className="space-y-3 text-sm text-left">
              <p>Email@web.com</p>
              <p>1234567890</p>
              <p>Monday - Sunday</p>
              <p>7:00AM - 9:00PM (IST)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black text-center py-6 text-xs sm:text-sm text-gray-400">
        © 2019–2025 Lorem Ipsum Dolor Sit Amet
      </div>
    </footer>
  );
};

export default Footer;
