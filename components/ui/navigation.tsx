"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navigation() {
  const pathname = usePathname();
  
  const links = [
    { href: "/", label: "Home" },
    { href: "/measure", label: "Measure" },
    { href: "/vibes", label: "Vibes" },
    { href: "/start", label: "Start" }
  ];

  return (
    <nav className="py-6 relative z-10">
      <div className="flex space-x-8 text-gray-400 justify-center">
        {links.map(link => (
          <Link 
            key={link.href}
            href={link.href}
            className={`transition-colors text-sm ${
              pathname === link.href ? "text-white" : "hover:text-white"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
} 