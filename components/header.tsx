"use client"
import { useState } from 'react'
import Image from 'next/image'
import kibbleCruncherLogo from '../public/kc-logo.png'
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(prev => !prev);

  return (
    <header className="bg-yellow-100 p-4">
      
      {/* Logo */}
      <Link href="/">
        <Image 
          src={kibbleCruncherLogo}
          alt="Kibble Cruncher Logo"
          width={802/2}
          height={176/2}
        />
      </Link>





      <nav>
        <p>hello</p>
      </nav>

    </header>
  );
}   