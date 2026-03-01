"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavigationProps {
  isWhitePage?: boolean;
}

export function Navigation({ isWhitePage = false }: NavigationProps) {
  const pathname = usePathname();
  
  const links = [
    { href: "/", label: "Home", hoverColor: isWhitePage ? "hover:text-impact-green" : "hover:text-impact-green" },
    { href: "/impact-intelligence", label: "Impact Intelligence", hoverColor: isWhitePage ? "hover:text-focus-purple" : "hover:text-focus-purple" },
    { href: "/for-founders", label: "For Founders", hoverColor: isWhitePage ? "hover:text-impact-green" : "hover:text-impact-green" },
    { href: "/for-organizations", label: "For Organizations", hoverColor: isWhitePage ? "hover:text-focus-purple" : "hover:text-focus-purple" },
    { href: "/mission", label: "Mission", hoverColor: isWhitePage ? "hover:text-impact-green" : "hover:text-impact-green" },
    { href: "/stories", label: "Stories", hoverColor: isWhitePage ? "hover:text-focus-purple" : "hover:text-focus-purple" }
  ];

  return (
    <div className={`flex space-x-6 justify-center ${
      isWhitePage ? 'text-gray-600' : 'text-gray-300'
    }`}>
      {links.map(link => (
        <Link 
          key={link.href}
          href={link.href}
          className={`transition-all duration-300 text-sm font-medium transform hover:scale-110 ${ 
            pathname === link.href 
              ? isWhitePage 
                ? "text-gray-900 scale-110 border-b-2 border-gray-900 pb-1" 
                : "text-white scale-110 border-b-2 border-white pb-1"
              : `${link.hoverColor} hover:text-opacity-90`
          }`}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
} 
