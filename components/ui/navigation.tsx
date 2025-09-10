"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navigation() {
  const pathname = usePathname();
  
  const links = [
    { href: "/", label: "Home", hoverColor: "hover:text-blue-400" },
    { href: "/measure", label: "Mission", hoverColor: "hover:text-green-400" },
    { href: "/vibes", label: "Vibes", hoverColor: "hover:text-purple-400" },
    { href: "/start", label: "About", hoverColor: "hover:text-yellow-400" }
  ];

  return (
    <div className="flex space-x-6 text-gray-300 justify-center">
      {links.map(link => (
        <Link 
          key={link.href}
          href={link.href}
          className={`transition-all duration-300 text-sm font-medium transform hover:scale-110 ${ 
            pathname === link.href 
              ? "text-white scale-110 border-b-2 border-white pb-1" 
              : `${link.hoverColor} hover:text-opacity-90`
          }`}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
} 