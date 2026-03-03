import { useParams } from "react-router-dom";
import { jobs } from "@/lib/Data/jobs";

export default function JobDetail() {
  const { id } = useParams();
  const job = jobs.find(j => j.id === id);

  if (!job) return <p className="p-10">Job not found</p>;

  return (
    <div className="max-w-4xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold">{job.title}</h1>
      <p className="text-gray-500 mt-2">{job.location} • {job.type}</p>

      <section className="mt-8">
        <h2 className="font-semibold text-xl mb-2">Responsibilities</h2>
        <ul className="list-disc pl-6 text-gray-700">
          {job.responsibilities.map((r: string) => <li key={r}>{r}</li>)}
        </ul>
      </section>

      <section className="mt-6">
        <h2 className="font-semibold text-xl mb-2">Requirements</h2>
        <ul className="list-disc pl-6 text-gray-700">
          {job.requirements.map((r: string) => <li key={r}>{r}</li>)}
        </ul>
      </section>
    </div>
  );
}
