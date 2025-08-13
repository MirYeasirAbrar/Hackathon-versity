import React from "react";

/**
 * Simple approvals queue UI. Accepts events that are pending.
 */
const ApprovalQueue = ({ events = [], onApprove = () => {}, onReject = () => {} }) => {
  const pending = events.filter(e => e.status === "Pending");

  return (
    <div className="glass p-4">
      <h4 className="text-lg font-semibold mb-3">Pending Approvals</h4>
      {pending.length === 0 ? (
        <p className="text-sm text-slate-500">No approvals pending.</p>
      ) : (
        <div className="space-y-3">
          {pending.map(ev => (
            <div key={ev.id} className="p-3 border rounded-md flex items-center justify-between">
              <div>
                <div className="font-medium">{ev.title}</div>
                <div className="text-sm text-slate-500">{ev.date} • {ev.location}</div>
              </div>
              <div className="flex gap-2">
                <button onClick={() => onApprove(ev.id)} className="px-3 py-1 rounded-md bg-green-600 text-white">Approve</button>
                <button onClick={() => onReject(ev.id)} className="px-3 py-1 rounded-md bg-red-600 text-white">Reject</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ApprovalQueue;
