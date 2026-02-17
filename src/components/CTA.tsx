import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section id="get-started" className="py-20 bg-gradient-to-br from-green-light via-white to-orange-light">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Ready to take control of your kitchen?
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-xl mx-auto">
          Join thousands of households saving time, money, and food with Pantry Tab.
          Get started for free — no credit card required.
        </p>
        <div className="mt-10">
          <a
            href="https://app.pantrytab.com/login?signup=true"
            className="inline-flex items-center justify-center gap-2 bg-orange-brand hover:bg-orange-dark text-white px-10 py-4 rounded-xl font-semibold text-lg transition-colors shadow-lg shadow-orange-brand/25"
          >
            Start Using Pantry Tab
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
