"use client"
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import kibbleCruncherLogo from '../public/kc-logo.png'
import menuClosed from '../public/menu-closed.svg'
import menuOpen from '../public/menu-open.svg'

export default function Header() {
  const pathname = usePathname();
  console.log(pathname)
  const [isMenuOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(prev => !prev);

  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' }
  ];

  return (
    <header className="bg-blue-400 w-full md:w-9/10 md:mt-8 justify-self-center md:rounded-lg shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">

          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-gray-800">
              <Image 
                src={kibbleCruncherLogo}
                alt="Kibble Cruncher Logo"
                width={802/2}
                height={176/2}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-4">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={` hover:text-gray-800 px-3 py-2 rounded-md text-sm font-bold  ${pathname === item.href ? 'text-gray-800 underline underline-offset-4 decoration-3' : 'text-white'}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden pl-6">
            <button 
              onClick={toggleMenu}
            >
              {isMenuOpen ? <Image src={menuClosed} alt='Close Menu' /> :  <Image src={menuOpen} alt='Open Menu' /> }
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div 
          className={`
            md:hidden 
            overflow-hidden 
            transition-all 
            duration-300 
            ease-in-out 
            ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}
          `}
        >
            <div className="px-3 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`
                    block
                    px-3
                    py-2
                    rounded-md 
                    text-base 
                    font-bold 
                    text-right
                    ${pathname === item.href ? 'text-gray-800 underline underline-offset-4 decoration-3' : 'text-white'}
                    `}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
      </div>
    </header>
  );
};
