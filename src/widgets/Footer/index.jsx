import Button from "../Button";

const Footer = () => {
  return (
    <footer className="bg-[#e8e4d4] w-screen py-12 px-6 md:px-12 lg:px-12">
      <div className="w-[90%] mx-auto flex flex-col lg:flex-row justify-center gap-12">
        <div className="flex-1">
          <img className="h-28" src="/images/logo/logo.webp" alt="Company Logo" />
          <div className="text-sm leading-relaxed text-gray-800 space-y-4">
            <div className="w-[85%] md:w-[70%] lg:w-[50%]">
              <p className="text-[#c86e3b] font-semibold">Piebald Capital</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet consectetur adipisicin</p>
            </div>
            <div>
              <p><span className="font-semibold">Tel:</span> +1 (786) 612-6784</p>
              <p><span className="font-semibold">Email:</span> <a href="mailto:info@company.com" className="underline hover:text-[#c86e3b]">info@company.com</a></p>
            </div>
          </div>
        </div>

        <div className="flex-1 pt-3">
          <h2 className="text-[#c86e3b] text-2xl font-bold mb-4">Subscribe to our Newsletter</h2>

          <form className="bg-white w-[75%] rounded-full flex items-center  shadow-md">
            <input
              type="email"
              required
              placeholder="EMAIL*"
              className="bg-transparent px-4 py-3 w-full rounded-full focus:outline-none text-sm text-gray-800"
            />
            <button
              type="submit"
              className="bg-[#c86e3b] hover:bg-[#e8e4d4] hover:text-black text-white px-3 md:px-6 lg:px-6 py-3 rounded-full text-sm font-semibold transition-all whitespace-nowrap"
            >
              Sign Up →
            </button>
          </form>

          <p className="text-xs text-gray-600 mt-4 pr-18 md:pr-36 lg:pr-40">
            By submitting this form, you are consenting to receive marketing emails from:
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. You can unsubscribe at any time.
          </p>
        </div>
      </div>

      <div className="w-[90%] mx-auto mt-10 border-t border-[#d1cfc2] pt-6 text-center text-sm text-gray-700">
        <div className="mb-2 space-x-4">
          <a href="#" className="underline hover:text-[#c86e3b]">Privacy Notice</a>
          <a href="#" className="underline hover:text-[#c86e3b]">Terms and Conditions</a>
        </div>
        <p>Copyright © 2025 Piebald Capital Partners. All rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
