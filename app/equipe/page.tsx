import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Users, ExternalLink, Twitter, Youtube, Linkedin, Instagram, Mail, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { MobileMenu } from "@/components/mobile-menu"

export default function TeamPage() {
  const teamMembers = [
    {
      id: 1,
      name: "Ayémou Essoubo Loïc-Yvan",
      role: "Founder & CEO",
      location: "Abidjan,Côte D'Ivoire",
      bio: "Après ses études à PIGIER-Côte D'Ivoire, Ayémou décroche une Licence en Communication & Développement des Marques. Passionné par la Tech, il rejoint BINANCE au poste de Community Manager, puis Operations Manager pour le département Afrique Francophone. Au cours de l'année 2023, Ayémou décroche une nouvelle position chez IZICHANGE en tant que Directeur Pays pour la filiale de Côte d'Ivoire et développe ses actions autour du B2B. Aujourd'hui Ayémou porte le titre de Blockchain Project Manager et contribue à l'éclosion de projets Blockchain en Afrique Francophone.",
      expertise: ["Blockchain Development", "DeFi Protocols", "Smart Contracts", "Stellar", "Rust"],
      achievements: [
        "Country Lead, Stellar Côte D'Ivoire",
        "Country Manager IZICHANGE, Filiale Côte D'Ivoire",
        "Operations Manager, BINANCE Afrique Francophone",
        "Community Manager, BINANCE Afrique Francophone",
      ],
      experience: "7+ années",
      projects: "Tech. Blockchain Afr + Abokyh (Gift Cards Solutions)",
      image: "/frame-ayemou.png",
      social: {
        twitter: "https://x.com/AyemouLoic",
        linkedin: "https://www.linkedin.com/in/loic-yvan-ayémou225",
        email: "ayemouyvan@gmail.com",
      },
      education: "Licence en Communication & Développement des Marques – PIGIER CÔTE D'IVOIRE",
    },
    {
      id: 2,
      name: "Patrick Yeboue",
      role: "Blockchain & Web3 Project Manager",
      location: "Abidjan,Côte D'Ivoire",
      bio: "Patrick Yeboue est un entrepreneur et investisseur passionné par l'univers du Web3, de la blockchain et des crypto-actifs, Blockchain & Web3 Project Manager, Official Binance Angel chez Binance",
      expertise: ["Trading Crypto", "Analyse Technique", "DeFi", "Stablecoins", "Marchés Africains"],
      achievements: [
        "Fondateur de plusieurs initiatives de formation et de développement dans la crypto",
        "Co-founder de Bit Trading Education, un centre de formation",
        "Auteur avec +10 Ouvrages",
        "Formateur de 1,000+ participants à travers Binance Academy",
      ],
      experience: "10+ années",
      projects: "Bit Trading Edu",
      image: "/frame-patrick.png",
      social: {
        twitter: "https://x.com/Cryptopatyeb",
        linkedin: "https://www.linkedin.com/in/patrick-yeboue-a434a6120/",
      },
      education: "Master en Blockchain & Web3 – Founderz, Barcelone",
    },
    {
      id: 3,
      name: "Michel Djè Bi",
      role: "Digital Marketing Manager",
      location: "Abidjan, Côte d'Ivoire",
      bio: "Digital Marketing Manager avec 14 années d'expérience, j'ai travaillé sur le développement de stratégies digitales de plusieurs marques en Côte d'Ivoire.",
      expertise: ["Community Management", "Marketing Digital", "Growth Hacking", "Social Media", "Content Strategy"],
      achievements: [
        "J'ai travaillé en agence pendant 6 ans (ex-Voodoo Digital – Voodoo Communication): Social Media, Project management, Achat media digital, Google Ads",
        "J'ai contribué à la croissance de Wave Mobile Money via les canaux digitaux entre 2021 et 2023",
        "J'ai exploré le web3 en développant des campagnes digitales pour Binance, leader mondial de l'écosystème crypto, sur les marchés d'Afrique Francophone en 2023",
        "J'ai fondé en 2023 le média d'éducation au web3 - www.lecoinmagique.com",
      ],
      experience: "14+ années",
      projects: "100+ campagnes marketing réussies",
      image: "/frame-michel.png",
      social: {
        facebook: "https://www.facebook.com/mikeylange225",
        linkedin: "https://www.linkedin.com/in/micheldjebi/",
        email: "micheldjebi@gmail.com",
      },
      education: "Master en Communication – Université Félix Houphouët-Boigny",
    },
  ]

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
            <Link href="/evenements" className="text-sm font-medium hover:text-orange-500 transition-colors">
              Événements
            </Link>
            <Link href="/equipe" className="text-sm font-medium text-orange-500">
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

      {/* Team Hero */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100 mb-4">👥 Notre Équipe</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              L'Équipe <span className="text-orange-500">TechBlockchainAfr</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Rencontrez les experts passionnés qui donnent vie à TechBlockchainAfr. Une équipe dédiée à l'éducation
              blockchain et à l'innovation technologique en Afrique francophone.
            </p>
          </div>

          {/* Team Stats */}
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">3+</h3>
              <p className="text-gray-600">Experts Blockchain</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <ExternalLink className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">30+</h3>
              <p className="text-gray-600">Années d'Expérience</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-purple-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">1</h3>
              <p className="text-gray-600">Pays</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Youtube className="w-8 h-8 text-red-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">60+</h3>
              <p className="text-gray-600">Épisodes Podcast</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="space-y-16">
            {teamMembers.map((member, index) => (
              <Card
                key={member.id}
                className={`overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 shadow-lg ${
                  index % 2 === 1 ? "bg-gray-50" : "bg-white"
                }`}
              >
                <div className={`grid lg:grid-cols-3 gap-0 ${index % 2 === 1 ? "lg:grid-cols-3" : ""}`}>
                  <div className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={400}
                      height={500}
                      className="w-full h-80 lg:h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-orange-500 text-white">{member.role}</Badge>
                    </div>
                  </div>

                  <CardContent className={`lg:col-span-2 p-8 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-3xl font-bold mb-2">{member.name}</h3>
                        <div className="flex items-center space-x-2 text-gray-600 mb-4">
                          <MapPin className="w-4 h-4" />
                          <span>{member.location}</span>
                        </div>
                        <p className="text-gray-600 leading-relaxed">{member.bio}</p>
                      </div>

                      {/* Experience & Projects */}
                      <div className="grid md:grid-cols-2 gap-6 py-4 border-y border-gray-100">
                        <div>
                          <h4 className="font-semibold mb-2">Expérience</h4>
                          <p className="text-gray-600">{member.experience}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Projets</h4>
                          <p className="text-gray-600">{member.projects}</p>
                        </div>
                      </div>

                      {/* Expertise */}
                      <div>
                        <h4 className="font-semibold mb-3">Domaines d'Expertise</h4>
                        <div className="flex flex-wrap gap-2">
                          {member.expertise.map((skill) => (
                            <Badge key={skill} variant="outline" className="border-orange-200 text-orange-700">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Achievements */}
                      <div>
                        <h4 className="font-semibold mb-3">Réalisations Clés</h4>
                        <div className="space-y-2">
                          {member.achievements.map((achievement, idx) => (
                            <div key={idx} className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-600 text-sm">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Education */}
                      <div>
                        <h4 className="font-semibold mb-3">Formation</h4>
                        <p className="text-gray-600">{member.education}</p>
                      </div>

                      {/* Social Links */}
                      <div className="flex space-x-4 pt-4">
                        {member.social.twitter && (
                          <Link
                            href={member.social.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors"
                          >
                            <Twitter className="w-5 h-5" />
                          </Link>
                        )}
                        {member.social.linkedin && (
                          <Link
                            href={member.social.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors"
                          >
                            <Linkedin className="w-5 h-5" />
                          </Link>
                        )}
                        {member.social.facebook && (
                          <Link
                            href={member.social.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors"
                          >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                            </svg>
                          </Link>
                        )}
                        {member.social.email && (
                          <Link
                            href={`mailto:${member.social.email}`}
                            className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors"
                          >
                            <Mail className="w-5 h-5" />
                          </Link>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-red-500">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Rejoignez Notre Communauté</h2>
            <p className="text-xl text-orange-100 mb-8 leading-relaxed">
              Connectez-vous avec notre équipe et la communauté blockchain francophone. Ensemble, construisons l'avenir
              de la blockchain en Afrique.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="https://www.youtube.com/@techblockchainaf" target="_blank" rel="noopener noreferrer">
                <Button className="bg-white text-orange-500 hover:bg-orange-50 font-semibold px-8">
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
