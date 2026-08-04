const stats = [
  { value: '40%', label: 'of food in the U.S. goes to waste each year' },
  { value: '$1,500+', label: 'wasted per household annually on thrown-out groceries' },
  { value: '30 min', label: 'saved per week on meal planning & shopping' },
];

export default function Stats() {
  return (
    <section className="py-16 bg-green-brand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-3 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-4xl sm:text-5xl font-extrabold text-white">{s.value}</div>
              <p className="mt-2 text-green-100 text-sm sm:text-base">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
