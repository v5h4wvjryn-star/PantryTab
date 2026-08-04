// PT_WWW_V2 — single-tier pricing. Monthly and yearly differ ONLY on price.
// Do not add feature differences between the two columns.
import { Check } from 'lucide-react';

// Only list what is actually shipped. Review before every release.
const PLAN_FEATURES = [
  'Snap a photo of your shelf to add items',
  'Receipt and barcode scanning',
  'Expiry alerts and reorder points',
  'AI recipe suggestions from what you own',
  'AI weekly meal planning',
  'Meal prep cook sheets',
  'Smart grocery lists',
  'Send your list to Kroger Pickup',
  'Per-person allergy protection',
  'Price comparison across stores',
  'Recipe import from photo, URL, or document',
  'Recipe marketplace',
  'Unlimited items and household members',
];

const SIGNUP_URL = 'https://app.pantrytab.com/login?signup=true';

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            One plan. Every feature. Choose how you want to pay.
          </p>
        </div>

        {/* Trial banner */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="rounded-2xl border-2 border-green-brand bg-green-light px-6 py-5 text-center">
            <p className="text-lg font-semibold text-green-brand">
              Start with a 14-day free trial
            </p>
            <p className="mt-1 text-sm text-gray-600">
              Full access to everything. No credit card required to start.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Yearly — featured */}
          <div className="relative rounded-2xl p-8 bg-green-brand text-white ring-4 ring-green-brand/20 order-1">
            <div className="absolute top-0 right-0 bg-orange-brand text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-2xl">
              BEST VALUE
            </div>
            <h3 className="text-lg font-semibold text-green-100">Yearly</h3>
            <div className="mt-2 flex items-baseline gap-1">
              <span className="text-4xl font-extrabold text-white">$52.99</span>
              <span className="text-sm text-green-200">/year</span>
            </div>
            <p className="mt-2 text-sm text-green-100">
              Works out to $4.42/month — save over 11%.
            </p>
            <ul className="mt-6 space-y-3">
              {PLAN_FEATURES.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <Check className="w-5 h-5 shrink-0 mt-0.5 text-green-200" />
                  <span className="text-sm text-white">{feature}</span>
                </li>
              ))}
            </ul>
            <a href={SIGNUP_URL} className="mt-8 block text-center py-3 rounded-xl font-semibold transition-colors bg-white text-green-brand hover:bg-gray-100">
              Start Free Trial
            </a>
          </div>

          {/* Monthly */}
          <div className="rounded-2xl p-8 bg-white border border-gray-200 order-2">
            <h3 className="text-lg font-semibold text-gray-500">Monthly</h3>
            <div className="mt-2 flex items-baseline gap-1">
              <span className="text-4xl font-extrabold text-gray-900">$4.99</span>
              <span className="text-sm text-gray-500">/month</span>
            </div>
            <p className="mt-2 text-sm text-gray-600">
              Same features. Cancel anytime.
            </p>
            <ul className="mt-6 space-y-3">
              {PLAN_FEATURES.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <Check className="w-5 h-5 shrink-0 mt-0.5 text-green-brand" />
                  <span className="text-sm text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            <a href={SIGNUP_URL} className="mt-8 block text-center py-3 rounded-xl font-semibold transition-colors bg-orange-brand text-white hover:bg-orange-dark">
              Start Free Trial
            </a>
          </div>
        </div>

        <p className="mt-8 text-xs text-center text-gray-400 max-w-2xl mx-auto leading-relaxed">
          By signing up, you agree to our{' '}
          <a href="/terms-of-service" className="underline">Terms of Service</a>
          {', '}
          <a href="/privacy-policy" className="underline">Privacy Policy</a>
          {', and '}
          <a href="/allergy-disclaimer" className="underline">Allergy &amp; Food Safety Disclaimer</a>
          .
        </p>
      </div>
    </section>
  );
}
