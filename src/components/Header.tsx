import Image from "next/image";
import Navelinks from "./Navelinks";
import Userinfo from "./Userinfo";

const Header = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <header className="w-full">
      <div className="max-w-7xl mx-auto relative flex justify-end items-center p-3 max-sm:justify-center">
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2 max-sm:static max-sm:translate-x-0">
          <Image
            className="w-8 h-8 sm:w-10 sm:h-10"
            height={50}
            width={50}
            src="/logo.webp"
            alt=""
          ></Image>

          <div>
            <h2 className="text-lg sm:text-2xl font-bold text-red-700">
              Bangla News 24
            </h2>

            <div className="text-xs sm:text-base text-gray-500">{date}</div>
          </div>
        </div>

        <div className="max-sm:absolute max-sm:right-3 max-sm:top-1">
          <Userinfo></Userinfo>
        </div>
      </div>

      <Navelinks />
    </header>
  );
};

export default Header;