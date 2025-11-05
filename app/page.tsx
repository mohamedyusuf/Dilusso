'use client'

import Navigation from '@/components/Navigation'
import HeroSwiper from '@/components/HeroSwiper'
import NewArrivals from '@/components/NewArrivals'
import ProductShowcase from '@/components/ProductShowcase'
import FeaturedSection from '@/components/FeaturedSection'
import OffersSection from '@/components/OffersSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-primary-50">
      <Navigation />
      <HeroSwiper />
      <NewArrivals />
      <ProductShowcase />
      <OffersSection />
      <FeaturedSection />
      <Footer />
    </main>
  )
}

