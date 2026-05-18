// hero-v2 dashboard-mockup
import { ArrowRight, ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-28 pb-20 bg-gradient-to-br from-green-light via-white to-orange-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column: copy and CTAs */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white border border-green-200 rounded-full px-4 py-1.5 mb-6 text-sm font-medium text-green-brand">
              <ShieldCheck className="w-4 h-4" />
              Stop wasting food &amp; money
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight">
              Your Kitchen,{' '}
              <span className="text-green-brand">Organized.</span>
              <br />
              Your Meals,{' '}
              <span className="text-orange-brand">Planned.</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-gray-600 leading-relaxed">
              Track what&apos;s in your kitchen, get alerts before food expires, and plan
              meals with the AI assistant that knows what you actually have.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="https://app.pantrytab.com/login?signup=true"
                className="inline-flex items-center justify-center gap-2 bg-orange-brand hover:bg-orange-dark text-white px-8 py-3.5 rounded-xl font-semibold text-lg transition-colors shadow-lg shadow-orange-brand/25"
              >
                Start Using Pantry Tab
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-700 px-8 py-3.5 rounded-xl font-semibold text-lg transition-colors border border-gray-200"
              >
                See Features
              </a>
            </div>
            <p className="mt-4 text-xs text-gray-400">
              By signing up, you agree to our{' '}
              <a href="/terms-of-service" className="underline hover:text-gray-600 transition-colors">Terms of Service</a>
              {', '}
              <a href="/privacy-policy" className="underline hover:text-gray-600 transition-colors">Privacy Policy</a>
              {', and '}
              <a href="/allergy-disclaimer" className="underline hover:text-gray-600 transition-colors">Allergy &amp; Food Safety Disclaimer</a>
              .
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-sm text-gray-500">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green-brand"></span>
                Free Trial
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green-brand"></span>
                No credit card required
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green-brand"></span>
                Works on any device
              </span>
            </div>
          </div>

          {/* Right column: dashboard mockup */}
          <div className="relative">
            {/* Soft glow backdrop */}
            <div
              className="absolute -inset-4 bg-gradient-to-br from-green-light to-orange-light rounded-3xl blur-2xl opacity-60"
              aria-hidden="true"
            />

            <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
              {/* Browser chrome */}
              <div className="bg-gray-50 border-b border-gray-200 px-4 py-3 flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="inline-flex items-center gap-1.5 bg-white border border-gray-200 rounded-md px-3 py-1 text-xs text-gray-500">
                    <span className="w-2 h-2 rounded-full bg-green-500" />
                    app.pantrytab.com
                  </div>
                </div>
                <div className="w-12" />
              </div>

              {/* Screenshot */}
              <img
                src={`${import.meta.env.BASE_URL}screenshots/dashboard-desktop.png`}
                alt="Pantry Tab dashboard showing inventory, AI suggestions, and tonight's meal plan"
                className="w-full h-auto block"
                loading="eager"
                width={2029}
                height={1135}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
