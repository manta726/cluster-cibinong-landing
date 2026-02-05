'use client'

import { useState } from 'react'
import { Menu, X, Home } from 'lucide-react'
import Link from 'next/link'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition">
            <div className="bg-primary text-primary-foreground p-2 rounded-lg">
              <Home size={20} />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Laman Davindo Property
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="#features" className="text-foreground/70 hover:text-foreground font-medium transition">
              Keunggulan
            </Link>
            <Link href="#units" className="text-foreground/70 hover:text-foreground font-medium transition">
              Unit
            </Link>
            <Link href="/progress" className="text-foreground/70 hover:text-foreground font-medium transition">
              Progress
            </Link>
            <Link href="#faq" className="text-foreground/70 hover:text-foreground font-medium transition">
              FAQ
            </Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="#form">
              <button className="px-6 py-2.5 rounded-full font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition shadow-lg shadow-primary/20 transform hover:-translate-y-0.5">
                Konsultasi Gratis
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground hover:text-primary transition"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-border bg-white absolute w-full left-0 right-0 shadow-xl">
            <div className="px-4 pt-4 pb-6 space-y-3">
              <Link
                href="#features"
                className="block px-4 py-2.5 text-foreground/70 hover:bg-primary/10 rounded-lg transition font-medium"
                onClick={() => setIsOpen(false)}
              >
                Keunggulan
              </Link>
              <Link
                href="#units"
                className="block px-4 py-2.5 text-foreground/70 hover:bg-primary/10 rounded-lg transition font-medium"
                onClick={() => setIsOpen(false)}
              >
                Unit
              </Link>
              <Link
                href="/progress"
                className="block px-4 py-2.5 text-foreground/70 hover:bg-primary/10 rounded-lg transition font-medium"
                onClick={() => setIsOpen(false)}
              >
                Progress
              </Link>
              <Link
                href="#faq"
                className="block px-4 py-2.5 text-foreground/70 hover:bg-primary/10 rounded-lg transition font-medium"
                onClick={() => setIsOpen(false)}
              >
                FAQ
              </Link>
              <div className="pt-4 flex flex-col gap-2">
                <Link href="#form" onClick={() => setIsOpen(false)}>
                  <button className="w-full px-4 py-3 rounded-lg font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition">
                    Konsultasi Gratis
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
