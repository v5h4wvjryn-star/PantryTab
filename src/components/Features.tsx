// PT_WWW_V3 — every card below describes a SHIPPED feature.
// Verify against the live app before adding anything here.
import {
  ShoppingCart,
  Camera,
  ChefHat,
  ShieldCheck,
  CalendarClock,
  BadgeDollarSign,
} from 'lucide-react';

const features = [
  {
    icon: ShoppingCart,
    title: 'Send Your List to Kroger',
    description:
      'Connect your Kroger account and push your grocery list straight into a pickup cart. No retyping, no switching apps — your pantry builds the list, Kroger fills the order.',
    color: 'bg-orange-light text-orange-brand',
  },
  {
    icon: Camera,
    title: 'Photograph Your Shelf',
    description:
      'Point your phone at a shelf, fridge, or receipt. Pantry Tab reads it and adds every item for you. Barcode scanning too, when you want it.',
    color: 'bg-green-light text-green-brand',
  },
  {
    icon: ChefHat,
    title: 'Batch-Cook Your Week',
    description:
      'Tag the meals you want to prep ahead — gym lunches, weekday dinners — and get one cook sheet. Consolidated prep list, a timeline that cooks the stir-fry while the pork bakes, plus storage and reheat notes for every container.',
    color: 'bg-orange-light text-orange-brand',
  },
  {
    icon: ShieldCheck,
    title: 'Allergy Protection That Actually Reads Labels',
    description:
      'Set allergies for each person in your household. Unsafe recipes are excluded from your plan entirely — and hidden allergens get caught in ingredients you would not think to check.',
    color: 'bg-green-light text-green-brand',
  },
  {
    icon: CalendarClock,
    title: 'Meal Plans From What You Own',
    description:
      'Plan a full week in one click. Suggestions come from what is actually in your kitchen, prioritising ingredients that expire soonest.',
    color: 'bg-orange-light text-orange-brand',
  },
  {
    icon: BadgeDollarSign,
    title: 'Expiry Alerts & Reorder Points',
    description:
      'Know what is about to go off before it does. Set reorder points on staples and they land on your grocery list automatically.',
    color: 'bg-green-light text-green-brand',
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
            From a photo of your shelf to a cart at your grocery store — Pantry Tab closes the loop.
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
