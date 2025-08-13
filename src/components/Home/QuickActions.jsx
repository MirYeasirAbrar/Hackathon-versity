import React from "react";
import { Link } from "react-router";

const QuickActions = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Quick Actions
      </h3>
      <div className="space-y-3 flex items-center justify-between w-4xl mx-auto space-x-3">
        <button className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition-colors">
          <Link to={'/register'}>Become a Member</Link>
        </button>
        <button className="w-full border border-blue-600 text-blue-600 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors">
          View Profile
        </button>
        <button className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
          Contact Support
        </button>
      </div>
    </div>
  );
};

export default QuickActions;
