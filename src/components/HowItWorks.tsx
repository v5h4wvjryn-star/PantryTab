// PT_WWW_V3
import { UserPlus, Camera, CalendarCheck, ShoppingCart } from 'lucide-react';

const steps = [
  {
    icon: UserPlus,
    step: '1',
    title: 'Create Your Account',
    description: 'Sign up in seconds — no credit card needed. Add anyone in your household and their allergies.',
  },
  {
    icon: Camera,
    step: '2',
    title: 'Photograph Your Shelf',
    description: 'Snap your pantry, fridge, or a receipt. Pantry Tab reads it and fills in your inventory — no typing required.',
  },
  {
    icon: CalendarCheck,
    step: '3',
    title: 'Plan Your Week',
    description: 'Get a full meal plan built from what you already own, with expiring ingredients used first and unsafe recipes filtered out.',
  },
  {
    icon: ShoppingCart,
    step: '4',
    title: 'Send It to the Store',
    description: 'Your grocery list builds itself from the gaps. Push it straight to a Kroger pickup cart and go collect it.',
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
