import React from 'react';
import { ArrowRight, BarChart2, Users, Clock, FileSpreadsheet } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-indigo-900 to-blue-900 text-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Streamline Your Business Operations
              <span className="block text-blue-400">All in One Platform</span>
            </h1>
            <p className="text-xl text-gray-300">
              Manage everything from employees and clients to projects and finances with our comprehensive business suite.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://pro-team-beige.vercel.app/register"
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all"
              >
                Start Free Trial <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="#showcase"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm px-8 py-3 rounded-lg font-semibold transition-all"
              >
                See in Action
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl blur-3xl opacity-30" />
            <div className="relative bg-gray-900/50 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Users, label: 'Team Management', value: '2,500+ Users' },
                  { icon: BarChart2, label: 'Analytics', value: 'Real-time Data' },
                  { icon: Clock, label: 'Time Tracking', value: '150k+ Hours' },
                  { icon: FileSpreadsheet, label: 'Projects', value: '10k+ Active' }
                ].map((item, index) => (
                  <div key={index} className="p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all">
                    <item.icon className="w-8 h-8 text-blue-400 mb-3" />
                    <div className="font-semibold">{item.label}</div>
                    <div className="text-sm text-gray-400">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
