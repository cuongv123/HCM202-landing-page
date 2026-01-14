"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-orange-600 to-orange-500 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between md:grid md:grid-cols-3 md:gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-12 h-12 bg-white p-1 rounded-lg">
              <Image
                src="/images/logo_fpt.jpg"
                alt="Logo FPT"
                fill
                className="object-contain"
              />
            </div>
            <div className="text-white">
              <div className="text-lg font-bold">TRƯỜNG ĐẠI HỌC FPT</div>
            </div>
          </Link>

          {/* Desktop Menu - Centered */}
          <nav className="hidden md:flex items-center justify-center gap-8">
            <Link
              href="/"
              className="text-white font-semibold hover:text-yellow-200 transition-colors"
            >
              Trang chủ
            </Link>
            <Link
              href="/content"
              className="text-white font-semibold hover:text-yellow-200 transition-colors"
            >
              Nội dung
            </Link>
            <Link
              href="/quiz"
              className="text-white font-semibold hover:text-yellow-200 transition-colors"
            >
              Quiz
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          
          {/* Empty div for grid layout balance on desktop */}
          <div className="hidden md:block"></div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-2">
            <Link
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className="block w-full text-left text-white font-semibold py-2 hover:text-yellow-200 transition-colors"
            >
              Trang chủ
            </Link>
            <Link
              href="/content"
              onClick={() => setIsMenuOpen(false)}
              className="block w-full text-left text-white font-semibold py-2 hover:text-yellow-200 transition-colors"
            >
              Nội dung
            </Link>
            <Link
              href="/quiz"
              onClick={() => setIsMenuOpen(false)}
              className="block w-full text-left text-white font-semibold py-2 hover:text-yellow-200 transition-colors"
            >
              Quiz
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
