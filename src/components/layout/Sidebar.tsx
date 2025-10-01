"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const menuItems = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Influencerlar", href: "/dashboard/influencers" }, 
  { name: "Ayarlar", href: "/dashboard/settings" },        
];

interface SidebarProps {
    isVisible: boolean;
    onLinkClick: () => void;
}

export default function Sidebar({ isVisible, onLinkClick }: SidebarProps) {
  const pathname = usePathname();

  return (
    <div className={`
        ${isVisible ? 'translate-x-0' : '-translate-x-full'} 
        transition-transform duration-300 ease-in-out
        w-64 bg-white border-r shadow-2xl md:shadow-lg 
        fixed top-16 bottom-0 z-40 overflow-y-auto 
        md:translate-x-0 md:block 
    `}>
      
      <nav className="space-y-2 p-4">
        {menuItems.map((item) => {
          const isActive = pathname === item.href; 
          return (
            <Link 
              key={item.name} 
              href={item.href}
              onClick={onLinkClick} 
              className={`flex items-center p-3 rounded-lg transition-colors duration-200 border-l-4 
                ${isActive 
                  ? "bg-purple-50 text-purple-700 font-semibold border-purple-700" 
                  : "text-gray-600 border-transparent hover:bg-gray-100"
                }`
              }
            >
              {item.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}