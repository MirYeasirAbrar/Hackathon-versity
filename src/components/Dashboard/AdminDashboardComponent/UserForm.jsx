import React, { useEffect, useState } from "react";

/**
 * Lightweight form inlined into a simple modal behavior.
 * For simplicity we implement a minimal modal using absolute positioning.
 * In production use a proper dialog component or shadcn dialog.
 */
const UserForm = ({ open, onClose, onSubmit, defaultValue }) => {
  const [name, setName] = useState(defaultValue?.name || "");
  const [email, setEmail] = useState(defaultValue?.email || "");
  const [role, setRole] = useState(defaultValue?.role || "Member");
  const [status, setStatus] = useState(defaultValue?.status || "Active");

  useEffect(() => {
    setName(defaultValue?.name || "");
    setEmail(defaultValue?.email || "");
    setRole(defaultValue?.role || "Member");
    setStatus(defaultValue?.status || "Active");
  }, [defaultValue]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="bg-white rounded-lg p-6 w-full max-w-md z-10">
        <h3 className="text-lg font-semibold mb-4">{defaultValue ? "Edit User" : "Create User"}</h3>
        <form onSubmit={(e) => { e.preventDefault(); onSubmit({ name, email, role, status }); }}>
          <div className="space-y-3">
            <div>
              <label className="block text-sm">Name</label>
              <input required value={name} onChange={e=>setName(e.target.value)} className="w-full px-3 py-2 rounded-md border" />
            </div>
            <div>
              <label className="block text-sm">Email</label>
              <input required type="email" value={email} onChange={e=>setEmail(e.target.value)} className="w-full px-3 py-2 rounded-md border" />
            </div>
            <div className="flex gap-2">
              <div className="flex-1">
                <label className="block text-sm">Role</label>
                <select value={role} onChange={e=>setRole(e.target.value)} className="w-full px-3 py-2 rounded-md border">
                  <option>Member</option>
                  <option>Moderator</option>
                  <option>Admin</option>
                </select>
              </div>
              <div className="flex-1">
                <label className="block text-sm">Status</label>
                <select value={status} onChange={e=>setStatus(e.target.value)} className="w-full px-3 py-2 rounded-md border">
                  <option>Active</option>
                  <option>Banned</option>
                </select>
              </div>
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

export default UserForm;
