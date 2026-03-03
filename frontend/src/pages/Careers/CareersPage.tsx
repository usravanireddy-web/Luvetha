import { jobs } from "@/lib/Data/jobs";
import JobCard from "@/components/Careers/JobCard";
import {
  TrendingUp,
  Lightbulb,
  Users,
  HeartHandshake,
} from "lucide-react";

const whyJoinUs = [
  {
    title: "Growth & Learning",
    description:
      "We invest in your learning, mentorship, and long-term career growth.",
    Icon: TrendingUp,
    emoji: "📈",
  },
  {
    title: "Innovation Driven",
    description:
      "Work on modern technologies and real-world impactful projects.",
    Icon: Lightbulb,
    emoji: "💡",
  },
  {
    title: "Collaborative Culture",
    description:
      "Friendly, supportive, and inclusive team environment.",
    Icon: Users,
    emoji: "🤝",
  },
  {
    title: "Work-Life Balance",
    description:
      "Healthy work culture with flexibility and balance.",
    Icon: HeartHandshake,
    emoji: "⚖️",
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
        <p className="mt-4 max-w-2xl mx-auto text-base md:text-lg text-blue-100">
          Build your future with passionate innovators and real-world projects.
        </p>
      </section>

      {/* ================= WHY JOIN US ================= */}
      <section className="max-w-7xl mx-auto py-14 md:py-16 px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Why Join Us?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyJoinUs.map(({ title, description, Icon, emoji }) => (
            <div
              key={title}
              className="bg-white p-6 rounded-xl shadow border hover:shadow-lg transition text-center"
            >
              {/* ICON */}
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-100 border border-blue-200">
                  {/* Lucide icon */}
                  <Icon
                    size={26}
                    strokeWidth={2}
                    className="text-blue-600"
                  />
                </div>
              </div>

              {/* FALLBACK EMOJI (always visible) */}
              <div className="text-2xl mb-2 md:hidden">{emoji}</div>

              <h3 className="font-semibold text-lg mb-2">
                {title}
              </h3>
              <p className="text-gray-600 text-sm">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= OPENINGS ================= */}
      <section className="max-w-7xl mx-auto pb-16 md:pb-20 px-4 md:px-6">
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
