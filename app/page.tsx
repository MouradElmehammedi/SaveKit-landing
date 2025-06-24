"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Download,
  Target,
  TrendingUp,
  Calendar,
  Star,
  Menu,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

export default function SaveKitLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}

      {/* Hero Section */}
      <section
        id="home"
        className="bg-gradient-to-br from-blue-600 to-blue-800 text-white pb-20 relative overflow-hidden"
      >
        <header className="text-white px-4 ">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="mx-auto md:mx-0 text-2xl font-bold">
              <div className="mt-5 p-2 mb-8 w-16 h-16 bg-white rounded-2xl shadow-lg overflow-hidden">
                <img
                  src="/logo.png"
                  alt="SaveKit Logo"
                  width={300}
                  height={300}
                  className="w-5xl"
                />
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <Button
                variant="outline"
                className="bg-white text-blue-600 hover:bg-gray-100 justify-start"
              >
                <Download className="mr-2" size={20} />
                Download APK
              </Button>
            </div>
          </div>
        </header>
        {/* Background decorative elements */}
        <div className="absolute top-10 right-10 w-20 h-20 bg-white/10 rounded-full"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-white/5 rounded-full"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-white/10 rounded-full"></div>

        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            SaveKit - Votre Application d'Épargne
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto opacity-90">
            Transformez vos rêves en réalité. Créez vos objectifs d'épargne et
            suivez votre progression automatiquement.
          </p>

          {/* Phone Mockups */}
          <div className="hidden md:flex justify-center items-center gap-8 mb-12 flex-wrap">
            <div className="transform rotate-[-5deg] hover:rotate-0 transition-transform duration-300">
              <div className="w-64 h-md  bg-white rounded-[1.5rem] shadow-xl border-[5px] border-black relative overflow-hidden">
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-16 h-3 bg-black rounded-full"></div>
                <div className="pt-8 bg-[#f9fafc]">
                  <img
                    src="/images/photo-2.jpg"
                    alt="SaveKit App Screenshot 1"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="transform hover:scale-105 transition-transform duration-300 z-10">
              <div className="w-64 h-md  bg-white rounded-[1.5rem] shadow-xl border-[5px] border-black relative overflow-hidden">
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-16 h-3 bg-black rounded-full"></div>
                <div className="pt-8 bg-[#f9fafc]">
                  <img
                    src="/images/photo-4.jpg"
                    alt="SaveKit App Screenshot 2"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="transform rotate-[5deg] hover:rotate-0 transition-transform duration-300">
              <div className="w-64 h-md  bg-white rounded-[1.5rem] shadow-xl border-[5px] border-black relative overflow-hidden">
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-16 h-3 bg-black rounded-full"></div>
                <div className="pt-8 bg-[#f9fafc]">
                  <img
                    src="/images/photo-1.jpg"
                    alt="SaveKit App Screenshot 3"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Download Buttons */}
          <div className="flex justify-center gap-6 flex-wrap">
            <Button
              size="lg"
              className="bg-white text-black hover:bg-gray-100 px-8 py-4 rounded-xl"
              asChild
            >
              <Link href="https://mydomain.com/SaveKit.apk">
                <Download className="mr-2" size={20} />
                Download APK
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-64 h-md bg-white rounded-[1.5rem] shadow-xl border-[5px] border-black relative overflow-hidden  mx-auto">
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-16 h-3 bg-black rounded-full"></div>
                <div className="pt-8 bg-[#f9fafc]">
                  <img
                    src="/images/photo-3.jpg"
                    alt="SaveKit App Screenshot 2"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                À propos de l'application
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                SaveKit est votre compagnon d'épargne intelligent.
                <br />
                L'application vous aide à définir, suivre et atteindre vos
                objectifs financiers grâce à une interface simple, des rappels
                personnalisés et un suivi de progression clair.
                <br />
                Vos données sont protégées et accessibles uniquement par vous.
                <br />
                <span className="font-semibold">Notre mission :</span> rendre
                l'épargne accessible, motivante et efficace pour tous.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Comment ça marche
          </h2>
          <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-10">
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-100 p-4 rounded-full mb-4">
                <Star className="text-blue-600" size={32} />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Inscription</h3>
              <p className="text-gray-600">
                Créez un compte avec votre email et un mot de passe sécurisé.
                Connectez-vous pour accéder à toutes les fonctionnalités.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-100 p-4 rounded-full mb-4">
                <Target className="text-blue-600" size={32} />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">
                Création d'objectifs
              </h3>
              <p className="text-gray-600">
                Ajoutez un objectif d'épargne en précisant le montant, la date
                de fin, la catégorie et une description si besoin.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-100 p-4 rounded-full mb-4">
                <TrendingUp className="text-blue-600" size={32} />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">
                Suivi de progression
              </h3>
              <p className="text-gray-600">
                Consultez vos objectifs, suivez votre progression et recevez des
                rappels pour rester motivé.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-100 p-4 rounded-full mb-4">
                <Calendar className="text-blue-600" size={32} />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">
                Notifications intelligentes
              </h3>
              <p className="text-gray-600">
                Recevez des notifications selon la fréquence choisie pour ne
                jamais oublier d'épargner.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            FAQ's
          </h2>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                Comment créer un objectif d'épargne ?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-2">
                Allez dans l'onglet "Créer", remplissez les informations
                demandées (titre, montant, date de fin, catégorie, etc.), puis
                validez. Vous recevrez des rappels pour rester motivé !
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                Comment recevoir des rappels pour mes objectifs ?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-2">
                Après avoir créé un objectif, l'application programme
                automatiquement des notifications selon la fréquence choisie
                (quotidienne, hebdomadaire ou mensuelle). Assurez-vous d'avoir
                autorisé les notifications dans les paramètres de votre
                téléphone.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                Comment modifier ou supprimer un objectif ?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-2">
                Accédez à la page de détails de l'objectif depuis l'onglet
                principal, puis utilisez les options de modification ou de
                suppression.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                Comment changer mon mot de passe ?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-2">
                Rendez-vous dans votre profil, puis sélectionnez{" "}
                {`Sécurité > Changer le mot de passe`}. Suivez les instructions
                pour définir un nouveau mot de passe.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                Mes données sont-elles sécurisées ?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-2">
                Oui, vos données sont stockées de manière sécurisée grâce à
                Firebase. Seul vous pouvez accéder à vos informations
                personnelles.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                Que faire si j'ai oublié mon mot de passe ?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-2">
                Sur l'écran de connexion, cliquez sur "Mot de passe oublié ?" et
                suivez les instructions pour réinitialiser votre mot de passe
                par email.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                Puis-je utiliser l'application sur plusieurs appareils ?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-2">
                Oui, il suffit de vous connecter avec le même compte sur chaque
                appareil.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 ">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-12">
            Captures d'écran
          </h2>

          <Carousel
            className="w-full"
            opts={{
              align: "start",
              slidesToScroll: "auto",
            }}
          >
            <CarouselContent className="px-3 pb-2">
              {[1, 2, 3, 4, 5, 9, 6, 7, 8].map((i) => (
                <CarouselItem
                  key={i}
                  className="basis-1/1 sm:basis-1/2 md:basis-1/3 lg:basis-auto px-2"
                >
                  <div className=" bg-white rounded-[1.5rem] shadow-xl border border-gray-300 relative overflow-hidden">
                    <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-16 h-3 bg-black rounded-full"></div>
                    <div className="pt-8 bg-[#f9fafc]">
                      <img
                        src={`/images/new/photo-${i}.png`}
                        alt={`Capture SaveKit ${i}`}
                        className="object-cover h-[570px] "
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Combined Download & Footer Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        {/* Download Section */}
        <div className="max-w-7xl mx-auto px-4 pt-20">
          <div className="flex flex-col items-center text-center">
            {/* App Logo */}
            <div className="p-3 mb-8 w-32 h-32 bg-white rounded-2xl shadow-lg overflow-hidden">
              <img
                src="/logo.png"
                alt="SaveKit Logo"
                width={300}
                height={300}
                className="w-5xl"
              />
            </div>

            <h2 className="text-4xl font-bold mb-6">Téléchargez SaveKit</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Commencez votre parcours d'épargne dès aujourd'hui. Téléchargez
              SaveKit et transformez vos rêves en objectifs réalisables.
            </p>

            <div className="flex gap-4 flex-wrap justify-center">
              <Button
                size="lg"
                className="bg-black text-white hover:bg-gray-800 px-8 py-4 rounded-xl"
                asChild
              >
                <Link href="https://mydomain.com/SaveKit.apk">
                  <Download className="mr-2" size={20} />
                  Download APK
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-white pb-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className=" pt-8 text-center">
              <p>
                &copy; {new Date().getFullYear()} SaveKit. Tous droits réservés.
              </p>
              <p className="mt-2 text-sm text-gray-100">
                Réalisé par{" "}
                <span className="font-semibold text-white">
                  Mourad El Mehammedi
                </span>{" "}
                —
                <a
                  href="mailto:mourad.elmehammedi@gmail.com"
                  className="underline hover:text-blue-400 ml-1"
                >
                  mourad.elmehammedi@gmail.com
                </a>
                <span className="mx-1">|</span>
                <a
                  href="https://github.com/mouradELMEHAMMEDI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-blue-400"
                >
                  GitHub
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
