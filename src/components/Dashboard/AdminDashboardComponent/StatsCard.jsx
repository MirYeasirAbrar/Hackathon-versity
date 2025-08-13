import React from "react";

/** glass card for simple stat */
const StatsCard = ({ title, value }) => (
  <div className="p-4 glass">
    <div className="text-sm text-slate-300">{title}</div>
    <div className="text-3xl font-bold text-slate-900">{value}</div>
  </div>
);

export default StatsCard;
