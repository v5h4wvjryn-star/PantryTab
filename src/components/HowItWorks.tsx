import { UserPlus, ScanBarcode, Utensils, TrendingDown } from 'lucide-react';

const steps = [
  {
    icon: UserPlus,
    step: '1',
    title: 'Create Your Account',
    description: 'Sign up in seconds — no credit card needed. Start building your kitchen profile right away.',
  },
  {
    icon: ScanBarcode,
    step: '2',
    title: 'Add Your Items',
    description: 'Quickly add pantry, fridge, and freezer items. Set quantities and expiration dates to stay organized.',
  },
  {
    icon: Utensils,
    step: '3',
    title: 'Plan Meals & Shop Smart',
    description: 'Get recipe suggestions based on what you have. Generate shopping lists and compare prices across stores.',
  },
  {
    icon: TrendingDown,
    step: '4',
    title: 'Waste Less, Save More',
    description: 'Receive timely alerts before food expires. Track your spending and watch the savings add up over time.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Up and running in minutes
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Getting started with Pantry Tab is simple. Here's how it works.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s) => (
            <div key={s.step} className="text-center">
              <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-brand text-white mb-4">
                <s.icon className="w-7 h-7" />
                <span className="absolute -top-1 -right-1 w-6 h-6 bg-orange-brand text-white text-xs font-bold rounded-full flex items-center justify-center">
                  {s.step}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{s.title}</h3>
              <p className="text-gray-600 leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
