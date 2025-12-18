"use client"
import BlogPreview from "@/components/LandingPage/Blogpreview";
import Contact from "@/components/LandingPage/Contact";
import Features from "@/components/LandingPage/Features";
import Footer from "@/components/LandingPage/Footer";
import Header from "@/components/LandingPage/Header";
import Hero from "@/components/LandingPage/Hero";
import Services from "@/components/LandingPage/Serices";



export default function Home() {
 
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <Features />
      <BlogPreview />
      <Contact />
      <Footer />
    </main>
  );
}