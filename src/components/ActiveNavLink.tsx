"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface ActiveNavLinkProps {
  href: string;
  children: React.ReactNode;
}

const ActiveNavLink = ({ href, children }: ActiveNavLinkProps) => {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={isActive ? "text-red-700 font-semibold" : "hover:text-red-700"}
    >
      {children}
    </Link>
  );
};

export default ActiveNavLink;
