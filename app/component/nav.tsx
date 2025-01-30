import Link from 'next/link';
import Image from 'next/image';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 px-12 bg-transparent absolute w-full z-10">
      {/* Logo on the left */}
      <div className="flex items-center">
        <Link href="/" className="text-xl font-bold text-black">
          <Image
            src="/JAO_Logo (1).png"
            alt="JAO Logo"
            width={120}
            height={40}
            className="object-contain"
            priority
          />
        </Link>
      </div>

      {/* Menu on the right */}
      <div className="hidden md:flex space-x-6">
        <Link href="/" className="text-black hover:text-gray-200">
          Home
        </Link>
        <Link href="/about" className="text-black hover:text-gray-200">
          About
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger className="text-black hover:text-gray-200 focus:outline-none">
            Plaque & Awards
          </DropdownMenuTrigger>
          <DropdownMenuContent className="min-w-[200px]">
            <DropdownMenuItem asChild>
              <Link href="/services/awards" className="w-full">
                Wooden Awards
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/services/awards" className="w-full">
                Glass Awards
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/services/awards" className="w-full">
                Acrylic Awards
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Link href="/contact" className="text-black hover:text-gray-200">
          Contact
        </Link>
      </div>

      {/* Mobile menu button */}
      <div className="md:hidden">
        <button className="p-2 text-black focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}
