import { FaPhone } from "react-icons/fa";

const FloatingPhoneButton = () => {
  return (
    <a href="tel:+2349159822561" className="fixed bottom-6 left-6 z-50">
      <div className="bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition duration-300 flex items-center justify-center">
        <FaPhone className="text-2xl" />
      </div>
    </a>
  );
};

export default FloatingPhoneButton;
