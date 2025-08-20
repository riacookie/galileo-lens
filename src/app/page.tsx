import EarthSection from "@/app/components/EarthSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <section className="px-4 py-20">
        <div className="container mx-auto text-center">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-5xl font-bold text-white md:text-7xl">
              Explore our Universe
            </h2>
            <p className="mx-auto mb-8 max-w-3xl text-xl leading-relaxed text-slate-300">
              Discover intriguing insights about our universe, spanning from
              Earth to the Moon and satellites. Galileo Lens leverages
              NASA&apos;s observation APIs to deliver the latest data, including
              stunning satellite imagery
            </p>
          </div>
        </div>
      </section>

      <EarthSection />
    </div>
  );
}
