import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Free Trial',
    price: '$0',
    period: 'for 2 weeks',
    description: 'All features free for 14 days. No credit card required.',
    features: [
      'Full access to all features',
      'Pantry inventory tracking',
      'Expiration date alerts',
      'Meal planning & recipes',
      'Price comparison across stores',
      'Shopping lists',
    ],
    cta: 'Start Free Trial',
    featured: false,
  },
  {
    name: 'Pro',
    price: '$4.99',
    period: '/month',
    description: 'For the serious home cook. Pay monthly, cancel anytime.',
    features: [
      'Unlimited items',
      'Meal planning & recipes',
      'Price comparison across stores',
      'Multiple households',
      'Expiration date alerts',
      'Priority support',
    ],
    cta: 'Get Pro Monthly',
    featured: true,
  },
  {
    name: 'Yearly',
    price: '$52.99',
    period: '/year',
    description: 'Best value — save over 10% compared to monthly.',
    features: [
      'Everything in Pro',
      'Billed annually at $52.99',
      'Up to 6 family members',
      'Shared shopping lists',
      'Family meal calendar',
      'Early access to new features',
    ],
    cta: 'Get Yearly Plan',
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Start free. Upgrade when you're ready for more.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 ${
                plan.featured
                  ? 'bg-green-brand text-white ring-4 ring-green-brand/20 scale-105'
                  : 'bg-white border border-gray-200'
              }`}
            >
              <h3 className={`text-lg font-semibold ${plan.featured ? 'text-green-100' : 'text-gray-500'}`}>
                {plan.name}
              </h3>
              <div className="mt-2 flex items-baseline gap-1">
                <span className={`text-4xl font-extrabold ${plan.featured ? 'text-white' : 'text-gray-900'}`}>
                  {plan.price}
                </span>
                <span className={`text-sm ${plan.featured ? 'text-green-200' : 'text-gray-500'}`}>
                  {plan.period}
                </span>
              </div>
              <p className={`mt-2 text-sm ${plan.featured ? 'text-green-100' : 'text-gray-600'}`}>
                {plan.description}
              </p>

              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check className={`w-5 h-5 shrink-0 mt-0.5 ${plan.featured ? 'text-green-200' : 'text-green-brand'}`} />
                    <span className={`text-sm ${plan.featured ? 'text-white' : 'text-gray-700'}`}>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://app.pantrytab.com/login?signup=true"
                className={`mt-8 block text-center py-3 rounded-xl font-semibold transition-colors ${
                  plan.featured
                    ? 'bg-white text-green-brand hover:bg-gray-100'
                    : 'bg-orange-brand text-white hover:bg-orange-dark'
                }`}
              >
                {plan.cta}
              </a>
              <p className={`mt-3 text-xs text-center leading-relaxed ${plan.featured ? 'text-green-200' : 'text-gray-400'}`}>
                By signing up, you agree to our{' '}
                <a href="/terms-of-service" className="underline">Terms of Service</a>
                {', '}
                <a href="/privacy-policy" className="underline">Privacy Policy</a>
                {', and '}
                <a href="/allergy-disclaimer" className="underline">Allergy &amp; Food Safety Disclaimer</a>
                .
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
