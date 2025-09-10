export default function About() {
  return (
    <main className="pt-24 min-h-screen bg-gradient-to-b from-white to-emerald-50">
      <section className="px-6">
        <div className="mx-auto max-w-6xl text-center">
          <h1 className="font-urbanist text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-tight text-black mx-auto max-w-[987px] w-full">
            Empowering Change Through Green Action, One Step at a Time
          </h1>

          {/* Metrics */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="rounded-2xl bg-white shadow-sm ring-1 ring-emerald-100 p-6">
              <div className="text-5xl font-extrabold font-urbanist bg-gradient-to-r from-emerald-600 to-lime-500 bg-clip-text text-transparent">
                45+
              </div>
            </div>

            <div className="rounded-2xl bg-white shadow-sm ring-1 ring-emerald-100 p-6">
              <p className="font-urbanist text-lg text-emerald-900">
                Active in <span className="font-extrabold text-emerald-700">80+</span> communities across India
              </p>
            </div>

            <div className="rounded-2xl bg-white shadow-sm ring-1 ring-emerald-100 p-6">
              <div className="text-5xl font-extrabold font-urbanist bg-gradient-to-r from-emerald-600 to-lime-500 bg-clip-text text-transparent">
                157k+
              </div>
              <p className="mt-2 font-urbanist text-sm text-emerald-800">
                people mobilized through clean-ups, workshops & campaigns
              </p>
            </div>
          </div>

          {/* Description */}
          <p className="mt-10 font-urbanist text-base sm:text-lg md:text-xl font-normal leading-relaxed text-black mx-auto max-w-[987px] px-2">
            OneStepGreener (OSG) is a dynamic social initiative focused on waste management, recycling, and tree plantation in India's National Capital Region. Launched by young pioneers Vihaan and Nav Agarwal in 2018, we aim to facilitate a zero-waste future and foster employment for informal workers, thus ensuring their security and dignity.
          </p>
        </div>
      </section>
    </main>
  );
}
