export default function ApplyModal({ job, onClose }: any) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl w-full max-w-md p-6">
        <h2 className="text-xl font-bold mb-4">Apply for {job}</h2>

        <form className="space-y-4">
          <input className="w-full border p-3 rounded" placeholder="Full Name" />
          <input className="w-full border p-3 rounded" placeholder="Email" />
          <input className="w-full border p-3 rounded" placeholder="Phone" />
          <input type="file" className="w-full border p-2 rounded" />

          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border rounded"
            >
              Cancel
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
