import { useState } from 'react'
import { CheckIcon } from 'lucide-react'

export default function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState(null)

  const plans = [
    {
      name: 'AI Bot Response',
      price: 699,
      features: [
        '3 calls (5-7 mins each) on different topics',
        '1 long call (15-20 mins)',
        'Practice with AI-powered interviews',
        'Instant feedback and suggestions'
      ]
    },
    {
      name: 'AI Bot Plus Faculty Analysis',
      price: 1999,
      features: [
        'All features of AI Bot Response',
        'In-depth analysis by faculty experts',
        'Personalized improvement strategies',
        'Written report with detailed feedback'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            English Interview Study Abroad Packages
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Choose the perfect plan to prepare for your study abroad interview
          </p>
        </div>
        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-2">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200 ${
                selectedPlan === plan.name ? 'ring-2 ring-indigo-500' : ''
              }`}
            >
              <div className="p-6">
                <h2 className="text-lg leading-6 font-medium text-gray-900">{plan.name}</h2>
                <p className="mt-4 text-sm text-gray-500">
                  {plan.name === 'AI Bot Response'
                    ? 'Practice with our AI-powered interview bot'
                    : 'Get expert analysis along with AI practice'}
                </p>
                <p className="mt-8">
                  <span className="text-4xl font-extrabold text-gray-900">₹{plan.price}</span>
                </p>
                <button
                  onClick={() => setSelectedPlan(plan.name)}
                  className={`mt-8 block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900 ${
                    selectedPlan === plan.name ? 'bg-indigo-600 hover:bg-indigo-700 border-indigo-600' : ''
                  }`}
                >
                  {selectedPlan === plan.name ? 'Selected' : 'Select Plan'}
                </button>
              </div>
              <div className="pt-6 pb-8 px-6">
                <h3 className="text-xs font-medium text-gray-900 tracking-wide uppercase">What's included</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex space-x-3">
                      <CheckIcon className="flex-shrink-0 h-5 w-5 text-green-500" aria-hidden="true" />
                      <span className="text-sm text-gray-500">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}