import React, { useEffect, useState } from "react";

const EventForm = ({ open, onClose, onSubmit, defaultValue }) => {
  const [title, setTitle] = useState(defaultValue?.title || "");
  const [date, setDate] = useState(defaultValue?.date || "");
  const [location, setLocation] = useState(defaultValue?.location || "");
  const [status, setStatus] = useState(defaultValue?.status || "Pending");
  const [published, setPublished] = useState(defaultValue?.published || false);

  useEffect(() => {
    setTitle(defaultValue?.title || "");
    setDate(defaultValue?.date || "");
    setLocation(defaultValue?.location || "");
    setStatus(defaultValue?.status || "Pending");
    setPublished(defaultValue?.published || false);
  }, [defaultValue]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="bg-white rounded-lg p-6 w-full max-w-md z-10">
        <h3 className="text-lg font-semibold mb-4">{defaultValue ? "Edit Event" : "Create Event"}</h3>
        <form onSubmit={(e) => { e.preventDefault(); onSubmit({ title, date, location, status, published }); }}>
          <div className="space-y-3">
            <div>
              <label className="block text-sm">Title</label>
              <input required value={title} onChange={e=>setTitle(e.target.value)} className="w-full px-3 py-2 rounded-md border" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm">Date</label>
                <input type="date" value={date} onChange={e=>setDate(e.target.value)} className="w-full px-3 py-2 rounded-md border" />
              </div>
              <div>
                <label className="block text-sm">Location</label>
                <input value={location} onChange={e=>setLocation(e.target.value)} className="w-full px-3 py-2 rounded-md border" />
              </div>
            </div>

            <div className="flex items-center gap-3">
              <select value={status} onChange={e=>setStatus(e.target.value)} className="px-3 py-2 rounded-md border">
                <option>Pending</option>
                <option>Approved</option>
                <option>Rejected</option>
              </select>
              <label className="flex items-center gap-2 ml-auto">
                <input type="checkbox" checked={published} onChange={e=>setPublished(e.target.checked)} />
                Published
              </label>
            </div>

            <div className="flex justify-end gap-2">
              <button type="button" onClick={onClose} className="px-4 py-2 rounded-md border">Cancel</button>
              <button type="submit" className="px-4 py-2 rounded-md bg-sky-600 text-white">{defaultValue ? "Save" : "Create"}</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EventForm;
