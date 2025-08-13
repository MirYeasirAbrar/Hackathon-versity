import React, { useState } from "react";
import { Plus, Edit, Trash2, CheckCircle } from "lucide-react";
import EventForm from "@/components/EventForm";

const EventsTable = ({ events = [], onCreate, onUpdate, onDelete }) => {
  const [query, setQuery] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState(null);

  const filtered = events.filter(e => e.title.toLowerCase().includes(query.toLowerCase()));

  const openCreate = () => { setEditing(null); setModalOpen(true); };
  const openEdit = (e) => { setEditing(e); setModalOpen(true); };

  return (
    <div className="glass p-4">
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-lg font-semibold">Events</h4>
        <div className="flex items-center gap-2">
          <input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search events" className="px-3 py-1 rounded-md bg-white/10" />
          <button onClick={openCreate} className="flex items-center gap-2 px-3 py-1 rounded-md hover:bg-white/6">
            <Plus className="h-4 w-4" /> Create
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left border-b">
              <th className="pb-2">Title</th>
              <th className="pb-2">Date</th>
              <th className="pb-2">Location</th>
              <th className="pb-2">Status</th>
              <th className="pb-2 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(ev => (
              <tr key={ev.id} className="border-b">
                <td className="py-2">{ev.title}</td>
                <td className="py-2">{ev.date}</td>
                <td className="py-2">{ev.location}</td>
                <td className="py-2">{ev.status}</td>
                <td className="py-2 text-right">
                  <button onClick={() => onUpdate(ev.id, { status: "Approved" })} className="mr-2 hover:text-green-600">
                    <CheckCircle className="h-4 w-4 inline" />
                  </button>
                  <button onClick={() => openEdit(ev)} className="mr-2 hover:text-sky-600">
                    <Edit className="h-4 w-4 inline" />
                  </button>
                  <button onClick={() => onDelete(ev.id)} className="hover:text-red-600">
                    <Trash2 className="h-4 w-4 inline" />
                  </button>
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr><td colSpan="5" className="py-6 text-center text-slate-400">No events found</td></tr>
            )}
          </tbody>
        </table>
      </div>

      <EventForm
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultValue={editing}
        onSubmit={(data) => {
          if (editing) onUpdate(editing.id, data);
          else onCreate({ id: "e" + Math.random().toString(36).slice(2,7), ...data });
          setModalOpen(false);
        }}
      />
    </div>
  );
};

export default EventsTable;
