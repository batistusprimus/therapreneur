import React from 'react'
import type { Metadata } from 'next'
import { Anton, Archivo_Black, Montserrat } from 'next/font/google'
import './globals.css'
import './styles/animations.css'
import SiteHeader from './components/SiteHeader'
import SiteFooter from './components/SiteFooter'

const anton = Anton({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-anton',
})

const archivoBlack = Archivo_Black({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-archivo-black',
})

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: 'Thérapreneur | Transformez votre expertise thérapeutique en empire digital éthique',
  description: 'Découvrez comment passer de thérapeute épuisé à expert digital reconnu. Nous transformons votre cabinet en écosystème scalable tout en préservant vos valeurs humaines. De 0 à 150k€/mois documenté en temps réel.',
  keywords: 'thérapeute entrepreneur, transformation digitale thérapie, scaling cabinet thérapeutique, offre high-ticket thérapeute, marketing éthique santé, business thérapeute en ligne',
  authors: [{ name: 'Thérapreneur' }],
  creator: 'Thérapreneur',
  publisher: 'Thérapreneur',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://therapreneur.fr'),
  alternates: {
    canonical: 'https://therapreneur.fr',
  },
  openGraph: {
    title: 'Thérapreneur | L\'écosystème de transformation digitale thérapeutique',
    description: 'L\'intérieur d\'un business qui est passé de 0 à 150k€/mois en 12 mois. Transparence totale sur les stratégies pour thérapeutes entrepreneurs.',
    url: 'https://therapreneur.fr',
    siteName: 'Thérapreneur',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Thérapreneur - Transformation digitale pour thérapeutes',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Thérapreneur | Transformez votre expertise thérapeutique',
    description: 'De 0 à 150k€/mois documenté en temps réel. Méthodes testées pour thérapeutes entrepreneurs.',
    images: ['/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${anton.variable} ${archivoBlack.variable} ${montserrat.variable} font-sans bg-white`}>
        <SiteHeader />
        <main className="pt-20">{children}</main>
        <SiteFooter />
      </body>
    </html>
  )
} 