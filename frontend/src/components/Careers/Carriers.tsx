import { jobs } from "@/lib/Data/jobs";
import JobCard from "@/components/Careers/JobCard";

/* ================= ICON WRAPPER ================= */
const CircleIcon = ({ children }: { children: React.ReactNode }) => (
  <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
    {children}
  </div>
);

/* ================= WHY JOIN DATA ================= */
const whyJoinUs = [
  {
    title: "Growth & Learning",
    description:
      "Continuous learning, mentorship, and opportunities to advance your career.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2">
        <path d="M12 20V10" />
        <path d="M18 20V4" />
        <path d="M6 20v-6" />
      </svg>
    ),
  },
  {
    title: "Innovation Driven",
    description:
      "Build modern digital solutions using the latest tools and technologies.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2">
        <path d="M9 18h6" />
        <path d="M10 22h4" />
        <path d="M12 2a7 7 0 0 0-4 12c.6.6 1 1.4 1 2h6c0-.6.4-1.4 1-2a7 7 0 0 0-4-12Z" />
      </svg>
    ),
  },
  {
    title: "Collaborative Culture",
    description:
      "Work in a friendly, supportive environment where teamwork matters.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      </svg>
    ),
  },
  {
    title: "Work-Life Balance",
    description:
      "Flexible schedules and a healthy balance between work and life.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l3 3" />
      </svg>
    ),
  },
];

export default function CareersPage() {
  return (
    <div className="bg-gray-50">
      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-600 text-white py-20 md:py-24 text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold">
          Careers at{" "}
          <span className="text-yellow-300">Luvetha Tech Solutions</span>
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-base md:text-lg text-blue-100">
          Join a passionate team of innovators, developers, and strategists
          shaping digital solutions for tomorrow.
        </p>
      </section>

      {/* ================= COMPANY CAREER TEXT ================= */}
      <section className="max-w-6xl mx-auto pt-12 pb-6 px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-3">
          Build Your Career With Us
        </h2>
        <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
          At <strong>Luvetha Tech Solutions</strong>, we don’t just offer jobs —
          we build careers. From fresh graduates to experienced professionals,
          we create an environment where learning, ownership, and innovation go
          hand in hand.
        </p>
      </section>

      {/* ================= WHY JOIN US ================= */}
      <section className="max-w-7xl mx-auto pt-6 pb-10 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Why Join Us?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyJoinUs.map((item) => (
            <div
              key={item.title}
              className="bg-white p-6 rounded-xl shadow border text-center hover:shadow-lg transition"
            >
              <CircleIcon>{item.icon}</CircleIcon>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CAREER GROWTH ================= */}
      <section className="bg-white pt-8 pb-14 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Career Growth at Luvetha
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Your growth matters to us. At Luvetha, you gain hands-on experience,
            structured mentorship, and opportunities to take ownership of real
            projects — helping you grow faster and stronger in your career.
          </p>
        </div>
      </section>

      {/* ================= OPENINGS ================= */}
      <section className="max-w-7xl mx-auto pb-20 pt-10 px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          Current Openings
        </h2>

        <div className="space-y-4">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </section>
    </div>
  );
}
