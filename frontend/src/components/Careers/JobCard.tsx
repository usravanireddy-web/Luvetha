import { useState } from "react";
import { Link } from "react-router-dom";
import ApplyModal from "./ApplyModel";

export default function JobCard({ job }: any) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow p-6 flex justify-between items-center hover:shadow-lg transition">
      <div>
        <h3 className="text-xl font-semibold">{job.title}</h3>
        <p className="text-gray-500">
          {job.location} • {job.type}
        </p>
      </div>

      <div className="flex gap-3">
        <Link
          to={`/careers/${job.id}`}
          className="px-4 py-2 rounded-lg border text-blue-600"
        >
          View
        </Link>
        <button
          onClick={() => setOpen(true)}
          className="px-4 py-2 rounded-lg bg-blue-600 text-white"
        >
          Apply
        </button>
      </div>

      {open && <ApplyModal job={job.title} onClose={() => setOpen(false)} />}
    </div>
  );
}
