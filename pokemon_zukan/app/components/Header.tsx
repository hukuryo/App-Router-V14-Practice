import React from "react";

export default function Header() {
  return (
    <header className="bg-slate-500 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-semibold">ポケモン図鑑</div>
        <nav className="space-x-4">
          <a href="/" className="hover:underline">
            Home
          </a>
          <a href="monsterList" className="hover:underline">
            monsterList
          </a>
          <a href="#" className="hover:underline">
            Services
          </a>
          <a href="#" className="hover:underline">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
