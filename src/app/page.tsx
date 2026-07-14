import { Hero } from "@/components/hero";
import { Marquee } from "@/components/marquee";
import { Work } from "@/components/sections/work";
import { About } from "@/components/sections/about";
import { Capabilities } from "@/components/sections/capabilities";
import { Research } from "@/components/sections/research";
import { Skills } from "@/components/sections/skills";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Work />
      <About />
      <Capabilities />
      <Research />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}
