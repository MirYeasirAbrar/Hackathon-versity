import React from 'react';
import { Calendar, Users, Trophy, Code } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    {
      icon: Users,
      count: "250+",
      label: "Active Members",
      bgColor: "bg-blue-100 group-hover:bg-blue-200",
      iconColor: "text-blue-600"
    },
    {
      icon: Calendar,
      count: "150+",
      label: "Events Hosted",
      bgColor: "bg-green-100 group-hover:bg-green-200",
      iconColor: "text-green-600"
    },
    {
      icon: Trophy,
      count: "45+",
      label: "Competitions Won",
      bgColor: "bg-purple-100 group-hover:bg-purple-200",
      iconColor: "text-purple-600"
    },
    {
      icon: Code,
      count: "500+",
      label: "Projects Built",
      bgColor: "bg-orange-100 group-hover:bg-orange-200",
      iconColor: "text-orange-600"
    }
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center group">
                <div className={`${stat.bgColor} rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 transition-colors`}>
                  <Icon className={`h-8 w-8 ${stat.iconColor}`} />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.count}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;