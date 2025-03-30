import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Canteen Info */}
        <div>
          <h2 className="text-xl font-semibold">Canteen</h2>
          <p className="mt-2 text-sm">
            Delicious, fresh, and healthy meals served with care in a modern
            dining experience.
          </p>
          <div className="flex space-x-4 mt-4 text-xl">
            <FaInstagram className="cursor-pointer hover:text-gray-500" />
            <FaTwitter className="cursor-pointer hover:text-gray-500" />
            <FaFacebook className="cursor-pointer hover:text-gray-500" />
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h2 className="text-lg font-semibold">Navigation</h2>
          <ul className="mt-2 space-y-2 text-sm">
            <li className="hover:underline cursor-pointer">Home</li>
            <li className="hover:underline cursor-pointer">Menu</li>
            <li className="hover:underline cursor-pointer">About</li>
            <li className="hover:underline cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h2 className="text-lg font-semibold">Legal</h2>
          <ul className="mt-2 space-y-2 text-sm">
            <li className="hover:underline cursor-pointer">Privacy Policy</li>
            <li className="hover:underline cursor-pointer">Terms of Service</li>
            <li className="hover:underline cursor-pointer">Cookie Policy</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-lg font-semibold">Contact Us</h2>
          <p className="mt-2 text-sm">
            📧 info@canteen.com <br />
            📍 123 Food Street, Gourmet City, GC 12345
          </p>
          <p className="mt-2 text-sm">
            <span className="font-semibold">Opening Hours:</span> <br />
            Mon-Fri: 8am - 8pm <br />
            Sat-Sun: 9am - 7pm
          </p>
        </div>
      </div>

      {/* Bottom section */}
      <div className="border-t mt-6 pt-4 text-center text-sm text-gray-500">
        <p>© 2025 Canteen. All rights reserved.</p>
        <div className="flex justify-center space-x-6 mt-2">
          <span className="hover:underline cursor-pointer">Careers</span>
          <span className="hover:underline cursor-pointer">Blog</span>
          <span className="hover:underline cursor-pointer">Press</span>
        </div>
      </div>
    </footer>
  );
}
