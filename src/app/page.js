import Faq from "@/components/Faq";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Ingredients from "@/components/Ingredients";
import Ratings from "@/components/Ratings";
import Stats from "@/components/Stats";
import Trust from "@/components/Trust";
import Usage from "@/components/Usage";
import WhyChoose from "@/components/WhyChoose";


export default function Home() {
  return (
    <div >
      <section id="home">
        <Hero />
      </section>
      
      <section id="why-choose">
        <WhyChoose />
      </section>
      
      <section id="stats">
        <Stats />
      </section>
      
      <section id="ingredients">
        <Ingredients/>
      </section>

      <section id="howItWorks">
        <HowItWorks/>
      </section>

      <section id="Usage">
        <Usage/>
      </section>

      <section id="Trust">
        <Trust/>
      </section>

      <section id="Faq">
        <Faq/>
      </section>

      <section id="Ratings">
        <Ratings/>
      </section>
    </div>
  );
}
