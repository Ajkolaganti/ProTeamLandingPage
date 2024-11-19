import React from 'react';
import { Users, FileText, Clock, Briefcase, BarChart2 } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Employee & Client Management',
    description: 'Streamline HR processes and maintain client relationships effortlessly.'
  },
  {
    icon: FileText,
    title: 'Smart Invoicing System',
    description: 'Automated billing and payment tracking with customizable templates.'
  },
  {
    icon: Clock,
    title: 'Time Tracking & Attendance',
    description: 'Monitor productivity and attendance with advanced tracking tools.'
  },
  {
    icon: Briefcase,
    title: 'Project Management Suite',
    description: 'Comprehensive tools for planning, execution, and monitoring projects.'
  },
  {
    icon: BarChart2,
    title: 'Analytics Dashboard',
    description: 'Data-driven insights to make informed business decisions.'
  }
];

export default function Features() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to Grow
          </h2>
          <p className="text-xl text-gray-600">
            Powerful features designed to take your business to the next level
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <feature.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}