import { Link } from "react-router";
import { FiAlertTriangle, FiRefreshCcw } from "react-icons/fi";
import { FaArrowLeft } from "react-icons/fa";

const Error = () => {
  return (
    <div className="min-h-screen bg-[#04130b] text-white flex items-center justify-center px-6 overflow-hidden relative">
      <div className="absolute w-[500px] h-[500px] bg-green-500/20 blur-3xl rounded-full top-[-100px] left-[-100px]" />
      <div className="absolute w-[400px] h-[400px] bg-emerald-400/10 blur-3xl rounded-full bottom-[-100px] right-[-100px]" />

      <div className="relative z-10 max-w-xl w-full backdrop-blur-xl bg-white/5 border border-green-500/20 rounded-3xl p-10 shadow-2xl shadow-green-900/30 text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-green-500/10 border border-green-400/20 p-5 rounded-full">
            <FiAlertTriangle className="w-14 h-14 text-green-400" />
          </div>
        </div>

        <h1 className="text-8xl font-black text-green-400 tracking-widest drop-shadow-lg">
          404
        </h1>

        <h2 className="mt-4 text-3xl font-bold">Oops! Page Not Found</h2>

        <p className="mt-3 text-gray-400 leading-relaxed">
          The page you are looking for might have been removed, renamed, or is
          temporarily unavailable.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-green-500 hover:bg-green-400 transition-all duration-300 text-black font-semibold shadow-lg shadow-green-500/30"
          >
            <FaArrowLeft size={18} />
            Back Home
          </Link>

          <button
            onClick={() => window.location.reload()}
            className="flex items-center gap-2 px-6 py-3 rounded-xl border border-green-500/30 hover:bg-green-500/10 transition-all duration-300"
          >
            <FiRefreshCcw size={18} />
            Refresh
          </button>
        </div>

        <p className="mt-8 text-sm text-gray-500">
          Error Code: <span className="text-green-400">404_NOT_FOUND</span>
        </p>
      </div>
    </div>
  );
};

export default Error;
