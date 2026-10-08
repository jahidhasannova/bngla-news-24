import Image from "next/image";
import Navelinks from "./Navelinks";
import Link from "next/link";
import ActiveNavLink from "./ActiveNavLink";
import Userinfo from "./Userinfo";

const Header = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <header className="w-full">
      <div className="max-w-7xl mx-auto relative flex justify-end items-center p-3">
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2">
          <Image
            className="w-10 h-10"
            height={50}
            width={50}
            src="/logo.webp"
            alt=""
          ></Image>

          <div>
            <h2 className="text-2xl font-bold text-red-700">Bangla News 24</h2>

            <div className="text-gray-500">{date}</div>
          </div>
        </div>

        <Userinfo></Userinfo>

      </div>
      <Navelinks />
    </header>
  );
};

export default Header;
