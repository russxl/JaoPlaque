import { FaFacebook , FaTiktok,FaInstagram} from "react-icons/fa";
import Image from 'next/image';
import { SiShopee } from "react-icons/si";
import Link from "next/link";

  
export default function Footer() {
  return (
    <footer className="bg-background py-4">
    <div className="px-12 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-12">
       
        {/* Company Credit */}
        <div className="text-center md:text-right px-4">
          <p className="text-muted-foreground">
            © 2023 Jao Plaque Awards. All rights reserved.
          </p>
        </div>

        {/* Logo in the middle */}
        <div className="flex justify-center px-4">
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

         {/* Social Media Icons */}
         <div className="flex justify-center  space-x-6">
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            <FaInstagram className="w-6 h-6" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            <FaFacebook className="w-6 h-6" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            <SiShopee className="w-6 h-6" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            <FaTiktok className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  </footer>
  );
}