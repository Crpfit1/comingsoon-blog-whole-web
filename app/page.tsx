"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MobileMenu } from "@/components/mobile-menu"
import {
  Play,
  Users,
  Calendar,
  MapPin,
  ArrowRight,
  Mic,
  TrendingUp,
  Globe,
  BookOpen,
  MessageCircle,
  Twitter,
  Youtube,
  Linkedin,
  Instagram,
  Mail,
  Phone,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState, useRef } from "react"

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setIsVisible(true)

    // Initialize particles
    const particles: HTMLDivElement[] = []
    const particleContainer = document.getElementById("particle-container")

    if (particleContainer) {
      // Create particles
      for (let i = 0; i < 50; i++) {
        const particle = document.createElement("div")
        particle.className = "particle"
        particle.style.setProperty("--size", `${Math.random() * 10 + 5}px`)
        particle.style.setProperty("--left", `${Math.random() * 100}%`)
        particle.style.setProperty("--top", `${Math.random() * 100}%`)
        particle.style.setProperty("--duration", `${Math.random() * 20 + 10}s`)
        particle.style.setProperty("--delay", `${Math.random() * 5}s`)
        particle.style.setProperty("--opacity", `${Math.random() * 0.5 + 0.1}`)
        particle.style.setProperty("--direction", Math.random() > 0.5 ? "1" : "-1")

        particleContainer.appendChild(particle)
        particles.push(particle)
      }
    }

    // Handle mouse movement for 3D effect
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        setMousePosition({
          x: (x / rect.width - 0.5) * 20,
          y: (y / rect.height - 0.5) * 20,
        })
      }
    }

    const heroElement = heroRef.current
    if (heroElement) {
      heroElement.addEventListener("mousemove", handleMouseMove)
    }

    return () => {
      // Clean up particles and event listeners
      particles.forEach((particle) => {
        particle.parentNode?.removeChild(particle)
      })

      if (heroElement) {
        heroElement.removeEventListener("mousemove", handleMouseMove)
      }
    }
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <Image src="/logo.png" alt="TechBlockchainAfr Logo" width={32} height={32} className="rounded-full" />
            <span className="font-bold text-lg">TechBlockchainAfr</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#accueil" className="text-sm font-medium text-orange-500">
              Accueil
            </Link>
            <Link href="#services" className="text-sm font-medium hover:text-orange-500 transition-colors">
              Services
            </Link>
            <Link href="/evenements" className="text-sm font-medium hover:text-orange-500 transition-colors">
              Événements
            </Link>
            <Link href="/equipe" className="text-sm font-medium hover:text-orange-500 transition-colors">
              Équipe
            </Link>
            <Link href="/blog" className="text-sm font-medium hover:text-orange-500 transition-colors">
              Blog
            </Link>
            <Link href="#footer" className="text-sm font-medium hover:text-orange-500 transition-colors">
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Link href="https://www.youtube.com/@techblockchainaf" target="_blank" rel="noopener noreferrer">
              <Button className="hidden md:flex bg-orange-500 hover:bg-orange-600 text-white">
                Écouter Maintenant
              </Button>
            </Link>
            <MobileMenu />
          </div>
        </div>
      </header>

      {/* NEW Hero Section with Particle Animation and 3D Effects */}
      <section
        id="accueil"
        ref={heroRef}
        className="relative py-20 lg:py-32 bg-gradient-to-br from-orange-50 to-red-50 overflow-hidden"
      >
        {/* Particle container */}
        <div id="particle-container" className="absolute inset-0 overflow-hidden pointer-events-none"></div>

        {/* Blockchain nodes animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="blockchain-nodes">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="node"
                style={{
                  left: `${20 + Math.random() * 60}%`,
                  top: `${20 + Math.random() * 60}%`,
                  animationDelay: `${i * 0.5}s`,
                  animationDuration: `${5 + Math.random() * 5}s`,
                }}
              >
                <div className="node-inner"></div>
              </div>
            ))}

            {/* Connection lines */}
            <svg className="connections" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path className="connection" d="M20,30 Q50,50 80,20" />
              <path className="connection" d="M30,70 Q50,40 70,80" />
              <path className="connection" d="M20,50 Q40,20 80,50" />
              <path className="connection" d="M40,20 Q60,80 80,60" />
            </svg>
          </div>
        </div>

        <div className="container mx-auto px-4 lg:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content with Staggered Animations */}
            <div className="space-y-8">
              <div>
                {/* Badge with float-in animation */}
                <div
                  className={`transform transition-all duration-1000 ease-out ${
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                  }`}
                  style={{ transitionDelay: "200ms" }}
                >
                  <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100 mb-4 animate-float-badge">
                    🎙️ Média #1 Blockchain Afrique Francophone
                  </Badge>
                </div>

                {/* Main Title with split letter animation */}
                <div
                  className={`transform transition-all duration-1000 ease-out ${
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                  }`}
                  style={{ transitionDelay: "400ms" }}
                >
                  <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6 split-text">
                    <span className="inline-block">La</span> <span className="inline-block">Technologie</span>{" "}
                    <span className="text-orange-500 relative inline-block">
                      <span className="glitch-text" data-text="Blockchain">
                        Blockchain
                      </span>
                      {/* Animated glitch underline */}
                      <svg
                        className="absolute -bottom-2 left-0 w-full h-3 text-orange-200 animate-glitch-underline"
                        viewBox="0 0 200 12"
                        fill="currentColor"
                      >
                        <path d="M0,8 Q50,0 100,8 T200,8 L200,12 L0,12 Z" />
                      </svg>
                    </span>{" "}
                    <span className="inline-block">en</span> <span className="inline-block">Afrique</span>{" "}
                    <span className="inline-block">Francophone</span>
                  </h1>
                </div>

                {/* Description with reveal animation */}
                <div
                  className={`transform transition-all duration-1000 ease-out ${
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                  }`}
                  style={{ transitionDelay: "600ms" }}
                >
                  <p className="text-xl text-gray-600 leading-relaxed reveal-text">
                    Découvrez l'univers passionnant de la blockchain, des cryptomonnaies et du Web3 à travers notre
                    média éducatif. Interviews d'experts, analyses de marché, événements et guides pratiques pour
                    démocratiser l'accès aux technologies blockchain en Afrique francophone par les acteurs du
                    continent.
                  </p>
                </div>
              </div>

              {/* Buttons with pulse animation */}
              <div
                className={`flex flex-col sm:flex-row gap-4 transform transition-all duration-1000 ease-out ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: "800ms" }}
              >
                <Link href="https://www.youtube.com/@techblockchainaf" target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    className="bg-orange-500 hover:bg-orange-600 text-white hover:scale-105 transition-all duration-300 hover:shadow-lg animate-pulse-subtle"
                  >
                    <Play className="w-5 h-5 mr-2 animate-pulse" />
                    Écouter Maintenant
                  </Button>
                </Link>
                <Link href="/evenements">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-orange-500 text-orange-500 hover:bg-orange-50 bg-transparent hover:scale-105 transition-all duration-300 animate-border-pulse"
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Nos Événements
                  </Button>
                </Link>
              </div>

              {/* Stats with counter animation */}
              <div
                className={`grid grid-cols-3 gap-8 pt-8 border-t border-gray-200 transform transition-all duration-1000 ease-out ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: "1000ms" }}
              >
                <div className="group hover:scale-110 transition-transform duration-300">
                  <div className="text-2xl font-bold text-gray-900 counter" data-target="50">
                    +50
                  </div>
                  <div className="text-sm text-gray-600">Épisodes</div>
                </div>
                <div className="group hover:scale-110 transition-transform duration-300">
                  <div className="text-2xl font-bold text-gray-900 counter" data-target="10000">
                    +1,000
                  </div>
                  <div className="text-sm text-gray-600">Auditeurs</div>
                </div>
                <div className="group hover:scale-110 transition-transform duration-300">
                  <div className="text-2xl font-bold text-gray-900 counter" data-target="15">
                    +15
                  </div>
                  <div className="text-sm text-gray-600">Événements</div>
                </div>
              </div>
            </div>

            {/* Right Image with 3D Perspective Animation */}
            <div
              className="relative perspective-container"
              style={{
                transform: `rotateY(${mousePosition.x * 0.05}deg) rotateX(${-mousePosition.y * 0.05}deg)`,
              }}
            >
              {/* Main image with 3D effect */}
              <div
                className={`relative z-10 transform transition-all duration-1200 ease-out ${
                  isVisible ? "translate-z-0 opacity-100" : "translate-z-[-100px] opacity-0"
                }`}
                style={{
                  transitionDelay: "600ms",
                  transform: `translateZ(50px) rotateY(${mousePosition.x * 0.02}deg) rotateX(${-mousePosition.y * 0.02}deg)`,
                }}
              >
                <div className="relative group">
                  <Image
                    src="/hero-section.png"
                    alt="TechBlockchainAfr Hero"
                    width={600}
                    height={400}
                    className="rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Floating elements with 3D positioning */}
                  <div
                    className="absolute -top-4 -right-4 w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center animate-float-3d"
                    style={{
                      transform: `translateZ(80px) rotateY(${-mousePosition.x * 0.1}deg) rotateX(${mousePosition.y * 0.1}deg)`,
                    }}
                  >
                    <Mic className="w-8 h-8 text-white" />
                  </div>

                  <div
                    className="absolute -bottom-4 -left-4 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center animate-float-3d-reverse"
                    style={{
                      transform: `translateZ(100px) rotateY(${-mousePosition.x * 0.15}deg) rotateX(${mousePosition.y * 0.15}deg)`,
                    }}
                  >
                    <Play className="w-6 h-6 text-white" />
                  </div>

                  {/* Blockchain cube */}
                  <div
                    className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2"
                    style={{
                      transform: `translateZ(120px) translateX(50%) translateY(-50%) rotateY(${mousePosition.x * 0.2}deg) rotateX(${-mousePosition.y * 0.2}deg)`,
                    }}
                  >
                    <div className="cube">
                      <div className="cube-face cube-face-front"></div>
                      <div className="cube-face cube-face-back"></div>
                      <div className="cube-face cube-face-right"></div>
                      <div className="cube-face cube-face-left"></div>
                      <div className="cube-face cube-face-top"></div>
                      <div className="cube-face cube-face-bottom"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Animated 3D layers */}
              <div
                className={`absolute -top-4 -right-4 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 transition-all duration-2000 ${
                  isVisible ? "animate-blob-3d" : "scale-0"
                }`}
                style={{
                  transitionDelay: "800ms",
                  transform: `translateZ(20px) rotateY(${mousePosition.x * 0.03}deg) rotateX(${-mousePosition.y * 0.03}deg)`,
                }}
              ></div>
              <div
                className={`absolute -bottom-8 -left-4 w-72 h-72 bg-red-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 transition-all duration-2000 ${
                  isVisible ? "animate-blob-3d animation-delay-2000" : "scale-0"
                }`}
                style={{
                  transitionDelay: "1000ms",
                  transform: `translateZ(10px) rotateY(${mousePosition.x * 0.02}deg) rotateX(${-mousePosition.y * 0.02}deg)`,
                }}
              ></div>
              <div
                className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-50 transition-all duration-2000 ${
                  isVisible ? "animate-blob-3d animation-delay-4000" : "scale-0"
                }`}
                style={{
                  transitionDelay: "1200ms",
                  transform: `translateZ(30px) rotateY(${mousePosition.x * 0.04}deg) rotateX(${-mousePosition.y * 0.04}deg)`,
                }}
              ></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "1400ms" }}
        >
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-orange-500 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-orange-500 rounded-full mt-2 animate-scroll-indicator"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of the page content remains the same */}
      {/* Services Section */}
      <section id="services" className="py-20 lg:py-32">
        {/* Content remains the same */}
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100 mb-4">🚀 Nos Services</Badge>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Ce Que Nous <span className="text-orange-500">Offrons</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une gamme complète de services pour vous accompagner dans votre découverte et maîtrise des technologies
              blockchain.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                  <Mic className="w-6 h-6 text-orange-500 group-hover:text-white" />
                </div>
                <CardTitle className="text-xl">Podcast Éducatif</CardTitle>
                <CardDescription>
                  Épisodes hebdomadaires avec des experts, analyses de marché et guides pratiques pour tous les niveaux.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-500 group-hover:text-white transition-colors">
                  <Users className="w-6 h-6 text-green-500 group-hover:text-white" />
                </div>
                <CardTitle className="text-xl">Événements & Meetups</CardTitle>
                <CardDescription>
                  Conférences, workshops et meetups à travers l'Afrique francophone pour rassembler la communauté.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-purple-500 group-hover:text-white transition-colors">
                  <BookOpen className="w-6 h-6 text-purple-500 group-hover:text-white" />
                </div>
                <CardTitle className="text-xl">Formation & Éducation</CardTitle>
                <CardDescription>
                  Ressources éducatives, guides débutants et formations pour démocratiser l'accès à la blockchain.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                  <TrendingUp className="w-6 h-6 text-blue-500 group-hover:text-white" />
                </div>
                <CardTitle className="text-xl">Analyses de Marché</CardTitle>
                <CardDescription>
                  Analyses approfondies des tendances crypto et blockchain avec un focus sur le marché africain.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-red-500 group-hover:text-white transition-colors">
                  <MessageCircle className="w-6 h-6 text-red-500 group-hover:text-white" />
                </div>
                <CardTitle className="text-xl">Communauté Active</CardTitle>
                <CardDescription>
                  Rejoignez notre communauté dynamique sur WhatsApp, LinkedIn et nos réseaux sociaux.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-yellow-500 group-hover:text-white transition-colors">
                  <Globe className="w-6 h-6 text-yellow-500 group-hover:text-white" />
                </div>
                <CardTitle className="text-xl">Réseau Francophone</CardTitle>
                <CardDescription>
                  Un pont entre les écosystèmes blockchain d'Afrique francophone et le reste du monde.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Events Section - Updated with only upcoming events */}
      <section className="py-20 lg:py-32 bg-gray-50">
        {/* Content remains the same */}
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <Badge className="bg-green-100 text-green-700 hover:bg-green-100 mb-4">📅 Événements à Venir</Badge>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Nos Prochains <span className="text-orange-500">Événements</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Rejoignez-nous lors de nos prochains événements blockchain à travers l'Afrique francophone.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Africa Trading Cup */}
            <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative">
                <div className="w-full h-48 bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center">
                  <Image
                    src="/africa-trading-cup-logo.jpeg"
                    alt="Africa Trading Cup 2025"
                    width={120}
                    height={120}
                    className="object-contain"
                  />
                </div>
                <div className="absolute top-4 left-4">
                  <Badge className="bg-green-500 text-white">Compétition</Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  04 Juillet 2025
                  <MapPin className="w-4 h-4 ml-4 mr-2" />
                  Côte d'Ivoire
                </div>
                <h3 className="text-xl font-bold mb-3">Africa Trading Cup 2025</h3>
                <p className="text-gray-600 mb-4">
                  Première compétition de trading crypto en Afrique. Éducation financière et sensibilisation aux
                  opportunités du trading.
                </p>
                <Link
                  href="https://www.eventbrite.com/e/africa-trading-cup-2025-tickets-1417808275719"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                    S'inscrire sur Eventbrite
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Stellar Meetup Abidjan */}
            <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative">
                <Image
                  src="/stellar-meetup-abidjan.jpeg"
                  alt="Stellar Meetup Abidjan N°2"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-yellow-500 text-white">Meetup</Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  19 Juillet 2025
                  <MapPin className="w-4 h-4 ml-4 mr-2" />
                  Abidjan, Riviera
                </div>
                <h3 className="text-xl font-bold mb-3">Stellar Meetup Abidjan N°2</h3>
                <p className="text-gray-600 mb-4">
                  Construire, connecter et innover sur Stellar. Workshop pratique sur l'écosystème Stellar et les smart
                  contracts Soroban.
                </p>
                <Link href="https://lu.ma/7h45yfc9" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                    S'inscrire sur Luma
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* 10 Years of Ethereum */}
            <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative">
                <Image
                  src="/ethereum-10-years-cote-divoire.png"
                  alt="10 Ans d'Anniversaire de Ethereum"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-blue-500 text-white">Anniversaire</Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  30 Juillet 2025
                  <MapPin className="w-4 h-4 ml-4 mr-2" />
                  Abidjan, Riviera
                </div>
                <h3 className="text-xl font-bold mb-3">10 Ans d'Anniversaire de Ethereum</h3>
                <p className="text-gray-600 mb-4">
                  Célébrons ensemble les 10 ans d'Ethereum en Côte d'Ivoire. Présentations, networking et
                  rafraîchissements offerts.
                </p>
                <Link
                  href="https://app.unlock-protocol.com/event/meetup-les-10-ans-d-anniversaire-d-ethereum"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                    Réserver sa place
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Link href="/evenements">
              <Button
                size="lg"
                variant="outline"
                className="border-orange-500 text-orange-500 hover:bg-orange-50 bg-transparent"
              >
                Voir Tous les Événements
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-white border-t border-gray-100">
        {/* Content remains the same */}
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 mb-4">🤝 Nos Partenaires</Badge>
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">
              Ils Nous Font <span className="text-orange-500">Confiance</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Découvrez les organisations qui soutiennent notre mission de démocratisation de la blockchain en Afrique
              francophone.
            </p>
          </div>

          {/* Auto-sliding Partners */}
          <div className="relative overflow-hidden">
            <div className="flex animate-slide-left">
              {/* First set of partners */}
              <div className="flex items-center justify-center min-w-[200px] px-8">
                <Image
                  src="/Africa Web3 Academy.png"
                  alt="Africa Web3 Academy"
                  width={200}
                  height={120}
                  className="object-contain filter grayscale hover:grayscale-0 transition-all duration-200"
                />
              </div>
              <div className="flex items-center justify-center min-w-[200px] px-8">
                <Image
                  src="/Bit Trading Edu.png"
                  alt="Bit Trading Edu"
                  width={200}
                  height={120}
                  className="object-contain filter grayscale hover:grayscale-0 transition-all duration-3200"
                />
              </div>
              <div className="flex items-center justify-center min-w-[200px] px-8">
                <Image
                  src="/Jelisvoscvpcom.jpg"
                  alt="Jelisvoscv.com"
                  width={200}
                  height={120}
                  className="object-contain filter grayscale hover:grayscale-0 transition-all duration-200"
                />
              </div>
              <div className="flex items-center justify-center min-w-[200px] px-8">
                <Image
                  src="/PizzaDAO Black.png"
                  alt="PizzaDAO"
                  width={200}
                  height={120}
                  className="object-contain filter grayscale hover:grayscale-0 transition-all duration-200"
                />
              </div>
              <div className="flex items-center justify-center min-w-[200px] px-8">
                <Image
                  src="/Stellar Logo Final RGB.png"
                  alt="Stellar"
                  width={200}
                  height={120}
                  className="object-contain filter grayscale hover:grayscale-0 transition-all duration-200"
                />
              </div>
              {/* Duplicate set for seamless loop */}
              <div className="flex items-center justify-center min-w-[300px] px-8">
                <Image
                  src="/Africa Web3 Academy.png"
                  alt="Africa Web3 Academy"
                  width={200}
                  height={120}
                  className="object-contain filter grayscale hover:grayscale-0 transition-all duration-200"
                />
              </div>
              <div className="flex items-center justify-center min-w-[300px] px-8">
                <Image
                  src="/Bit Trading Edu.png"
                  alt="Bit Trading Edu"
                  width={200}
                  height={120}
                  className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="flex items-center justify-center min-w-[300px] px-8">
                <Image
                  src="/Jelisvoscvpcom.jpg"
                  alt="Jelisvoscv.com"
                  width={200}
                  height={120}
                  className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="flex items-center justify-center min-w-[300px] px-8">
                <Image
                  src="/PizzaDAO Black.png"
                  alt="PizzaDAO"
                  width={200}
                  height={120}
                  className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="flex items-center justify-center min-w-[300px] px-8">
                <Image
                  src="/Stellar Logo Final RGB.png"
                  alt="Stellar"
                  width={200}
                  height={120}
                  className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of the sections remain the same */}
      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-r from-orange-500 to-red-500">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Rejoignez Notre Communauté</h2>
            <p className="text-xl text-orange-100 mb-8 leading-relaxed">
              Connectez-vous avec la communauté blockchain francophone. Suivez-nous sur nos réseaux sociaux pour ne rien
              manquer de l'actualité blockchain en Afrique.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="https://www.youtube.com/@techblockchainaf" target="_blank" rel="noopener noreferrer">
                <Button className="bg-white text-orange-500 hover:bg-orange-50 font-semibold px-8">
                  <Youtube className="w-5 h-5 mr-2" />
                  Écouter le Podcast
                </Button>
              </Link>
              <Link
                href="https://whatsapp.com/channel/0029Vao6uuXDuMRXaIQPqb16"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-orange-500 bg-transparent"
                >
                  Rejoindre WhatsApp
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 mb-4">👥 Notre Équipe</Badge>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              L'Équipe <span className="text-orange-500">TechBlockchainAfr</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Rencontrez les passionnés qui rendent possible la démocratisation de la blockchain en Afrique francophone.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <Avatar className="w-24 h-24 mx-auto mb-6">
                  <AvatarImage src="/frame-ayemou.png" alt="Ayémou Loïc" />
                  <AvatarFallback>AL</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-bold mb-2">Ayémou Loïc</h3>
                <p className="text-orange-500 font-medium mb-3">Founder</p>
                <p className="text-gray-600 text-sm">Blockchain Project Manager / Smart Contract Developer</p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <Avatar className="w-24 h-24 mx-auto mb-6">
                  <AvatarImage src="/frame-patrick.png" alt="Patrick Yeboue" />
                  <AvatarFallback>PY</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-bold mb-2">Patrick Yeboue</h3>
                <p className="text-orange-500 font-medium mb-3">Blockchain & DeFi Project Manager</p>
                <p className="text-gray-600 text-sm">Spécialiste en analyse technique et expert en DeFi</p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <Avatar className="w-24 h-24 mx-auto mb-6">
                  <AvatarImage src="/frame-michel.png" alt="Michel Djè Bi" />
                  <AvatarFallback>MK</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-bold mb-2">Michel Djè Bi</h3>
                <p className="text-orange-500 font-medium mb-3">Digital Marketing Manager</p>
                <p className="text-gray-600 text-sm">Founder de Jelisvoscv.com</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Link href="/equipe">
              <Button
                size="lg"
                variant="outline"
                className="border-orange-500 text-orange-500 hover:bg-orange-50 bg-transparent"
              >
                Découvrir l'Équipe Complète
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Image src="/logo.png" alt="TechBlockchainAfr Logo" width={32} height={32} className="rounded-full" />
                <span className="font-bold text-lg">TechBlockchainAfr</span>
              </div>
              <p className="text-gray-400 mb-6">
                La référence podcast blockchain en Afrique francophone. Éducation, innovation et communauté au cœur de
                notre mission.
              </p>
              <div className="flex space-x-4">
                <Link
                  href="https://x.com/tech_blockaf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </Link>
                <Link
                  href="https://www.facebook.com/share/19JWe3NEpJ/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </Link>
                <Link
                  href="https://www.youtube.com/@techblockchainaf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors"
                >
                  <Youtube className="w-5 h-5" />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/techblockchainaf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </Link>
                <Link
                  href="https://www.instagram.com/techblockchainafr?igsh=MTEzZjliMGc4eHdxOA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </Link>
                <Link
                  href="https://www.tiktok.com/@techblockchainafr1?_t=ZS-8xRbxM0xAHa&_r=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                  </svg>
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-6">Contenu</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="https://www.youtube.com/@techblockchainaf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-orange-500 transition-colors"
                  >
                    Tous les Podcasts
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://youtu.be/zHDL3QFrfUo?si=qOHORr0tqkBpNj6J"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-orange-500 transition-colors"
                  >
                    Épisodes Récents
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                    Interviews Exclusives
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://calendar.app.google/MksninUEWKQTgaht7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-orange-500 transition-colors"
                  >
                    Analyses de Marché
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://icmjjcmu.mychariow.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-orange-500 transition-colors"
                  >
                    Guides Débutants
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-6">Communauté</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="https://www.linkedin.com/company/techblockchainaf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-orange-500 transition-colors"
                  >
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://whatsapp.com/channel/0029Vao6uuXDuMRXaIQPqb16"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-orange-500 transition-colors"
                  >
                    WhatsApp
                  </Link>
                </li>
                <li>
                  <Link href="/evenements" className="text-gray-400 hover:text-orange-500 transition-colors">
                    Événements
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                    Meetups
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                    Partenariats
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-6">Contact</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-orange-500" />
                  <span className="text-gray-400 text-sm">technologieblockchainafriquefr@gmail.com</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-orange-500" />
                  <span className="text-gray-400">+225 0758473042</span>
                </li>
                <li className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-orange-500 mt-1" />
                  <span className="text-gray-400">Abidjan, Côte d'Ivoire</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} TechBlockchainAfr. Tous droits réservés.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-orange-500 text-sm transition-colors">
                Politique de Confidentialité
              </Link>
              <Link href="#" className="text-gray-400 hover:text-orange-500 text-sm transition-colors">
                Conditions d'Utilisation
              </Link>
              <Link href="#" className="text-gray-400 hover:text-orange-500 text-sm transition-colors">
                Mentions Légales
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Custom Styles for Animations */}
      <style jsx>{`
        /* Base animations */
        @keyframes slide-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        /* Particle animations */
        .particle {
          position: absolute;
          width: var(--size);
          height: var(--size);
          background: linear-gradient(135deg, rgba(255, 165, 0, 0.4), rgba(255, 69, 0, 0.4));
          border-radius: 50%;
          top: var(--top);
          left: var(--left);
          opacity: var(--opacity);
          animation: float-particle var(--duration) ease-in-out infinite;
          animation-delay: var(--delay);
          filter: blur(1px);
          z-index: 1;
        }
        
        @keyframes float-particle {
          0%, 100% {
            transform: translateY(0) translateX(0) rotate(0deg);
          }
          33% {
            transform: translateY(calc(-30px * var(--direction))) translateX(20px) rotate(120deg);
          }
          66% {
            transform: translateY(calc(15px * var(--direction))) translateX(-10px) rotate(240deg);
          }
        }
        
        /* 3D perspective container */
        .perspective-container {
          perspective: 1000px;
          transform-style: preserve-3d;
          transition: transform 0.3s ease-out;
        }
        
        /* Blockchain nodes */
        .blockchain-nodes {
          position: absolute;
          inset: 0;
          z-index: 1;
        }
        
        .node {
          position: absolute;
          width: 20px;
          height: 20px;
          background: rgba(255, 165, 0, 0.2);
          border: 1px solid rgba(255, 165, 0, 0.5);
          border-radius: 50%;
          animation: pulse-node 3s infinite;
        }
        
        .node-inner {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 10px;
          height: 10px;
          background: rgba(255, 165, 0, 0.5);
          border-radius: 50%;
        }
        
        .connections {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          z-index: 0;
        }
        
        .connection {
          fill: none;
          stroke: rgba(255, 165, 0, 0.2);
          stroke-width: 0.5;
          stroke-dasharray: 5;
          animation: dash 10s linear infinite;
        }
        
        @keyframes dash {
          to {
            stroke-dashoffset: 1000;
          }
        }
        
        @keyframes pulse-node {
          0%, 100% {
            transform: scale(1);
            opacity: 0.7;
          }
          50% {
            transform: scale(1.2);
            opacity: 1;
          }
        }
        
        /* Text animations */
        .split-text span {
          display: inline-block;
          opacity: 0;
          transform: translateY(20px);
          animation: reveal-text 0.8s forwards;
        }
        
        .split-text span:nth-child(1) { animation-delay: 0.1s; }
        .split-text span:nth-child(2) { animation-delay: 0.2s; }
        .split-text span:nth-child(3) { animation-delay: 0.3s; }
        .split-text span:nth-child(4) { animation-delay: 0.4s; }
        .split-text span:nth-child(5) { animation-delay: 0.5s; }
        .split-text span:nth-child(6) { animation-delay: 0.6s; }
        
        @keyframes reveal-text {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        /* Glitch text effect */
        .glitch-text {
          position: relative;
          animation: glitch 5s infinite;
        }
        
        .glitch-text::before,
        .glitch-text::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0.8;
        }
        
        .glitch-text::before {
          color: #ff7e5f;
          z-index: -1;
          animation: glitch-anim 3s infinite;
        }
        
        .glitch-text::after {
          color: #feb47b;
          z-index: -2;
          animation: glitch-anim2 4s infinite;
        }
        
        @keyframes glitch {
          0%, 40%, 44%, 58%, 61%, 65%, 69%, 73%, 100% {
            transform: skewX(0deg);
          }
          41% {
            transform: skewX(10deg);
          }
          42% {
            transform: skewX(-10deg);
          }
          59% {
            transform: skewX(40deg) skewY(10deg);
          }
          60% {
            transform: skewX(-40deg) skewY(-10deg);
          }
          63% {
            transform: skewX(10deg) skewY(-5deg);
          }
          70% {
            transform: skewX(-50deg) skewY(-20deg);
          }
          71% {
            transform: skewX(10deg) skewY(-10deg);
          }
        }
        
        @keyframes glitch-anim {
          0%, 100% {
            transform: translate(0);
          }
          20% {
            transform: translate(-3px, 3px);
          }
          40% {
            transform: translate(-3px, -3px);
          }
          60% {
            transform: translate(3px, 3px);
          }
          80% {
            transform: translate(3px, -3px);
          }
        }
        
        @keyframes glitch-anim2 {
          0%, 100% {
            transform: translate(0);
          }
          20% {
            transform: translate(3px, -3px);
          }
          40% {
            transform: translate(3px, 3px);
          }
          60% {
            transform: translate(-3px, -3px);
          }
          80% {
            transform: translate(-3px, 3px);
          }
        }
        
        /* Reveal text animation */
        .reveal-text {
          position: relative;
          color: transparent;
          animation: reveal-content 1s 0.6s forwards;
        }
        
        .reveal-text::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 0;
          height: 100%;
          background: #ff7e5f;
          animation: reveal-text-before 1.5s cubic-bezier(0.77, 0, 0.18, 1) forwards;
        }
        
        @keyframes reveal-content {
          to {
            color: inherit;
          }
        }
        
        @keyframes reveal-text-before {
          0% {
            width: 0;
            left: 0;
          }
          50% {
            width: 100%;
            left: 0;
          }
          100% {
            width: 0;
            left: 100%;
          }
        }
        
        /* 3D Cube */
        .cube {
          position: relative;
          width: 40px;
          height: 40px;
          transform-style: preserve-3d;
          animation: rotate-cube 10s infinite linear;
        }
        
        .cube-face {
          position: absolute;
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, rgba(255, 165, 0, 0.8), rgba(255, 69, 0, 0.8));
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .cube-face-front { transform: rotateY(0deg) translateZ(20px); }
        .cube-face-back { transform: rotateY(180deg) translateZ(20px); }
        .cube-face-right { transform: rotateY(90deg) translateZ(20px); }
        .cube-face-left { transform: rotateY(-90deg) translateZ(20px); }
        .cube-face-top { transform: rotateX(90deg) translateZ(20px); }
        .cube-face-bottom { transform: rotateX(-90deg) translateZ(20px); }
        
        @keyframes rotate-cube {
          0% {
            transform: rotateX(0deg) rotateY(0deg);
          }
          100% {
            transform: rotateX(360deg) rotateY(360deg);
          }
        }
        
        /* Floating animations */
        @keyframes float-badge {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes float-3d {
          0%, 100% {
            transform: translateY(0px) rotateZ(0deg);
          }
          50% {
            transform: translateY(-20px) rotateZ(5deg);
          }
        }
        
        @keyframes float-3d-reverse {
          0%, 100% {
            transform: translateY(0px) rotateZ(0deg);
          }
          50% {
            transform: translateY(15px) rotateZ(-5deg);
          }
        }
        
        /* Blob animations */
        @keyframes blob-3d {
          0% {
            transform: translate(0px, 0px) scale(1) rotateZ(0deg);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1) rotateZ(120deg);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9) rotateZ(240deg);
          }
          100% {
            transform: translate(0px, 0px) scale(1) rotateZ(360deg);
          }
        }
        
        /* Pulse animations */
        @keyframes pulse-subtle {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(255, 165, 0, 0.4);
          }
          50% {
            box-shadow: 0 0 0 10px rgba(255, 165, 0, 0);
          }
        }
        
        @keyframes border-pulse {
          0%, 100% {
            border-color: rgba(255, 165, 0, 1);
            box-shadow: 0 0 0 0 rgba(255, 165, 0, 0.4);
          }
          50% {
            border-color: rgba(255, 165, 0, 0.8);
            box-shadow: 0 0 0 5px rgba(255, 165, 0, 0);
          }
        }
        
        /* Scroll indicator */
        @keyframes scroll-indicator {
          0% {
            opacity: 0;
            transform: translateY(-10px);
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translateY(10px);
          }
        }
        
        /* Counter animation */
        .counter {
          animation: count-up 2s ease-out forwards;
        }
        
        /* Glitch underline */
        @keyframes glitch-underline {
          0%, 100% {
            transform: scaleX(1);
          }
          50% {
            transform: scaleX(1.1) skewX(10deg);
          }
        }
        
        /* Utility classes */
        .animate-slide-left {
          animation: slide-left 30s linear infinite;
        }
        
        .animate-float-badge {
          animation: float-badge 3s ease-in-out infinite;
        }
        
        .animate-float-3d {
          animation: float-3d 4s ease-in-out infinite;
        }
        
        .animate-float-3d-reverse {
          animation: float-3d-reverse 3s ease-in-out infinite;
        }
        
        .animate-blob-3d {
          animation: blob-3d 20s infinite;
        }
        
        .animate-pulse-subtle {
          animation: pulse-subtle 2s infinite;
        }
        
        .animate-border-pulse {
          animation: border-pulse 2s infinite;
        }
        
        .animate-scroll-indicator {
          animation: scroll-indicator 2s infinite;
        }
        
        .animate-glitch-underline {
          animation: glitch-underline 3s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  )
}
