import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-6  text-white w-full">
      <div className="flex justify-center space-x-4">
        <a
          href="https://www.linkedin.com/in/zulalcengiz/"
          className="text-gray-600 hover:text-gray-900 transition duration-900 ease-in"
        >
          <FaLinkedin size={24} />
        </a>

        <a
          href="https://github.com/zulalc"
          className="text-gray-600 hover:text-gray-900 transition duration-900 ease-in"
        >
          <FaGithub size={24} />
        </a>
      </div>
      <p className="text-center text-gray-500 mt-4">
        © 2024 RealEstate. All rights reserved.
      </p>
    </footer>
  );
}
