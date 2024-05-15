import {
  FaFacebookSquare,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import {
  IoLocationSharp,
  IoMailSharp,
  IoPhonePortraitSharp,
} from "react-icons/io5";
import { FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
        <div>
          <p className="text-lg font-semibold mb-4">Socials</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-400">
              <FaFacebookSquare className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaTwitter className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaInstagram className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaYoutube className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div>
          <p className="text-lg font-semibold mb-4">Contact Us</p>
          <div className="flex flex-col gap-2">
            <div className="flex items-center">
              <IoLocationSharp className="w-6 h-6" />
              <div>
                <p>USICT | GGSIPU</p>
                <p>Sector 16C, Dwarka, New Delhi</p>
              </div>
            </div>
            <div className="flex items-center">
              <IoMailSharp className="w-6 h-6" />
              <p>khatriraj030@gmail.com</p>
            </div>
            <div className="flex items-center">
              <IoPhonePortraitSharp className="w-6 h-6" />
              <p>+91 9999999999</p>
            </div>
          </div>
        </div>
        <div>
          <p className="text-lg font-semibold mb-4">Quick Links</p>
          <div className="flex flex-col gap-2">
            <a href="#" className="hover:text-gray-400">
              About Us
            </a>
            <a href="#" className="hover:text-gray-400">
              Services
            </a>
            <a href="#" className="hover:text-gray-400">
              Products
            </a>
            <a href="#" className="hover:text-gray-400">
              Contact
            </a>
            <a href="#" className="hover:text-gray-400">
              Careers
            </a>
            <a href="#" className="hover:text-gray-400">
              Blog
            </a>
          </div>
        </div>
        <div>
          <p className="text-lg font-semibold mb-4">Newsletter</p>
          <div className="flex items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-gray-800 text-white px-3 py-2 w-full rounded-l-md"
            />
            <button className="bg-blue-700 px-4 py-2 rounded-r-md">
              <FiMail className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-8 pt-4 text-center">
        <p className="text-sm">
          © 2024 USICT | GGSIPU. All Rights Reserved. Designed by{" "}
          <a href="www.github.com/khatrijiraj" className="text-blue-700">
            @khatrijiraj
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
