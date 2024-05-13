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
    <footer className="bg-gray-900 text-white py-6 px-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between px-4">
        <div className="md:w-1/3 text-center md:text-left">
          <p className="text-lg font-semibold text-blue-700">Socials</p>
          <div className="flex items-center mt-2">
            <a
              href="#"
              className="mr-3 transition-colors duration-300 hover:text-gray-400">
              <FaFacebookSquare className="w-6 h-6 fill-current" />
            </a>
            <a
              href="#"
              className="mr-3 transition-colors duration-300 hover:text-gray-400">
              <FaTwitter className="w-6 h-6 fill-current" />
            </a>
            <a
              href="#"
              className="mr-3 transition-colors duration-300 hover:text-gray-400">
              <FaInstagram className="w-6 h-6 fill-current" />
            </a>
            <a
              href="#"
              className="transition-colors duration-300 hover:text-gray-400">
              <FaYoutube className="w-6 h-6 fill-current" />
            </a>
          </div>
        </div>
        <div className="md:w-1/3 mt-4 md:mt-0">
          <p className="text-lg font-semibold text-blue-700">Contact Us</p>
          <div className="flex mt-2">
            <IoLocationSharp className="w-6 h-6 fill-current mr-2" />
            <div>
              <p>USICT | GGSIPU</p>
              <p>Sector 16C, Dwarka, New Delhi</p>
            </div>
          </div>
          <div className="flex items-center mt-2">
            <IoMailSharp className="w-6 h-6 fill-current mr-2" />
            <p>khatriraj030@gmail.com</p>
          </div>
          <div className="flex items-center mt-2">
            <IoPhonePortraitSharp className="w-6 h-6 fill-current mr-2" />
            <p>+91 9999999999</p>
          </div>
        </div>
        <div className="md:w-1/3 flex flex-col items-center md:items-end mt-4 md:mt-0">
          <p className="text-lg font-semibold text-blue-700">Quick Links</p>
          <div className="flex flex-col md:flex-row mt-2">
            <a
              href="#"
              className="mr-4 hover:text-gray-400 transition-colors duration-300">
              About Us
            </a>
            <a
              href="#"
              className="mr-4 hover:text-gray-400 transition-colors duration-300">
              Services
            </a>
            <a
              href="#"
              className="mr-4 hover:text-gray-400 transition-colors duration-300">
              Products
            </a>
            <a
              href="#"
              className="mr-4 hover:text-gray-400 transition-colors duration-300">
              Contact
            </a>
            <a
              href="#"
              className="mr-4 hover:text-gray-400 transition-colors duration-300">
              Careers
            </a>
            <a
              href="#"
              className="hover:text-gray-400 transition-colors duration-300">
              Blog
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-6 pt-4 text-center">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm">
            © 2024 USICT | GGSIPU. All Rights Reserved. Designed by{" "}
            <a className="text-blue-700" href="www.github.com/khatrijiraj">
              @khatrijiraj
            </a>
          </p>
          <div className="flex items-center mt-4 md:mt-0">
            <p className="mr-4">Subscribe to Our Newsletter:</p>
            <div className="flex items-center bg-white rounded-md px-5 py-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent outline-none text-gray-900"
              />
              <button className="text-gray-900 ml-2">
                <FiMail className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
