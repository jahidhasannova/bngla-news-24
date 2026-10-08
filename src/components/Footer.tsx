import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-12 border-t border-gray-200 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold text-red-700">Bangla News 24</h2>

            <p className="text-sm text-gray-500 mt-1">সর্বশেষ খবর, সবার আগে।</p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-2">
            <nav className="flex flex-wrap justify-center gap-5 text-sm text-gray-600">
              <Link href="/" className="hover:text-red-700 transition-colors">
                হোম
              </Link>

              <Link
                href="/category/politics"
                className="hover:text-red-700 transition-colors"
              >
                রাজনীতি
              </Link>

              <Link
                href="/category/world"
                className="hover:text-red-700 transition-colors"
              >
                বিশ্ব
              </Link>

              <Link
                href="/category/sports"
                className="hover:text-red-700 transition-colors"
              >
                খেলা
              </Link>
            </nav>

            <p className="text-xs text-gray-400">Source: BBC Bangla</p>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-5 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Bangla News 24. Developed by{" "}
          <span className="font-semibold text-gray-700">Jahid Hasan</span>.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
