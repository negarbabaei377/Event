"use client";

import { headerLinks } from "@/constans";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navitems = () => {
  const pathname = usePathname();
  return (
    <ul className="flex md:justify-between w-full flex-col md:flex-row flex-start gap-5">
      {headerLinks.map((item) => {
        const isActive = pathname === item.route;
        return (
          <li
            key={item.route}
            className={`${isActive && "text-primary-500"} flex-center whitespace-nowrap font-bold`}
          >
            <Link href={item.route}>{item.label}</Link>
          </li>
        );
      })}
    </ul>
  );
};
