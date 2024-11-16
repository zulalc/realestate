import Link from "next/link";
import { FaHome } from "react-icons/fa";

export default function Navbar() {
  return (
    <header className="bg-white fixed top-0 left-0 w-full z-50">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        <Link
          href="/"
          className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition duration-900 ease-in"
        >
          <FaHome className="text-3xl" />
          <span className="text-2xl font-bold">RealEstate</span>
        </Link>

        <ul className="flex space-x-6 text-xl">
          <li>
            <Link
              href="/"
              className="text-gray-700 hover:text-blue-600 transition duration-900 ease-in"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/listings"
              className="text-gray-700 hover:text-blue-600 transition duration-900 ease-in"
            >
              Listings
            </Link>
          </li>
          <li>
            <Link
              href="/favorites"
              className="text-gray-700 hover:text-blue-600 transition duration-900 ease-in"
            >
              Favorites
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-blue-600 	transition duration-900 ease-in"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
