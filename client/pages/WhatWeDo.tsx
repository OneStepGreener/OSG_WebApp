export default function WhatWeDo() {
  return (
    <main className="pt-24 min-h-screen bg-gradient-to-b from-white to-emerald-50">
      <section className="px-6">
        <div className="mx-auto max-w-6xl text-center">
          <p className="font-urbanist text-xs tracking-widest text-emerald-700/80">02 WHAT WE DO</p>
          <h2 className="mt-2 font-urbanist text-[54px] font-medium leading-normal text-black text-center mx-auto max-w-[790px]">
            Driving Everyday Action for a Greener Tomorrow
          </h2>
          <p className="mt-6 font-urbanist text-[20px] font-normal leading-normal text-black text-center mx-auto">
            From household waste segregation to large-scale tree plantations, we turn climate concern into climate action — led by youth, powered by community.
          </p>

          {/* Simple visual accents */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="rounded-2xl bg-white shadow-sm ring-1 ring-emerald-100 p-6">
              <h3 className="font-urbanist font-semibold text-emerald-900">Waste Segregation</h3>
              <p className="mt-2 text-sm text-emerald-800">Practical guides and local support to help households sort waste effectively.</p>
            </div>
            <div className="rounded-2xl bg-white shadow-sm ring-1 ring-emerald-100 p-6">
              <h3 className="font-urbanist font-semibold text-emerald-900">Recycling & Drives</h3>
              <p className="mt-2 text-sm text-emerald-800">Community-driven clean-ups and circular economy awareness campaigns.</p>
            </div>
            <div className="rounded-2xl bg-white shadow-sm ring-1 ring-emerald-100 p-6">
              <h3 className="font-urbanist font-semibold text-emerald-900">Tree Plantation</h3>
              <p className="mt-2 text-sm text-emerald-800">Youth-led plantations and nurturing programs for long-term survival.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
