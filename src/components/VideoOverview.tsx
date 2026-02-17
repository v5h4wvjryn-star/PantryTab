export default function VideoOverview() {
  return (
    <section id="overview" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            See Pantry Tab in action
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Watch a quick overview of how Pantry Tab helps you organize your
            kitchen, reduce waste, and plan meals effortlessly.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-900 aspect-video">
            <iframe
              src="https://www.youtube.com/embed/BpnzBATGXYI"
              title="Pantry Tab Overview"
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
