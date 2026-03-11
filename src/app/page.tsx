import Hero from "@/components/Navbar"; // Wait, Hero is Hero
import Navbar from "@/components/Navbar";
import HeroComponent from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";
import { client } from "@/sanity/lib/client";
import { homePageQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

export default async function Home() {
  const homeData = await client.fetch(homePageQuery);

  return (
    <main className="min-h-screen">
      <HeroComponent data={homeData} />
      <section id="biz-kimiz" className="py-24 bg-accent scroll-mt-20">
        <div className={`max-w-7xl mx-auto px-6 ${homeData?.aboutImage ? 'grid md:grid-cols-2 gap-20 items-center' : 'text-center max-w-4xl'}`}>
          {homeData?.aboutImage && (
            <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
              <img
                src={urlFor(homeData.aboutImage).url()}
                alt="Hakkımızda"
                className="object-cover w-full h-full"
              />
            </div>
          )}
          <div className={!homeData?.aboutImage ? 'flex flex-col items-center' : ''}>
            <span className="text-secondary/40 text-xs font-bold uppercase tracking-[0.4em] mb-4 block">Gelenek ve Modernizm</span>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-8 tracking-tighter">
              {homeData?.aboutTitle || "TytArt Hakkında"}
            </h2>
            <div className={`text-zinc-600 font-light text-lg leading-relaxed space-y-6 ${!homeData?.aboutImage ? 'max-w-2xl' : ''}`}>
              {homeData?.aboutText ? (
                <p>{homeData.aboutText}</p>
              ) : (
                <p>15 yılı aşkın süredir inşaat ve mimari sektöründe edindiğimiz tecrübeyle, her projemizde estetiği ve kaliteyi bir araya getiriyoruz. TytArt, sadece bir inşaat firmasının ötesinde, yaşam alanlarınızı sanata dönüştüren bir vizyon ortağıdır.</p>
              )}
            </div>
          </div>
        </div>
      </section>
      <Services services={homeData?.featuredServices} />
      <Portfolio projects={homeData?.featuredProjects} />

      {/* Dynamic CTA from Home Page */}
      {homeData?.ctaTitle && (
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/5"></div>
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-12 tracking-tighter">
              {homeData.ctaTitle}
            </h2>
            <button className="bg-primary text-secondary px-12 py-6 rounded-full font-bold uppercase tracking-widest hover:bg-white transition-all duration-500">
              {homeData.ctaButtonText || "Hemen İletişime Geçin"}
            </button>
          </div>
        </section>
      )}
    </main>
  );
}
