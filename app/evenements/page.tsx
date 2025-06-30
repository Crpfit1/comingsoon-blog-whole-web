"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MobileMenu } from "@/components/mobile-menu"
import {
  Calendar,
  MapPin,
  Users,
  Clock,
  ExternalLink,
  ArrowRight,
  Twitter,
  Youtube,
  Linkedin,
  Instagram,
  Mail,
  Phone,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function EvenementsPage() {
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
            <Link href="/" className="text-sm font-medium hover:text-orange-500 transition-colors">
              Accueil
            </Link>
            <Link href="/#services" className="text-sm font-medium hover:text-orange-500 transition-colors">
              Services
            </Link>
            <Link href="/evenements" className="text-sm font-medium text-orange-500">
              Événements
            </Link>
            <Link href="/equipe" className="text-sm font-medium hover:text-orange-500 transition-colors">
              Équipe
            </Link>
            <Link href="/blog" className="text-sm font-medium hover:text-orange-500 transition-colors">
              Blog
            </Link>
            <Link href="/#footer" className="text-sm font-medium hover:text-orange-500 transition-colors">
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

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100 mb-6">
              📅 Événements TechBlockchainAfr
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              Nos <span className="text-orange-500">Événements</span> Blockchain
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Découvrez tous nos événements passés et à venir : conférences, meetups, workshops et formations blockchain
              à travers l'Afrique francophone.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500">15+</div>
                <div className="text-sm text-gray-600">Événements Organisés</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500">250+</div>
                <div className="text-sm text-gray-600">Participants Total</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500">3</div>
                <div className="text-sm text-gray-600">Villes Visitées</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500">50+</div>
                <div className="text-sm text-gray-600">Speakers Invités</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Tabs Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-6">
          <Tabs defaultValue="a-venir" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
              <TabsTrigger value="a-venir" className="text-lg">
                À Venir
              </TabsTrigger>
              <TabsTrigger value="archives" className="text-lg">
                Archivés
              </TabsTrigger>
            </TabsList>

            {/* Upcoming Events */}
            <TabsContent value="a-venir" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  Événements <span className="text-orange-500">à Venir</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Découvrez nos prochains événements et réservez votre place dès maintenant.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                    <div className="absolute top-4 right-4">
                      <Badge variant="outline" className="bg-white text-green-600 border-green-600">
                        Gratuit
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <Calendar className="w-4 h-4 mr-2" />
                      04 Juillet 2025
                      <Clock className="w-4 h-4 ml-4 mr-2" />
                      09:00 - 18:00
                    </div>
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <MapPin className="w-4 h-4 mr-2" />
                      Abidjan, Côte d'Ivoire
                      <Users className="w-4 h-4 ml-4 mr-2" />
                      100+ participants
                    </div>
                    <h3 className="text-xl font-bold mb-3">Africa Trading Cup 2025</h3>
                    <p className="text-gray-600 mb-4">
                      Première compétition de trading crypto en Afrique. Éducation financière, sensibilisation aux
                      opportunités du trading et prix à gagner.
                    </p>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                        Workshops de trading
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                        Compétition en temps réel
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                        Prix et récompenses
                      </div>
                    </div>
                    <Link
                      href="https://www.eventbrite.com/e/africa-trading-cup-2025-tickets-1417808275719"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                        S'inscrire sur Eventbrite
                        <ExternalLink className="w-4 h-4 ml-2" />
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
                    <div className="absolute top-4 right-4">
                      <Badge variant="outline" className="bg-white text-yellow-600 border-yellow-600">
                        Gratuit
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <Calendar className="w-4 h-4 mr-2" />
                      19 Juillet 2025
                      <Clock className="w-4 h-4 ml-4 mr-2" />
                      14:00 - 18:00
                    </div>
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <MapPin className="w-4 h-4 mr-2" />
                      Abidjan, Riviera
                      <Users className="w-4 h-4 ml-4 mr-2" />
                      50+ participants
                    </div>
                    <h3 className="text-xl font-bold mb-3">Stellar Meetup Abidjan N°2</h3>
                    <p className="text-gray-600 mb-4">
                      Construire, connecter et innover sur Stellar. Workshop pratique sur l'écosystème Stellar et les
                      smart contracts Soroban.
                    </p>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                        Introduction à Stellar
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                        Smart contracts Soroban
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                        Networking & refreshments
                      </div>
                    </div>
                    <Link href="https://lu.ma/7h45yfc9" target="_blank" rel="noopener noreferrer">
                      <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                        S'inscrire sur Luma
                        <ExternalLink className="w-4 h-4 ml-2" />
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
                    <div className="absolute top-4 right-4">
                      <Badge variant="outline" className="bg-white text-blue-600 border-blue-600">
                        Gratuit
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <Calendar className="w-4 h-4 mr-2" />
                      30 Juillet 2025
                      <Clock className="w-4 h-4 ml-4 mr-2" />
                      10:00 - 14:00
                    </div>
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <MapPin className="w-4 h-4 mr-2" />
                      Abidjan, Riviera
                      <Users className="w-4 h-4 ml-4 mr-2" />
                      80+ participants
                    </div>
                    <h3 className="text-xl font-bold mb-3">10 Ans d'Anniversaire de Ethereum</h3>
                    <p className="text-gray-600 mb-4">
                      Célébrons ensemble les 10 ans d'Ethereum en Côte d'Ivoire. Présentations, networking et
                      rafraîchissements offerts.
                    </p>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                        Histoire d'Ethereum
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                        Écosystème DeFi
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                        Networking & gâteau
                      </div>
                    </div>
                    <Link
                      href="https://app.unlock-protocol.com/event/meetup-les-10-ans-d-anniversaire-d-ethereum"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                        Réserver sa place
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Archived Events */}
            <TabsContent value="archives" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  Événements <span className="text-orange-500">Archivés</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Revivez nos événements passés et découvrez les moments forts de notre communauté.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Afro Web3 Babi 2024 */}
                <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="relative">
                    <Image
                      src="/afro-web3-cover.png"
                      alt="Afro Web3 Babi 2024"
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-purple-500 text-white">Conférence</Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge variant="outline" className="bg-white text-gray-600 border-gray-600">
                        Terminé
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <Calendar className="w-4 h-4 mr-2" />
                      15 Décembre 2024
                      <Clock className="w-4 h-4 ml-4 mr-2" />
                      09:00 - 17:00
                    </div>
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <MapPin className="w-4 h-4 mr-2" />
                      Abidjan, Côte d'Ivoire
                      <Users className="w-4 h-4 ml-4 mr-2" />
                      200+ participants
                    </div>
                    <h3 className="text-xl font-bold mb-3">Afro Web3 Babi 2024</h3>
                    <p className="text-gray-600 mb-4">
                      La plus grande conférence Web3 d'Afrique de l'Ouest. Speakers internationaux, workshops et
                      networking exceptionnel.
                    </p>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                        15 speakers internationaux
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>8 workshops pratiques
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                        200+ participants
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      className="w-full border-orange-500 text-orange-500 hover:bg-orange-50 bg-transparent"
                    >
                      Voir les Highlights
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>

                {/* GameFi & NFTs Conference */}
                <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="relative">
                    <Image
                      src="/gamefi-nfts-announce.png"
                      alt="GameFi & NFTs Conference"
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-pink-500 text-white">Workshop</Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge variant="outline" className="bg-white text-gray-600 border-gray-600">
                        Terminé
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <Calendar className="w-4 h-4 mr-2" />
                      20 Octobre 2024
                      <Clock className="w-4 h-4 ml-4 mr-2" />
                      14:00 - 18:00
                    </div>
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <MapPin className="w-4 h-4 mr-2" />
                      Dakar, Sénégal
                      <Users className="w-4 h-4 ml-4 mr-2" />
                      80+ participants
                    </div>
                    <h3 className="text-xl font-bold mb-3">GameFi & NFTs Conference</h3>
                    <p className="text-gray-600 mb-4">
                      Exploration du gaming blockchain et des NFTs. Démonstrations de jeux, création de NFTs et
                      opportunités d'investissement.
                    </p>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                        Démonstrations de jeux
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                        Atelier création NFT
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                        Panel investisseurs
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      className="w-full border-orange-500 text-orange-500 hover:bg-orange-50 bg-transparent"
                    >
                      Voir les Highlights
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>

                {/* DeFi Hackathon 2024 */}
                <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="relative">
                    <div className="w-full h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                      <div className="text-center text-white">
                        <h4 className="text-2xl font-bold">Blockchain</h4>
                        <p className="text-lg">DeFi Hackathon Abidjan</p>
                      </div>
                    </div>
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-blue-500 text-white">Hackathon</Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge variant="outline" className="bg-white text-gray-600 border-gray-600">
                        Terminé
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <Calendar className="w-4 h-4 mr-2" />
                      05 Septembre 2024
                      <Clock className="w-4 h-4 ml-4 mr-2" />
                      09:00 - 14:00
                    </div>
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <MapPin className="w-4 h-4 mr-2" />
                      Abidjan, Côte D'Ivoire
                      <Users className="w-4 h-4 ml-4 mr-2" />
                      100+ Inscrits
                    </div>
                    <h3 className="text-xl font-bold mb-3">DeFi Hackathon Abidjan 2024</h3>
                    <p className="text-gray-600 mb-4">
                      Hackathon, Projets Blockchain Innovants. Workshops, Pitch .
                    </p>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                        Workshop
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                        Préparation de projets
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                        Pitch
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      className="w-full border-orange-500 text-orange-500 hover:bg-orange-50 bg-transparent"
                    >
                      Voir les Highlights
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Restez <span className="text-orange-500">Connecté</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Suivez-nous sur nos réseaux sociaux pour être informé de nos prochains événements et ne rien manquer de
              l'actualité blockchain.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="https://www.youtube.com/@techblockchainaf" target="_blank" rel="noopener noreferrer">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8">
                  <Youtube className="w-5 h-5 mr-2" />
                  YouTube
                </Button>
              </Link>
              <Link
                href="https://whatsapp.com/channel/0029Vao6uuXDuMRXaIQPqb16"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  className="border-orange-500 text-orange-500 hover:bg-orange-50 bg-transparent"
                >
                  WhatsApp
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/company/techblockchainaf" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  className="border-orange-500 text-orange-500 hover:bg-orange-50 bg-transparent"
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
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
    </div>
  )
}
