"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, LogOut } from "lucide-react";

interface HeaderProps {
  projectName: string;
  onMenuClick: () => void;
}

export default function Header({ projectName, onMenuClick }: HeaderProps) {
  const router = useRouter();

  const handleSignOut = () => {
    router.push("/login");
  };

  return (
    <header className="fixed top-0 left-0 w-full h-16 bg-white border-b-2 border-purple-700 px-6 shadow-sm flex items-center justify-between z-50">
      <div className="flex items-center">
        <Button variant="ghost" className="p-2 h-10 w-10 md:hidden mr-4 text-purple-700" onClick={onMenuClick}>
          <Menu className="h-6 w-6" />
        </Button>

        <Link href="/dashboard" className="text-4xl font-bold text-purple-700">
          {projectName}
        </Link>
      </div>

      <div className="flex items-center space-x-4">
        <Link href="/dashboard/profile">
          <Button variant="ghost" className="text-gray-600 hover:bg-gray-100 cursor-pointer">
            Profil
          </Button>
        </Link>
        <Button
          variant="outline"
          className="text-red-600 border-gray-300 hover:bg-red-50 hover:text-red-700 cursor-pointer"
          onClick={handleSignOut}
        >
          <LogOut className="h-4 w-4 mr-2" />
          Çıkış Yap
        </Button>
      </div>
    </header>
  );
}
