'use client'
import { Button } from "@heroui/react";
import { Moon, ShoppingCart, Sun } from "lucide-react";
// import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

function useScrollDirection() {
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsHidden(currentScrollY > lastScrollY && currentScrollY > 64);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return isHidden;
}

export default function Navbar() {
  const isHidden = useScrollDirection();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const { theme, setTheme } = useTheme();

  return (
    <nav className={`sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg transition-transform duration-300 ${isHidden ? '-translate-y-full' : 'translate-y-0'}`}>
      <header className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          <Link href="/" className="flex items-center gap-2 select-none">
            <div className="relative h-10 w-10 flex items-center justify-center rounded-full overflow-hidden">
              <Image
                src="/logo.jpg"
                alt="Tahdith Logo"
                width={40}
                height={40}
                priority
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center leading-none">
              <p className="font-bold text-base tracking-wide uppercase">Tahdith</p>
              <span className="text-[9px] text-muted-foreground font-medium whitespace-nowrap">The Organic Way of Life</span>
            </div>
          </Link>
        </div>

        <ul className="hidden items-center gap-4 md:flex">
          <li>
            <Link href="#" className="font-semibold hover:text-green-700">Home</Link>
          </li>
          <li>
            <Link href="#" className="font-semibold hover:text-green-700">
              Products
            </Link>
          </li>
          <li>
            <Link href="#" className="font-semibold hover:text-green-700">
              About
            </Link>
          </li>
        </ul>
        {/* <div className="hidden items-center gap-4 md:flex">
          <Button variant="outline" className="hover:bg-green-600">
              <Link href="/login">Login</Link>
          </Button>
          <Button className="bg-green-600 hover:bg-green-800">
            <Link href="/signup">Sign Up</Link>
          </Button>
        </div> */}

        <Button
          variant="tertiary"
          size="lg">
            <ShoppingCart/>
        </Button>
      </header>

      {isMenuOpen && (
        <div className="border-t border-separator md:hidden">
          <ul className="flex flex-col gap-2 p-4">
            <li>
              <Link href="#" className="block py-2">
                Home
              </Link>
            </li>
            <li>
              <Link href="#" className="block py-2">
                About
              </Link>
            </li>
            <li>
              <Link href="#" className="block py-2">
                Pricing
              </Link>
            </li>
            <li className="mt-4 flex flex-col gap-2 border-t border-separator pt-4">
              <Link href="#" className="block py-2">
                Login
              </Link>
              <Button className="w-full">Sign Up</Button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}