import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: 9,
    userTier: '1-10 users',
    features: [
      'All core features',
      'Basic analytics',
      '5GB storage per user',
      'Email support'
    ],
    popular: false
  },
  {
    name: 'Professional',
    price: 29,
    userTier: '11-50 users',
    features: [
      'All Starter features',
      'Advanced analytics',
      '50GB storage per user',
      'Priority support'
    ],
    popular: true
  },
  {
    name: 'Enterprise',
    price: 49,
    userTier: 'Unlimited users',
    features: [
      'All Professional features',
      'Custom analytics',
      'Unlimited storage',
      '24/7 dedicated support',
      'Custom integrations'
    ],
    popular: false
  }
];

export default function Pricing() {
  return (
    <section className="py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-400">
            Pay only for what you need, scale as you grow
          </p>
          <p className="mt-2 text-blue-400 font-medium">Billed per user monthly</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 ${
                plan.popular
                  ? 'bg-gradient-to-br from-blue-600 to-indigo-700 shadow-xl scale-105'
                  : 'bg-gray-800'
              }`}
            >
              {plan.popular && (
                <span className="bg-blue-500 text-sm font-semibold px-3 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              <h3 className="text-2xl font-bold mt-4">{plan.name}</h3>
              <div className="mt-4 mb-8">
                <span className="text-4xl font-bold">${plan.price}</span>
                <span className="text-gray-400">/user/month</span>
                <div className="mt-1 text-sm text-gray-400">{plan.userTier}</div>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-blue-400" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://maia-beige.vercel.app/register"
                className={`block w-full py-3 rounded-lg font-semibold text-center transition-all ${
                  plan.popular
                    ? 'bg-white text-blue-600 hover:bg-gray-100'
                    : 'bg-blue-600 hover:bg-blue-700'
                }`}
              >
                {plan.name === 'Enterprise' 
                  ? 'Contact Sales'
                  : 'Try Free for 14 Days'}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}