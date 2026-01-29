import {
  PackageOpen,
  CalendarClock,
  ShoppingCart,
  ChefHat,
  BadgeDollarSign,
  BellRing,
} from 'lucide-react';

const features = [
  {
    icon: PackageOpen,
    title: 'Pantry Inventory',
    description:
      'Keep a real-time inventory of everything in your pantry, fridge, and freezer. Always know what you have on hand.',
    color: 'bg-green-light text-green-brand',
  },
  {
    icon: CalendarClock,
    title: 'Expiration Tracking',
    description:
      'Get alerts before items expire. Reduce food waste and save money by using ingredients while they\'re still fresh.',
    color: 'bg-orange-light text-orange-brand',
  },
  {
    icon: ShoppingCart,
    title: 'Smart Shopping Lists',
    description:
      'Auto-generate shopping lists based on what\'s running low or what you need for upcoming meals. Never forget an item again.',
    color: 'bg-green-light text-green-brand',
  },
  {
    icon: ChefHat,
    title: 'Recipe & Meal Planning',
    description:
      'Plan meals for the week using recipes matched to what you already have. Discover new dishes with your current ingredients.',
    color: 'bg-orange-light text-orange-brand',
  },
  {
    icon: BadgeDollarSign,
    title: 'Price Comparison',
    description:
      'Compare prices across stores so you always get the best deal. Track spending and identify savings opportunities.',
    color: 'bg-green-light text-green-brand',
  },
  {
    icon: BellRing,
    title: 'Smart Notifications',
    description:
      'Timely reminders for expiring items, low-stock essentials, and weekly meal prep — so nothing slips through the cracks.',
    color: 'bg-orange-light text-orange-brand',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Everything you need to run your kitchen
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            From tracking what's in your pantry to planning every meal — Pantry Tab has you covered.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f) => (
            <div
              key={f.title}
              className="p-6 rounded-2xl border border-gray-100 hover:shadow-lg hover:border-gray-200 transition-all group"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${f.color} mb-4`}>
                <f.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{f.title}</h3>
              <p className="text-gray-600 leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
