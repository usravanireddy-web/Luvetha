const NetworkingPage = () => {
  return (
    <>
      <section className="w-full bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="h-48 md:h-60 lg:h-64">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80"
              alt="Networking team"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="relative h-48 md:h-60 lg:h-64 bg-gradient-to-br from-[#07134f] via-[#081a67] to-[#020a3a] flex items-center">
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 22% 25%, rgba(125,211,252,0.35) 0 6px, transparent 7px), radial-gradient(circle at 72% 62%, rgba(59,130,246,0.30) 0 7px, transparent 8px)",
                backgroundSize: "120px 120px",
              }}
            />
            <div className="relative z-10 px-6 md:px-10">
              <span className="inline-block bg-sky-100 text-[#08246f] text-xs px-3 py-1 font-semibold rounded-sm">
                Services
              </span>
              <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-tight">
                Networking solutions
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div>
              <img
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80"
                alt="Networking security"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="text-[#100033] space-y-5 text-base md:text-lg leading-relaxed">
              <p>
                Are you having trouble with your company&apos;s IT system and unsure who to
                trust for reliable fixes? Luvetha Tech Solutions is here to help. A private
                business computer network can help you compete on an equal level with larger
                companies while cutting communication costs, improving productivity, and
                enhancing customer service.
              </p>
              <p>
                Networks are the backbone for today&apos;s organizations and play a vital role
                in achieving business goals. Failures in networks can impact profitability.
                Several business applications run on networks, including CRM, Email, ERP, and
                databases. Regardless of your business needs, Luvetha Tech Solutions offers
                converged networking solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NetworkingPage;
