import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Founder } from "@/components/sections/Founder";
import { Programs } from "@/components/sections/Programs";
import { Trainers } from "@/components/sections/Trainers";
import { Transformations } from "@/components/sections/Transformations";
import { Community } from "@/components/sections/Community";
import { FAQ } from "@/components/sections/FAQ";
import { Contact, Footer } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden w-full">
      <Navbar />
      <Hero />
      <About />
      <Founder />
      <Programs />
      <Trainers />
      <Transformations />
      <Community />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
