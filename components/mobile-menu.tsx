"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function MobileMenu() {
  const [open, setOpen] = useState(false)

  const menuItems = [
    { href: "/", label: "Accueil" },
    { href: "/#services", label: "Services" },
    { href: "/evenements", label: "Événements" },
    { href: "/blog", label: "Blog" },
    { href: "/equipe", label: "Équipe" },
    { href: "/#footer", label: "Contact" },
  ]

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Ouvrir le menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center space-x-3 mb-8 pb-6 border-b">
            <Image
              src="/images/logo.png"
              alt="TechBlockchainAfr Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="font-bold text-lg">TechBlockchainAfr</span>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col space-y-4 flex-1">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-lg font-medium py-3 px-4 rounded-lg hover:bg-orange-50 hover:text-orange-500 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="pt-6 border-t">
            <Link
              href="https://www.youtube.com/@techblockchainaf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
            >
              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Écouter Maintenant</Button>
            </Link>
          </div>

          {/* Social Links */}
          <div className="pt-4">
            <p className="text-sm text-gray-500 mb-3">Suivez-nous</p>
            <div className="flex space-x-4">
              <Link
                href="https://www.youtube.com/@techblockchainaf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 transition-colors"
              >
                YouTube
              </Link>
              <Link
                href="https://whatsapp.com/channel/0029Vao6uuXDuMRXaIQPqb16"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 transition-colors"
              >
                WhatsApp
              </Link>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
