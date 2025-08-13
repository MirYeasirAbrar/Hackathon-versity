import React, { useState } from "react";
import { Plus, Edit, Trash2 } from "lucide-react";
import UserForm from "./UserForm";

/**
 * UsersTable - simple management table with a create/edit dialog (mock)
 */
const UsersTable = ({ users = [], onCreate, onUpdate, onDelete }) => {
  const [query, setQuery] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState(null);

  const filtered = users.filter(u => (u.name + u.email).toLowerCase().includes(query.toLowerCase()));

  const openCreate = () => { setEditing(null); setModalOpen(true); };
  const openEdit = (u) => { setEditing(u); setModalOpen(true); };

  return (
    <div className="glass p-4">
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-lg font-semibold">Users</h4>
        <div className="flex items-center gap-2">
          <input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search name/email" className="px-3 py-1 rounded-md bg-white/10" />
          <button onClick={openCreate} className="flex items-center gap-2 px-3 py-1 rounded-md hover:bg-white/6">
            <Plus className="h-4 w-4" /> Create
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left border-b">
              <th className="pb-2">Name</th>
              <th className="pb-2">Email</th>
              <th className="pb-2">Role</th>
              <th className="pb-2">Status</th>
              <th className="pb-2 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(u => (
              <tr key={u.id} className="border-b">
                <td className="py-2">{u.name}</td>
                <td className="py-2">{u.email}</td>
                <td className="py-2">{u.role}</td>
                <td className="py-2">{u.status}</td>
                <td className="py-2 text-right">
                  <button onClick={() => openEdit(u)} className="mr-2 hover:text-sky-600">
                    <Edit className="h-4 w-4 inline" />
                  </button>
                  <button onClick={() => onDelete(u.id)} className="hover:text-red-600">
                    <Trash2 className="h-4 w-4 inline" />
                  </button>
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr><td colSpan="5" className="py-6 text-center text-slate-400">No users found</td></tr>
            )}
          </tbody>
        </table>
      </div>

      <UserForm
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultValue={editing}
        onSubmit={(data) => {
          if (editing) onUpdate(editing.id, data);
          else onCreate({ id: "u" + Math.random().toString(36).slice(2,7), ...data });
          setModalOpen(false);
        }}
      />
    </div>
  );
};

export default UsersTable;
