import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const FloatingSocialIcons = () => {
  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 bg-white p-3 rounded-full shadow-lg flex space-x-4">
      <a
        href="https://facebook.com"
        target="_blank"
        className="text-blue-600 hover:text-blue-800 text-2xl"
      >
        <FaFacebook />
      </a>
      <a
        href="https://twitter.com"
        target="_blank"
        className="text-blue-400 hover:text-blue-600 text-2xl"
      >
        <FaTwitter />
      </a>
      <a
        href="https://linkedin.com"
        target="_blank"
        className="text-blue-700 hover:text-blue-900 text-2xl"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://instagram.com"
        target="_blank"
        className="text-pink-600 hover:text-pink-800 text-2xl"
      >
        <FaInstagram />
      </a>
    </div>
  );
};

export default FloatingSocialIcons;
