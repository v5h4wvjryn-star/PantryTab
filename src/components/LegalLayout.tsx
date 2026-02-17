import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useEffect } from 'react';

export default function LegalLayout({
  title,
  lastUpdated,
  children,
}: {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header className="border-b border-gray-200 bg-white sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img
              src={`${import.meta.env.BASE_URL}logo.png`}
              alt="Pantry Tab"
              className="h-10 w-auto object-contain"
            />
          </Link>
          <Link
            to="/"
            className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-green-brand transition-colors font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </header>

      <main className="flex-1 max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-1">{title}</h1>
        <p className="text-sm text-gray-500 mb-10 pb-6 border-b border-gray-200">
          Last Updated: {lastUpdated}
        </p>
        <div>{children}</div>
      </main>

      <footer className="border-t border-gray-200 bg-gray-50 py-8 mt-auto">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-500">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-3">
            <Link to="/terms-of-service" className="hover:text-gray-900 transition-colors">
              Terms of Service
            </Link>
            <Link to="/privacy-policy" className="hover:text-gray-900 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/allergy-disclaimer" className="hover:text-gray-900 transition-colors">
              Allergy &amp; Food Safety Disclaimer
            </Link>
            <Link to="/refund-policy" className="hover:text-gray-900 transition-colors">
              Refund &amp; Cancellation Policy
            </Link>
          </div>
          <p>&copy; {year} Pantry Tab LLC. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
